import Editor from "@/components/Editor";
import { getUserFromDB } from "@/utils/auth";
import prisma from "@/utils/db";

const getEntry = async (id: string) => {
  const user = await getUserFromDB();
  let entry;

  try {
    entry = await prisma.journalEntry.findUnique({
      where: {
        userId_id: {
          userId: user.id,
          id: id,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  return entry;
};

const page = async ({ params } = { params: { id: string } }) => {
  const entry = await getEntry(params.id);
  return (
    <div className="w-full h-[100vh]">
      <Editor entry={entry} />
    </div>
  );
};

export default page;
