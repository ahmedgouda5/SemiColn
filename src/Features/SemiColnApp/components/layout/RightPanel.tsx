// src/components/layout/RightPanel.tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileUpdateAlert from "./profileUpateAlert";
import { Calendar } from "@/shared/components/Calander";

export default function RightPanel() {
  return (
    <aside className="hidden xl:flex w-72 bg-white border-l flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center flex-col justify-center  w-full gap-3">
          <Avatar className="h-12 w-12 bg-black">
            <AvatarFallback className="bg-black text-white font-bold">
              OF
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-sm">Oni Faith Ayoola</div>
            <div className="text-xs text-gray-500">onifaith@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <ProfileUpdateAlert />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="reminder">Reminder</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="mt-4">
            <Card className="p-4">
              <Calendar />
            </Card>
          </TabsContent>

          <TabsContent value="reminder">
            <Card className="p-4">
              <p className="text-sm text-gray-500">No reminders yet</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </aside>
  );
}
