import { Todo } from "@prisma/client";
import { Button } from "../ui/button";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import formatDate from "@/lib/format";
import FormSubmit from "../FormSubmitBtn";
interface TaskItemProps {
  task: Todo;
}
const TaskItem: React.FC<TaskItemProps> = ({
  task: { id, title, taskName, createdAt, completed },
}) => {
  const handleDelete = async (formData: FormData) => {
    "use server";
    const todoId = formData.get("todoId") as string;
    await prisma.todo.delete({
      where: { id: todoId },
    });
    revalidatePath("/");
  };
  const handleUpdate = async (formData: FormData) => {
    "use server";
    const todoId = formData.get("todoId") as string;
    await prisma.todo.update({
      where: { id: todoId },
      data: { completed: !completed },
    });
    revalidatePath("/");
  };
  return (
    <div className="h-[16rem] w-[50%]  rounded-lg  border-2 border-[#2B2B2BFF] bg-[#323232FF]  p-[1.2rem] ">
      <div className="flex h-full  flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-white"> {title} </h3>
          <p className="text-base capitalize  text-white"> {taskName} </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white">{formatDate(createdAt)}</span>
          <div className="flex flex-row items-center justify-between">
            <form action={handleUpdate}>
              <input name="todoId" type="hidden" value={id} />
              <Button type="submit">
                {" "}
                {completed ? "Completed" : "Incomplete"}{" "}
              </Button>
            </form>
            <form action={handleDelete} className="cursor-pointer">
              <input name="todoId" type="hidden" value={id} />
              <FormSubmit fullWidth={false}> Delete </FormSubmit>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
