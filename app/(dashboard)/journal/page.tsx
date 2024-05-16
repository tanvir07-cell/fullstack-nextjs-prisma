import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { getUserFromDB } from "@/utils/auth";
import prisma from "@/utils/db";
import Link from "next/link";

const getUserEntriesFromDB = async () => {
  const user = await getUserFromDB();
  return await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const DashboardPage = async () => {
  const entries = await getUserEntriesFromDB();
  return (
    <div>
      <div className="flex items-center justify-center mt-20 mb-20">
        <NewEntryCard />
      </div>

      <div className="w-[50%] mx-auto grid grid-cols-2 gap-10 ">
        {entries.map((entry) => {
          return (
            <Link key={entry.id} href={`/journal/${entry.id}`} passHref>
              <EntryCard entry={entry} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
