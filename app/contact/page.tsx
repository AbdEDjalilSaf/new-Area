"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, X, MessageCircle, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

type Sender = "visitor" | "host";

interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  time: string;
}

interface ContactChatWidgetProps {
  /** Name shown in the header, e.g. your name or "Nood" */
  hostName?: string;
  /** Short status line under the name */
  hostStatus?: string;
  /** Path/URL to your avatar image. Falls back to initials if omitted */
  avatarSrc?: string;
  /** First message the widget greets visitors with */
  greeting?: string;
  /** Quick-reply chips shown above the input on first open */
  quickReplies?: string[];
  /**
   * Called whenever a visitor sends a message — wire this up to
   * your real backend (email API route, Slack webhook, etc).
   * If omitted, the widget falls back to a canned auto-reply.
   */
  onSendMessage?: (message: string) => Promise<string | void> | string | void;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const timeNow = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const uid = () => Math.random().toString(36).slice(2, 10);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactChatWidget({
  hostName = "Nood",
  hostStatus = "Usually replies within a day",
  avatarSrc,
  greeting = "Hey! 👋 Got a project in mind or just want to say hi? Drop a message below.",
  quickReplies = ["I have a project idea", "Just browsing", "Let's collaborate"],
  onSendMessage,
}: ContactChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: uid(), sender: "host", text: greeting, time: timeNow() },
  ]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) {
      setHasUnread(false);
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
      const clear = () => {
        document.body.style.overflow = "";
      };
      // only lock scroll on small screens where the panel is full-screen
      if (window.matchMedia("(min-width: 640px)").matches) clear();
      return clear;
    }
  }, [open]);

  async function pushVisitorMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const visitorMsg: ChatMessage = { id: uid(), sender: "visitor", text: trimmed, time: timeNow() };
    setMessages((prev) => [...prev, visitorMsg]);
    setDraft("");
    setIsTyping(true);

    try {
      const reply = onSendMessage
        ? await onSendMessage(trimmed)
        : "Thanks for reaching out! This is a demo reply — wire up `onSendMessage` to connect this to email or Slack.";

      // small delay so the typing indicator feels real, not instant
      await new Promise((r) => setTimeout(r, 500));

      if (reply) {
        setMessages((prev) => [
          ...prev,
          { id: uid(), sender: "host", text: reply, time: timeNow() },
        ]);
      }
    } finally {
      setIsTyping(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    void pushVisitorMessage(draft);
  }

  const initials = hostName
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* ---------------------------------------------------------- */}
      {/* Chat panel                                                   */}
      {/* ---------------------------------------------------------- */}
      <div
        className={[
          "fixed inset-0 sm:absolute sm:inset-auto sm:bottom-[72px] sm:right-0",
          "flex flex-col overflow-hidden",
          "bg-[#0F0F12] text-[#F2F1ED]",
          "sm:h-[560px] sm:w-[380px] sm:rounded-3xl sm:border sm:border-white/10 sm:shadow-2xl sm:shadow-black/40",
          "origin-bottom-right transition-all duration-300 ease-out",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0 sm:translate-y-2",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label={`Chat with ${hostName}`}
      >
        {/* Header */}
        <div className="relative shrink-0 border-b border-white/10 bg-gradient-to-br from-[#1A1A20] to-[#0F0F12] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <span className="absolute inset-0 -m-0.5 rounded-full bg-[#6D5EF0]/40 blur-[6px] animate-pulse" />
              <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-[#6D5EF0]/60">
                {avatarSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatarSrc} alt={hostName} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#6D5EF0] text-sm font-semibold text-white">
                    {initials}
                  </div>
                )}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#0F0F12] bg-[#3ECF8E]" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold tracking-tight">{hostName}</p>
              <p className="truncate text-xs text-white/50">{hostStatus}</p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D5EF0]"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4 [scrollbar-width:thin]"
        >
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} hostInitials={initials} avatarSrc={avatarSrc} />
          ))}

          {isTyping && <TypingBubble hostInitials={initials} avatarSrc={avatarSrc} />}

          {messages.length === 1 && quickReplies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  type="button"
                  onClick={() => pushVisitorMessage(qr)}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-[#6D5EF0]/60 hover:bg-[#6D5EF0]/10 hover:text-white"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="shrink-0 border-t border-white/10 bg-[#0F0F12] p-3"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-1.5 py-1.5 transition focus-within:border-[#6D5EF0]/60">
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write a message…"
              aria-label="Message"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6D5EF0] text-white transition enabled:hover:bg-[#5b4de0] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D5EF0]"
            >
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Launcher button                                              */}
      {/* ---------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with " + hostName}
        aria-expanded={open}
        className={[
          "relative flex h-14 w-14 items-center justify-center rounded-full",
          "bg-[#6D5EF0] text-white shadow-lg shadow-[#6D5EF0]/30",
          "transition-transform duration-300 ease-out hover:scale-105 active:scale-95",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D5EF0]",
          open ? "rotate-90" : "rotate-0",
        ].join(" ")}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && hasUnread && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3ECF8E] ring-2 ring-[#0F0F12]">
            <Sparkles size={9} className="text-[#0F0F12]" />
          </span>
        )}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function MessageBubble({
  message,
  hostInitials,
  avatarSrc,
}: {
  message: ChatMessage;
  hostInitials: string;
  avatarSrc?: string;
}) {
  const isHost = message.sender === "host";
  return (
    <div className={["flex items-end gap-2", isHost ? "justify-start" : "justify-end"].join(" ")}>
      {isHost && <MiniAvatar initials={hostInitials} avatarSrc={avatarSrc} />}
      <div
        className={[
          "max-w-[75%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-relaxed",
          isHost
            ? "rounded-bl-sm bg-white/[0.07] text-white/90"
            : "rounded-br-sm bg-[#6D5EF0] text-white",
        ].join(" ")}
      >
        <p>{message.text}</p>
        <span
          className={[
            "mt-1 block text-[10px]",
            isHost ? "text-white/30" : "text-white/60",
          ].join(" ")}
        >
          {message.time}
        </span>
      </div>
    </div>
  );
}

function TypingBubble({ hostInitials, avatarSrc }: { hostInitials: string; avatarSrc?: string }) {
  return (
    <div className="flex items-end gap-2">
      <MiniAvatar initials={hostInitials} avatarSrc={avatarSrc} />
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/[0.07] px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-white/50 [animation:bounce_1s_infinite]"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function MiniAvatar({ initials, avatarSrc }: { initials: string; avatarSrc?: string }) {
  return (
    <div className="mb-0.5 h-6 w-6 shrink-0 overflow-hidden rounded-full">
      {avatarSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatarSrc} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#6D5EF0] text-[9px] font-semibold text-white">
          {initials}
        </div>
      )}
    </div>
  );
}