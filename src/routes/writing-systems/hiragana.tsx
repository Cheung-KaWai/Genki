import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/writing-systems/hiragana")({
  component: () => <div>Hello /writing-systems/hiragana!</div>,
});
