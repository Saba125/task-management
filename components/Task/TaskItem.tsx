import Badge from "../Badge";
import { AiFillDelete } from "react-icons/ai";
import AddTask from "./AddTask";
import { Todo } from "@prisma/client";
interface TaskItemProps {
  task: Todo;
}
const TaskItem: React.FC<TaskItemProps> = ({
  task: { title, taskName, createdAt, completed },
}) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="h-[16rem] w-[30%] rounded-lg  border-2 border-[#2B2B2BFF] bg-[#323232FF]  p-[1.2rem] ">
        <div className="flex h-full  flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white"> {title} </h3>
            <p className="text-base capitalize  text-white"> {taskName} </p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white">05/10/2023</span>
            <div className="flex flex-row items-center justify-between">
              <Badge type={completed ? "completed" : "incomplete"} />
              <div className="cursor-pointer">
                <AiFillDelete fill="red" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddTask />
    </div>
  );
};

export default TaskItem;
