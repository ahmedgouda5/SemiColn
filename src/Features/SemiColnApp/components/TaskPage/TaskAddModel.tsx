import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Edit, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import {
  handelDeleteTask,
  HandleCreateTask,
  HandleEditTask,
} from "../../services/services";
import type { Task } from "../../type";

const taskSchema = z.object({
  taskName: z.string().min(1, "Task name is required"),
  taskDescription: z.string().optional(),
  status: z.enum(["pending", "in-progress", "completed"]),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
});

type TaskFormValues = z.infer<typeof taskSchema>;

const getDefaultValues = (task?: Task): TaskFormValues => ({
  taskName: task?.taskName || "",
  taskDescription: task?.taskDescription || "",
  status: task?.status || "pending",
  startDate: task?.startDate || "",
  endDate: task?.endDate || "",
});

const TaskAddModel = ({
  typeofAction,
  task,
  onTaskAdd,
}: {
  typeofAction: "create" | "edit" | "Delete";
  task?: Task;
  onTaskAdd?: () => void | Promise<void>;
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: getDefaultValues(task),
  });

  useEffect(() => {
    reset(getDefaultValues(task));
  }, [task, reset]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      reset(getDefaultValues(task));
    }
  };

  const onSubmit = async (values: TaskFormValues) => {
    setIsSubmitting(true);

    try {
      const payload: Task = {
        id: task?.id ?? task?._id,
        _id: task?._id ?? task?.id,
        taskName: values.taskName,
        taskDescription: values.taskDescription,
        status: values.status,
        startDate: values.startDate,
        endDate: values.endDate,
      };

      if (typeofAction === "create") {
        await HandleCreateTask(payload);
        toast.success("Task created successfully");
        reset(getDefaultValues());
      } else {
        await HandleEditTask(payload);
        toast.success("Task updated successfully");
        reset(getDefaultValues(payload));
      }

      await onTaskAdd?.();
      setOpen(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to save task";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    const taskId = task?.id ?? task?._id;

    if (!taskId) {
      toast.error("Task ID is missing");
      return;
    }

    setIsSubmitting(true);

    try {
      await handelDeleteTask(taskId);
      await onTaskAdd?.();
      setOpen(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete task";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (typeofAction === "Delete") {
    return (
      <AlertDialog open={open} onOpenChange={handleOpenChange}>
        <AlertDialogTrigger asChild>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
            aria-label="Delete task"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-md bg-white p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
          <div className="flex justify-end">
            <AlertDialogCancel className="absolute right-4 top-4 text-gray-700 hover:text-gray-600">
              <X size={20} />
            </AlertDialogCancel>
          </div>
          <AlertDialogTitle className="mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Delete Task
          </AlertDialogTitle>
          <AlertDialogDescription className="mb-6 text-gray-600 dark:text-gray-300">
            Are you sure you want to delete this task? This action cannot be
            undone.
          </AlertDialogDescription>
          <div className="flex gap-3">
            <AlertDialogCancel className="flex-1 border-0 bg-primary-Blue py-2 font-medium text-white transition-colors hover:bg-primary-Blue/80">
              No
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleDelete}
              disabled={isSubmitting}
              className="flex-1 bg-red-100 py-2 font-medium text-red-500 transition-colors hover:bg-red-200"
            >
              {isSubmitting ? "Deleting..." : "Yes"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger asChild>
        <Button className="w-full rounded-md bg-primary-Blue py-3 font-medium text-white transition-colors hover:bg-primary-Blue/80">
          {typeofAction === "create" ? "Create a Task" : <Edit className="h-5 w-5" />}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md bg-white p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <div className="flex justify-end">
          <AlertDialogCancel className="absolute right-4 top-4 text-gray-700 hover:text-gray-600">
            <X size={20} />
          </AlertDialogCancel>
        </div>

        <AlertDialogTitle className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-50">
          {typeofAction === "create" ? "Create Task" : "Edit Task"}
        </AlertDialogTitle>
        <AlertDialogDescription className="sr-only">
          Fill out the form below to {typeofAction === "create" ? "create a new" : "edit the"} task.
        </AlertDialogDescription>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="mb-2 block text-sm text-gray-700 dark:text-gray-200">
              Task Name
            </label>
            <input
              type="text"
              {...register("taskName")}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-blue-400"
            />
            {errors.taskName && (
              <p className="mt-1 text-xs text-red-500">{errors.taskName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm text-gray-700 dark:text-gray-200">
              Status
            </label>
            <select
              {...register("status")}
              className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-blue-400"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm text-gray-700 dark:text-gray-200">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("startDate")}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-blue-400"
                />
                <Calendar
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 dark:text-gray-500"
                  size={18}
                />
              </div>
              {errors.startDate && (
                <p className="mt-1 text-xs text-red-500">{errors.startDate.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-700 dark:text-gray-200">
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("endDate")}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-blue-400"
                />
                <Calendar
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 dark:text-gray-500"
                  size={18}
                />
              </div>
              {errors.endDate && (
                <p className="mt-1 text-xs text-red-500">{errors.endDate.message}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm text-gray-700 dark:text-gray-200">
              Task Description
            </label>
            <textarea
              {...register("taskDescription")}
              placeholder="Type your content here..."
              rows={4}
              className="w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-fit rounded-md bg-blue-600 px-10 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
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
  );
};

export default TaskAddModel;
