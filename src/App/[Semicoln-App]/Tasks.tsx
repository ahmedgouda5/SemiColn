import TasksEmpty from "@/Features/SemiColnApp/components/TaskPage/TasksEmpty";
import TasksLayout from "@/Features/SemiColnApp/components/TaskPage/Taskcard";
import { tasks } from "@/Features/SemiColnApp/data";

const Tasks = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         {tasks.length>0?<TasksLayout/>:<TasksEmpty/>}
    </main>
  );
};

export default Tasks;
