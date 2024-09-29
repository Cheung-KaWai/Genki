import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chapter/")({
  component: () => <div>Hello /chapter/!</div>,
});
