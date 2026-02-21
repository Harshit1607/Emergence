const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface ChatApiResponse {
  reply: string;
  session_id: string;
  message_id: string;
}

export async function sendMessage(
  message: string,
  sessionId: string
): Promise<ChatApiResponse> {
  console.log(API_BASE);
  const response = await fetch(`${API_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, session_id: sessionId }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export async function clearHistory(sessionId: string): Promise<void> {
  await fetch(`${API_BASE}/api/history/${sessionId}`, {
    method: 'DELETE',
  });
}
