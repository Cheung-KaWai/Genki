import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/writing-systems/")({
  component: () => <div>Hello /writing-systems/!</div>,
});
