import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, NotFoundRoute, RouterProvider } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root.tsx";

// not found route
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 hehe not Found",
});

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

//

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
