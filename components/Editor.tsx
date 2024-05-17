"use client";

import { updateEntry } from "@/utils/entry";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);

  useAutosave({
    data: value,
    onSave: async (newValue) => {
      setIsLoading(true);
      await updateEntry(entry.id, newValue);
      setIsLoading(false);
    },
  });
  return (
    <div className="w-full h-[100vh]">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">Saving...</div>
        </div>
      )}
      <textarea
        className="w-full h-[100vh] p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
