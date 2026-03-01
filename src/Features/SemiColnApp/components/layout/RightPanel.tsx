// src/components/layout/RightPanel.tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileUpdateAlert from "./profileUpateAlert";
import { Calendar } from "@/shared/components/Calander";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function RightPanel() {
  return (
    <aside className="hidden xl:flex w-72 bg-white dark:bg-gray-900 border-l flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center flex-col justify-center  w-full gap-3">
          <ProfileUpdateAlert />
          <div>
            <div className="font-semibold text-sm">Oni Faith Ayoola</div>
            <div className="text-xs text-gray-500">onifaith@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full bg-primary-Blue hover:bg-primary-Blue/80 text-white">
           <Link to="/Semicoln/profile" className=" w-full">My Profile</Link>
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-2 dark:bg-gray-900">
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="reminder">Reminder</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="mt-4 ">
            <Calendar />
          </TabsContent>

          <TabsContent value="reminder">
            <p className="text-sm text-gray-500">No reminders yet</p>
          </TabsContent>
        </Tabs>
      </div>
    </aside>
  );
}
