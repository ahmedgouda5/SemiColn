import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X, Calendar, Edit, Trash2 } from "lucide-react";

const TaskAddModel = ({
  typeofAction,
}: {
  typeofAction: "create" | "edit" | "Delete";
}) => {
  return (
    <>
      {typeofAction === "Delete" ? (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
              aria-label="Delete task"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-md p-6">
            <div className="flex justify-end">
              <AlertDialogCancel className="absolute top-4 right-4 text-gray-700 hover:text-gray-600">
                <X size={20} />
              </AlertDialogCancel>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Delete Task</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </p>
            <div className="flex gap-3">
              <AlertDialogCancel className="flex-1 bg-primary-Blue text-white py-2 rounded-md hover:bg-primary-Blue/80 transition-colors font-medium border-0">
                No
              </AlertDialogCancel>
              <button className="flex-1 bg-red-100 text-red-500 py-2 rounded-md hover:bg-red-200 transition-colors font-medium">
                Yes
              </button>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full bg-primary-Blue text-white py-3 rounded-md hover:bg-primary-Blue/80 transition-colors font-medium"
            >
              {typeofAction === "create" ? (
                "Create a Task"
              ) : (
                <Edit className="w-5 h-5" />
              )}
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className="max-w-md p-6">
            <div className="flex justify-end ">
              <AlertDialogCancel className="absolute top-4 right-4 text-gray-700 hover:text-gray-600">
                <X size={20} />
              </AlertDialogCancel>
            </div>

            <h2 className="text-2xl font-semibold mb-6">
              {typeofAction === "create" ? "Create Task" : "Edit Task"}
            </h2>

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

              {typeofAction === "create" ? (
                <button className=" w-fit  bg-blue-600 text-white py-3 px-10 rounded-md hover:bg-blue-700 transition-colors font-medium">
                  Create Task
                </button>
              ) : (
                <button className=" w-fit  bg-blue-600 text-white py-3 px-10 rounded-md hover:bg-blue-700 transition-colors font-medium">
                  Edit Task
                </button>
              )}
            </form>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default TaskAddModel;
