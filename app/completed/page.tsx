import EmptyState from "@/components/EmptyState";
import MainContent from "@/components/MainContent";
import TaskItem from "@/components/Task/TaskItem";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { getServerSession } from "next-auth";
const Completed = async () => {
  const session = await getServerSession(authOptions);
  const completedTasks = await prisma.todo.findMany({
    where: {
      userEmail: session?.user?.email as string,
      completed: true,
    },
  });
  if (completedTasks.length === 0) {
    return (
      <EmptyState title="Oops! You don't have " subtitle="Don't be lazy." />
    );
  }
  const bodyContent = (
    <div>
      {completedTasks.map((task: Todo) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
  return (
    <div>
      <MainContent bodyContent={bodyContent} title="Completed tasks!" />
    </div>
  );
};

export default Completed;
