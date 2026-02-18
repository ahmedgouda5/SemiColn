import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X, Calendar } from "lucide-react";

const TaskAddModel = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-primary-Blue text-white py-3 rounded-md hover:bg-primary-Blue/80 transition-colors font-medium"
        >
          Create a Task
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md p-6">
        <div className="flex justify-end ">
          <AlertDialogCancel className="absolute top-4 right-4 text-gray-700 hover:text-gray-600">
            <X size={20} />
          </AlertDialogCancel>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Create Task</h2>

        <form action="">
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">
              Task Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Task Priority
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                <option>Less Important</option>
                <option>Important</option>
                <option>Very Important</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Due Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="Today"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <Calendar
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Task Description
            </label>
            <textarea
              placeholder="Type your content here..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button className=" w-fit  bg-blue-600 text-white py-3 px-10 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Create Task
          </button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TaskAddModel;
