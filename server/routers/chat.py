import uuid
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException

from database import get_database
from models import ChatRequest, ChatResponse, HistoryResponse, MessageItem
from services.openrouter import get_ai_response

router = APIRouter(prefix="/api", tags=["chat"])


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    db = get_database()
    sessions = db["sessions"]
    messages = db["messages"]

    session_id = request.session_id or str(uuid.uuid4())
    now = datetime.now(timezone.utc)

    await sessions.update_one(
        {"_id": session_id},
        {"$set": {"last_active": now}, "$setOnInsert": {"created_at": now}},
        upsert=True,
    )

    recent_cursor = messages.find(
        {"session_id": session_id}
    ).sort("created_at", -1).limit(20)
    recent_docs = await recent_cursor.to_list(length=20)
    recent_docs.reverse()

    history = [{"role": doc["role"], "content": doc["content"]} for doc in recent_docs]
    history.append({"role": "user", "content": request.message})

    await messages.insert_one({
        "session_id": session_id,
        "role": "user",
        "content": request.message,
        "created_at": now,
    })

    try:
        reply = await get_ai_response(history)
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"AI service error: {str(e)}")

    result = await messages.insert_one({
        "session_id": session_id,
        "role": "assistant",
        "content": reply,
        "created_at": datetime.now(timezone.utc),
    })

    return ChatResponse(reply=reply, session_id=session_id, message_id=str(result.inserted_id))


@router.get("/history/{session_id}", response_model=HistoryResponse)
async def get_history(session_id: str):
    db = get_database()
    cursor = db["messages"].find({"session_id": session_id}).sort("created_at", 1)
    docs = await cursor.to_list(length=None)

    return HistoryResponse(
        session_id=session_id,
        messages=[
            MessageItem(
                role=doc["role"],
                content=doc["content"],
                timestamp=doc["created_at"].isoformat(),
            )
            for doc in docs
        ],
    )


@router.delete("/history/{session_id}")
async def clear_history(session_id: str):
    db = get_database()
    await db["messages"].delete_many({"session_id": session_id})
    await db["sessions"].delete_one({"_id": session_id})
    return {"status": "cleared", "session_id": session_id}


@router.get("/health")
async def health():
    return {"status": "ok", "service": "portfolio-chat-api"}
