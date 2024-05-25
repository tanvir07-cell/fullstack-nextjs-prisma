"use client";

import { createNewEntry } from "@/utils/entry";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();
  const handleNewEntry = async () => {
    const entry = await createNewEntry();

    router.push(`/journal/${entry.id}`);
    router.refresh();
  };
  return (
    <div className="card w-96 bg-[#55BF8B]/40 shadow-xl text-white">
      <div className="card-body">
        <h2 className="card-title">Create a New Entry!</h2>
        <p>This will open a new page and you then create your journal entry</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleNewEntry}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEntryCard;
