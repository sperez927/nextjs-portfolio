import { useState } from 'react'

type Message = {
  role: 'user' | 'ai'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi — ask me anything about my work or projects!" },
  ])
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (!input.trim()) return
    const question = input
    setMessages((prev) => [...prev, { role: 'user', content: question }])
    setInput('')

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    })

    const data = await res.json()
    setMessages((prev) => [...prev, { role: 'ai', content: data.answer }])
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ask Me About My Experience</h1>
      <div className="space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div
            className={`p-2 rounded ${
              msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'
            }`}
            key={i}
          >
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          value={input}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  )
}
