import Image from "next/image";
import MenuItem from "./MenuItem";
import { AiOutlineHome } from "react-icons/ai";
const SideBar = () => {
  return (
    <div className="flex h-[100vh]  flex-col items-center justify-between rounded-lg border  border-y-gray-300 bg-[#212121FF]  ">
      <div className="flex flex-row items-center gap-3 p-5">
        <Image
          src="/placeholder.jpg"
          width={40}
          className="rounded-full"
          height={40}
          alt="user-img"
        />
        <div className="text-white">Saba Jiadze</div>
      </div>

      <div className="w-full">
        <MenuItem icon={AiOutlineHome} label="All tasks" />
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;