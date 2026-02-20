from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from config import settings

client: AsyncIOMotorClient = None


def get_database() -> AsyncIOMotorDatabase:
    return client["portfolio_chat"]


async def connect_db():
    global client
    client = AsyncIOMotorClient(settings.mongodb_uri)
    db = get_database()
    await db["messages"].create_index(
        [("session_id", 1), ("created_at", 1)]
    )


async def close_db():
    if client:
        client.close()
