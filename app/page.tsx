import EmptyState from "@/components/EmptyState";
import MainContent from "@/components/MainContent";
import SideBar from "@/components/SideBar";
import TaskItem from "@/components/Task/TaskItem";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession(authOptions);
  const tasks = await prisma.todo.findMany({
    where: {
      userEmail: "example12@gmail.com",
    },
  });
  if (tasks.length === 0) {
    return (
      <EmptyState
        title="No tasks found!"
        subtitle="Create new to see your tasks"
      />
    );
  }
  const bodyContent = (
    <div>
      {tasks.map((task: Todo) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
  return (
    <div>
      <MainContent bodyContent={bodyContent} title="All tasks" />
    </div>
  );
}
