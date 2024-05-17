const createUrl = (path: string) => {
  return window.location.origin + path;
};

export async function updateEntry(id: string, content) {
  const response = await fetch(createUrl(`/api/journal/${id}`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("Failed to update entry");
  }

  const data = await response.json();
  const entry = data.data;

  return entry;
}

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
