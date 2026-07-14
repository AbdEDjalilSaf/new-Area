"use client";

import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setContactOpen } from "@/store/initialSlice";

interface ContactChatWidgetProps {
  hostName: string;
  hostStatus: string;
  onSendMessage: (message: string) => Promise<string>;
}

export default function ContactChatWidget({
  hostName,
  hostStatus,
  onSendMessage,
}: ContactChatWidgetProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "host"; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const contactOpen = useSelector((state: any) => state.initial.contactOpen);
  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const reply = await onSendMessage(userMessage);
      setMessages((prev) => [...prev, { role: "host", content: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "host", content: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!contactOpen ? (
        <button
          className="hidden"
        >
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl w-80 max-h-[500px] flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{hostName}</h3>
              <p className="text-xs text-blue-100">{hostStatus}</p>
            </div>
            <button
              onClick={() => dispatch(setContactOpen(false))}
              className="text-white "
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[350px]">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm text-center">
                Start a conversation with {hostName}
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[80%]">
                <p className="text-sm">Typing...</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !message.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
