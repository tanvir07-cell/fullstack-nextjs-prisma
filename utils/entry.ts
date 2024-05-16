import { revalidatePath } from "next/cache";

const createUrl = (path: string) => {
  return window.location.origin + path;
};

export async function createNewEntry() {
  // api ke call korbo:
  const response = await fetch(createUrl("/api/journal"), {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to create new entry");
  }

  const data = await response.json();
  const entry = data.data;

  // revalidate the cache
  // revalidatePath("/journal");

  return entry;
}
