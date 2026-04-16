import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search your Space here..."
                className="pl-10 pr-4"
              />
            </div>
          </div>
          <Button asChild size="icon" className="relative">
            <Link to="/Semicoln/notifications" aria-label="Notifications">
              <Bell className="text-primary-Blue size-7" />
            </Link>
          </Button>
        </div>
      </header>
  );
};

export default Header;
