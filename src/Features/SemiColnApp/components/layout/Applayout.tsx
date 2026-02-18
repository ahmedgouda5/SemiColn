// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col">
        <Header/>
       <div className='flex-1 overflow-y-auto bg-[#EEF1F8]'>
         <Outlet />
       </div>
      </main>
      
      <RightPanel />
    </div>
  );
} 