import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X, Calendar, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Task } from "../../type";

const taskSchema = z.object({
  taskName: z.string().min(1, "Task name is required"),
  taskDescription: z.string().optional(),
  priority: z.string().optional(),
  dueDate: z.string().optional(),
});

type TaskFormValues = z.infer<typeof taskSchema>;

const TaskAddModel = ({
  typeofAction,
  task,
}: {
  typeofAction: "create" | "edit" | "Delete";
  task?: Task;
  onTaskAdd?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskName: task?.taskName || "",
      taskDescription: task?.taskDescription || "",
      priority: "Important",
      dueDate: "Today",
    },
  });

  const onSubmit = async () => {};

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) reset(); // Reset form when modal closes
  };

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
          <AlertDialogContent className="max-w-md p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
            <div className="flex justify-end">
              <AlertDialogCancel className="absolute top-4 right-4 text-gray-700 hover:text-gray-600">
                <X size={20} />
              </AlertDialogCancel>
            </div>
            <AlertDialogTitle className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-50">
              Delete Task
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </AlertDialogDescription>
            <div className="flex gap-3">
              <AlertDialogCancel className="flex-1 bg-primary-Blue text-white py-2 rounded-md hover:bg-primary-Blue/80 transition-colors font-medium border-0">
                No
              </AlertDialogCancel>

              <AlertDialogAction className="flex-1 bg-red-100 text-red-500 py-2 rounded-md hover:bg-red-200 transition-colors font-medium">
                Yes
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <AlertDialog open={open} onOpenChange={handleOpenChange}>
          <AlertDialogTrigger asChild>
            <Button className="w-full bg-primary-Blue text-white py-3 rounded-md hover:bg-primary-Blue/80 transition-colors font-medium">
              {typeofAction === "create" ? (
                "Create a Task"
              ) : (
                <Edit className="w-5 h-5" />
              )}
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className="max-w-md p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
            <div className="flex justify-end ">
              <AlertDialogCancel className="absolute top-4 right-4 text-gray-700 hover:text-gray-600">
                <X size={20} />
              </AlertDialogCancel>
            </div>

            <AlertDialogTitle className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-50">
              {typeofAction === "create" ? "Create Task" : "Edit Task"}
            </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              Fill out the form below to{" "}
              {typeofAction === "create" ? "create a new" : "edit the"} task.
            </AlertDialogDescription>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
                  Task Name
                </label>
                <input
                  type="text"
                  {...register("taskName")}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
                />
                {errors.taskName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.taskName.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
                    Task Priority
                  </label>
                  <select
                    {...register("priority")}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
                  >
                    <option value="Less Important">Less Important</option>
                    <option value="Important">Important</option>
                    <option value="Very Important">Very Important</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
                    Due Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("dueDate")}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 pr-10 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
                    />
                    <Calendar
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                      size={18}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
                  Task Description
                </label>
                <textarea
                  {...register("taskDescription")}
                  placeholder="Type your content here..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-fit bg-blue-600 text-white py-3 px-10 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Saving..."
                  : typeofAction === "create"
                    ? "Create Task"
                    : "Edit Task"}
              </button>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default TaskAddModel;
