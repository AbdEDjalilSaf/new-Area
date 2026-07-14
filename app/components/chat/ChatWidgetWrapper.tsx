"use client";

import ContactChatWidget from "./ContactChatWidget";

export default function ChatWidgetWrapper() {
  async function handleSendMessage(message: string) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      return data.reply ?? "Thanks for reaching out! I'll get back to you soon.";
    } catch (err) {
      console.error("Chat widget send failed:", err);
      return "Hmm, something went wrong sending that — mind trying again or emailing me directly?";
    }
  }
 
  return (
    <ContactChatWidget
      hostName="Abd el-Djalil"
      hostStatus="Usually replies within a few hours"
      onSendMessage={handleSendMessage}
    />
  );
}