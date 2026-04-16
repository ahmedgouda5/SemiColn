import { useState } from "react";
import { CheckCircle2, Clock, MailOpen, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  category: "inbox" | "mentions" | "tasks" | "system";
  unread?: boolean;
  starred?: boolean;
};

const notifications: Notification[] = [
  {
    id: "n1",
    title: "Workspace Developer",
    message: "Deployment succeeded. New build is live for your workspace.",
    time: "2m ago",
    category: "system",
    unread: true,
    starred: true,
  },
  {
    id: "n2",
    title: "Tasks",
    message: "You were assigned: “Finalize Q3 milestone plan”.",
    time: "18m ago",
    category: "tasks",
    unread: true,
  },
  {
    id: "n3",
    title: "Mentions",
    message: "Sam mentioned you in “API status update”.",
    time: "1h ago",
    category: "mentions",
  },
  {
    id: "n4",
    title: "Workspace System",
    message: "Reminder: Rotate secrets for staging by Friday.",
    time: "Yesterday",
    category: "system",
  },
  {
    id: "n5",
    title: "Tasks",
    message: "Design review scheduled for 3:00 PM tomorrow.",
    time: "Mon",
    category: "tasks",
  },
];

export default function Notifications() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const selected = notifications.find((item) => item.id === selectedId) ?? null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Notifications
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A curated inbox for workspace updates.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="gap-2 bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                <MailOpen className="h-4 w-4" />
                Mark all read
              </Button>
            </div>
          </div>

          <section className="grid grid-cols-1 min-w-0">
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col min-h-0">
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  All notifications
                </div>
                <div className="text-xs text-gray-400">
                  {notifications.length} items
                </div>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800 flex-1 overflow-y-auto">
                {notifications.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedId(item.id);
                      setDialogOpen(true);
                    }}
                    className={cn(
                      "w-full px-5 py-4 text-left flex items-start gap-3 transition",
                      selected?.id === item.id
                        ? "bg-blue-50/70 dark:bg-gray-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/60",
                    )}
                  >
                    <div
                      className={cn(
                        "mt-1 h-2 w-2 rounded-full",
                        item.unread ? "bg-blue-600" : "bg-transparent",
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {item.title}
                        </p>
                        <span className="text-xs text-gray-400">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {item.message}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>Updated {item.time}</span>
                      </div>
                    </div>
                    <Star
                      className={cn(
                        "h-4 w-4",
                        item.starred
                          ? "text-yellow-500"
                          : "text-gray-300 dark:text-gray-600",
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="max-w-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-0">
          {selected && (
            <div className="relative">
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
                <AlertDialogHeader className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">
                    {selected.category}
                  </p>
                  <AlertDialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selected.title}
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDialogOpen(false)}
                >
                  <X className="h-4 w-4 text-gray-500" />
                </Button>
              </div>

              <div className="px-6 py-5 space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selected.message}
                </p>
                <div className="rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 p-4 text-sm text-gray-500 dark:text-gray-400">
                  Add a note or assign this notification to a teammate.
                </div>
              </div>

              <div className="px-6 pb-6 flex flex-wrap gap-3">
                <Button className="bg-blue-600 text-white hover:bg-blue-500">
                  Open item
                </Button>
                <Button variant="outline">Snooze</Button>
                <Button variant="outline">Archive</Button>
                <Button variant="outline" className="gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Resolve
                </Button>
              </div>
            </div>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
