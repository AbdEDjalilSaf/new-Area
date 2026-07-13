// Drop this in app/layout.tsx (or any page) so it floats on every route.
import ChatWidgetWrapper from "@/app/components/chat/ChatWidgetWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        <ChatWidgetWrapper />
      </body>
    </html>
  );
}
