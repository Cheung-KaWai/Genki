import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotFound } from "./components/NotFound";

// tanstack query client
const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: NotFound,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
