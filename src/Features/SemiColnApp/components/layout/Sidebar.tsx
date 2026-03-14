// src/components/layout/Sidebar.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { navItems } from "../../type";
import { useUserStore } from "@/store/UserStore";

export default function Sidebar() {
  const location = useLocation();
  console.log();
  const navigate = useNavigate();
  const userName = useUserStore((s) => s.userName);


  const initials = userName
    ? userName
        .trim()
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return (
    <aside className="flex h-screen">
      <div className="w-14 bg-blue-600 flex flex-col items-center py-4 gap-6">
        <Avatar className="h-10 w-10 border-2 border-white">
          <AvatarFallback className="bg-white text-blue-600 font-bold">
          {initials}
          </AvatarFallback>
        </Avatar>

        <Button
          size="icon"
          className="rounded-xl bg-blue-500 hover:bg-blue-400"
          onClick={() => navigate("/")}
        >
          <Plus className="h-5 w-5" />
        </Button>
        <nav className="flex-1 px-3 space-y-1 md:hidden flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition",
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-200 hover:bg-blue-400"
                )}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:flex w-44 bg-white dark:bg-gray-900 border-r flex-col">
        <div className="px-6 py-6">
          <h2 className="font-semibold text-gray-900 dark:text-gray-50">Me & I</h2>
          <p className="text-sm text-gray-400 ">Emmanuel's Space</p>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition",
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 hover:bg-gray-100"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-blue-600" />
                )}

                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
