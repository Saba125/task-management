import AddTask from "./Task/AddTask";
import { Button } from "./ui/button";
import Link from "next/link";
interface EmptyStateProps {
  title: string;
  subtitle?: string;
}
const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-20 flex flex-row gap-10">
      <div>
        <div className="text-2xl font-bold text-white"> {title} </div>
        <div className="mt-2 font-light text-neutral-500"> {subtitle} </div>
      </div>
      <div className="flex-1">
        <AddTask />
      </div>
    </div>
  );
};

export default EmptyState;
