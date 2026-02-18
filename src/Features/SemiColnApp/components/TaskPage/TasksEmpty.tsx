import TaskAddModel from "@/Features/SemiColnApp/components/TaskPage/TaskAddModel";

const PRIMARY_BLUE = "#3B4FE4";

function ClipboardIcon() {
  return (
    <div className="relative w-36 h-36 mx-auto mb-8">
      <div
        className="absolute bottom-0 left-2 w-24 h-28 rounded-xl shadow-md"
        style={{
          backgroundColor: "#F5A623",
          transform: "rotate(-12deg)",
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-5 rounded-full border-4"
          style={{ backgroundColor: "#F5A623", borderColor: "#E09200" }}
        />
      </div>

      <div  
        className="absolute bottom-0 right-2 w-24 h-28 rounded-xl shadow-md"
        style={{
          backgroundColor: "#A8B4F8",
          transform: "rotate(10deg)",
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-5 rounded-full border-4"
          style={{ backgroundColor: "#A8B4F8", borderColor: "#8A99F0" }}
        />
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-28 rounded-xl shadow-lg z-10"
        style={{ backgroundColor: PRIMARY_BLUE }}
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-5 rounded-full border-4"
          style={{ backgroundColor: PRIMARY_BLUE, borderColor: "#2A3BB5" }}
        />
        <div className="mt-8 px-4 space-y-2">
          <div className="h-1.5 rounded-full bg-white opacity-30 w-full" />
          <div className="h-1.5 rounded-full bg-white opacity-30 w-4/5" />
          <div className="h-1.5 rounded-full bg-white opacity-30 w-3/5" />
        </div>
      </div>
    </div>
  );
}
const TasksEmpty = () => {
  return (
   <div >
        <div className="">
          <h1 className="text-2xl font-bold text-[#1A2255]">
            Tasks
          </h1>
          <p className="text-sm mt-1 text-[#8A91A8]">
            Your tasks in your space.
          </p>
        </div>

        <div className="flex items-center justify-center px-6 pt-12">
          <div className="flex flex-col items-center text-center max-w-xs w-full">
            <ClipboardIcon />

            <h2
              className="text-xl font-semibold mb-2 text-[#1A2255]"
            
            >
              No Tasks Yet
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
            >
              You have no task created in your workspace yet.
              <br />
              Get productive. Create a Task Now.
            </p>

           <TaskAddModel/>
          </div>
        </div>
      </div>
  )
}

export default TasksEmpty