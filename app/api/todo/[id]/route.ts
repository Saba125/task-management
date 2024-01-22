import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  console.log(params.id);
  await prisma.todo.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json({ message: "done" });
}
