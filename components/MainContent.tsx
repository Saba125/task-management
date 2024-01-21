import TaskItem from "./Task/TaskItem";

interface MainContentProps {
  title: string;
}
const MainContent: React.FC<MainContentProps> = ({ title }) => {
  return (
    <div className="flex h-[100vh] flex-col gap-3 rounded-lg border-2 border-[#2B2B2BFF]  bg-[#212121FF] p-4">
      <div className="text-3xl text-white">{title}</div>
      <div>
        <TaskItem />
      </div>
    </div>
  );
};

export default MainContent;
