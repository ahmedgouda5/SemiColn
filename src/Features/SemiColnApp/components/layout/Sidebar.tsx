// src/components/layout/Sidebar.tsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { navItems } from '../../type';
import { Plus } from 'lucide-react';


export default function Sidebar() {
  const location = useLocation();
const Navigate = useNavigate();
  return (
    <aside className="w-16 lg:w-60 bg-blue-600 text-white flex flex-col">
      <div className="p-4  flex items-center justify-center ">
        <Avatar className="h-15 w-15 bg-white ">
          <AvatarFallback className="bg-black text-white">
            OF
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="px-4 mb-6 hidden lg:block">
        <Button 
          variant="secondary" 
          className="w-full justify-start gap-2"
          onClick={() => Navigate("/")}
        >
          <Plus className="h-4 w-4" />
          <span>New</span>
        </Button>
      </div>

      <div className="px-4 mb-6 hidden lg:block">
        <div className="text-sm">
          <div className="font-semibold">Me & I</div>
          <div className="text-blue-200 text-xs">Emmauel's Space</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                'hover:bg-blue-700',
                isActive && 'bg-blue-700',
                'lg:justify-start justify-center'
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}