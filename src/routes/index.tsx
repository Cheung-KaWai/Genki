import { TableOfContent } from "@/components/TableOfContent";
import { createFileRoute } from "@tanstack/react-router";
import { queryTableOfContent } from "../services/api";

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(queryTableOfContent),
  component: TableOfContent,
});
