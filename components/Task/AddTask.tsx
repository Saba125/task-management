import { CiSquarePlus } from "react-icons/ci";
import Link from "next/link";
const AddTask = () => {
  return (
    <Link
      href="/create"
      className="flex h-[16rem] w-[30%] cursor-pointer items-center justify-center   rounded-md border-2  border-dashed border-[#2B2B2BFF]  text-white"
    >
      <div className="flex flex-row items-center gap-2">
        Add new task <CiSquarePlus size={30} />
      </div>
    </Link>
  );
};

export default AddTask;
