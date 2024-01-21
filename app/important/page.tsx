import MainContent from "@/components/MainContent";
import TaskItem from "@/components/Task/TaskItem";
const bodyContent = (
  <div>
    <TaskItem />
  </div>
);
const Important = () => {
  return (
    <div>
      <MainContent title="Import tasks" bodyContent={bodyContent} />
    </div>
  );
};

export default Important;
