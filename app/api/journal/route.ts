import { getUserFromDB } from "@/utils/auth";
import prisma from "@/utils/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const user = await getUserFromDB();

  const result = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Make your content here!",
    },
  });

  revalidatePath("/journal");
  revalidateTag("/journal");

  return NextResponse.json({
    data: result,
  });
};
