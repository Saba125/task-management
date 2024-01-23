import EmptyState from "@/components/EmptyState";
import MainContent from "@/components/MainContent";
import TaskItem from "@/components/Task/TaskItem";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { getServerSession } from "next-auth";
const InCompleted = async () => {
  const session = await getServerSession(authOptions);
  const inCompletedTasks = await prisma.todo.findMany({
    where: {
      userEmail: session?.user?.email as string,
      completed: false,
    },
  });
  if (inCompletedTasks.length === 0) {
    return (
      <EmptyState title="You have all tasks completed." subtitle="Well done." />
    );
  }
  const bodyContent = (
    <div>
      {inCompletedTasks.map((task: Todo) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
  return <MainContent bodyContent={bodyContent} title="InCompleted tasks." />;
};

export default InCompleted;
