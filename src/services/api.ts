import { queryOptions } from "@tanstack/react-query";

const getTableOfContent = async () => {
  try {
    const res = await fetch("/data/table-of-content/content.json");

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error("Error fetching table of content:", error);
  }
};

export const queryTableOfContent = queryOptions({
  queryKey: ["tableOfContent"],
  queryFn: getTableOfContent,
  staleTime: Infinity,
});
