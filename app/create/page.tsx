import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const CreateTodo = async () => {
  const session = await getServerSession(authOptions);
  const handleAction = async (formData: FormData) => {
    "use server";
    const taskName = formData.get("name") as string;
    const task = formData.get("task") as string;
    await prisma?.todo.create({
      data: {
        title: taskName,
        taskName: task,
        userEmail: session?.user?.email as string,
      },
    });
    redirect("/");
  };
  return (
    <div>
      <div
        className="
      flex
      min-h-screen
      items-center
      justify-center
      "
      >
        <div
          className="
        mx-auto
        rounded-md
        border
        px-5
        py-5
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        "
        >
          <form
            className="
          mt-5
          flex
          flex-col
          gap-3
          "
            action={handleAction}
          >
            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Task title</Label>
              <Input className="bg-background" id="name" name="name" />
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="task">Task desc...</Label>
              <Input className="bg-background" id="task" name="task" />
            </div>

            <div>
              <Button type="submit" className="w-full" variant="destructive">
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
