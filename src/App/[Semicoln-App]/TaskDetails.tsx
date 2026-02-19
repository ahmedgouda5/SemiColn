import TaskDetailUi from "@/Features/SemiColnApp/components/TaskPage/TaskDetailsUI";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
    const { id } = useParams();
  return (
    <div>
        <TaskDetailUi id={id as string} />
    </div>
  )
}

export default TaskDetails