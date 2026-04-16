import { useState } from "react";
import { Search, Phone, Video, MoreVertical, Send } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWorkSpaceStore } from "@/store/WorkSpaceStore";

type ChatThread = {
  id: string;
  name: string;
  role: string;
  unread: number;
  lastMessage: string;
  lastTime: string;
};

type Message = {
  id: string;
  sender: string;
  text: string;
  time: string;
};

const threads: ChatThread[] = [
  {
    id: "dev",
    name: "Workspace Developer",
    role: "Product Engineer",
    unread: 2,
    lastMessage: "I pushed a fix for the overview stats.",
    lastTime: "9:18 AM",
  },
  {
    id: "qa",
    name: "QA Partner",
    role: "Quality Analyst",
    unread: 0,
    lastMessage: "Ready to verify the latest build.",
    lastTime: "Yesterday",
  },
  {
    id: "design",
    name: "Design Lead",
    role: "UI/UX",
    unread: 0,
    lastMessage: "Shared the updated sidebar icons.",
    lastTime: "Mon",
  },
];

const messagesByThread: Record<string, Message[]> = {
  dev: [
    {
      id: "m1",
      sender: "dev",
      text: "Hey! I can help wire the chat page to real-time later.",
      time: "9:12 AM",
    },
    {
      id: "m2",
      sender: "me",
      text: "Great. For now, keep it WhatsApp-like with quick actions.",
      time: "9:14 AM",
    },
    {
      id: "m3",
      sender: "dev",
      text: "Done. Also, the overview task summary now reads live data.",
      time: "9:18 AM",
    },
  ],
  qa: [
    {
      id: "m4",
      sender: "qa",
      text: "Ping me when you want a quick regression pass.",
      time: "Yesterday",
    },
  ],
  design: [
    {
      id: "m5",
      sender: "design",
      text: "I left notes on the chat gradients.",
      time: "Mon",
    },
  ],
};

export default function Chat() {
  const workspaceName = useWorkSpaceStore((s) => s.workspaceName);
  const [activeThread, setActiveThread] = useState<ChatThread>(threads[0]);
  const [messageInput, setMessageInput] = useState("");

  const activeMessages = messagesByThread[activeThread.id] ?? [];

  return (
    <div className="h-[calc(100vh-2rem)] p-4 md:p-6">
      <div className="h-full grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Chats</h2>
                <p className="text-xs text-gray-500">
                  {workspaceName ?? "Select a workspace"} workspace
                </p>
              </div>
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
            <div className="mt-4 relative">
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search messages"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {threads.map((thread) => {
              const isActive = thread.id === activeThread.id;
              const initials = thread.name
                .split(/\s+/)
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <button
                  key={thread.id}
                  onClick={() => setActiveThread(thread)}
                  className={cn(
                    "w-full px-4 py-3 text-left flex items-center gap-3 border-b border-gray-100 transition",
                    isActive ? "bg-blue-50/70" : "hover:bg-gray-50",
                  )}
                >
                  <Avatar className="h-10 w-10 border border-gray-100">
                    <AvatarFallback className="bg-blue-600 text-white text-sm font-semibold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {thread.name}
                      </p>
                      <span className="text-[10px] text-gray-400">
                        {thread.lastTime}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {thread.lastMessage}
                    </p>
                    <p className="text-[10px] text-gray-400">{thread.role}</p>
                  </div>
                  {thread.unread > 0 && (
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                      {thread.unread}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-gray-100">
                <AvatarFallback className="bg-gray-900 text-white text-sm font-semibold">
                  {activeThread.name
                    .split(/\s+/)
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {activeThread.name}
                </p>
                <p className="text-xs text-gray-500">{activeThread.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <Phone className="h-4 w-4 text-gray-500" />
              </Button>
              <Button size="icon" variant="ghost">
                <Video className="h-4 w-4 text-gray-500" />
              </Button>
              <Button size="icon" variant="ghost">
                <MoreVertical className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-linear-to-b from-emerald-50 via-slate-50 to-white p-6 space-y-4">
            {activeMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-end gap-2",
                  message.sender === "me" ? "justify-end" : "justify-start",
                )}
              >
                {message.sender !== "me" && (
                  <Avatar className="h-7 w-7 border border-gray-100">
                    <AvatarFallback className="bg-blue-600 text-white text-[10px] font-semibold">
                      WD
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                    message.sender === "me"
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-md",
                  )}
                >
                  <p>{message.text}</p>
                  <span
                    className={cn(
                      "mt-2 block text-[10px]",
                      message.sender === "me"
                        ? "text-blue-100"
                        : "text-gray-400",
                    )}
                  >
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <input
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                placeholder="Write a message"
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                className="rounded-full bg-blue-600 hover:bg-blue-500"
                disabled={!messageInput.trim()}
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
