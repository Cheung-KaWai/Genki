import { useSuspenseQuery } from "@tanstack/react-query";
import { queryTableOfContent } from "../../services/api";

export const TableOfContent = () => {
  const {
    data: { general, chapters },
  } = useSuspenseQuery(queryTableOfContent);

  console.log(general, chapters);

  return <div>TableOfContent</div>;
};
