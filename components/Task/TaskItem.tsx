import Badge from "../Badge";
import { AiFillDelete } from "react-icons/ai";
import AddTask from "./AddTask";
const TaskItem = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="h-[16rem] w-[30%] rounded-lg  border-2 border-[#2B2B2BFF] bg-[#323232FF]  p-[1.2rem] ">
        <div className="flex h-full  flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white">Task Title</h3>
            <p className="text-base text-white"> Task desc</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white">05/10/2023</span>
            <div className="flex flex-row items-center justify-between">
              <Badge type="completed" />
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
