import { lazy, Suspense } from "react";

export const TanStackRouterDevtools = () => {
  const TanStackRouterDevtools = import.meta.env.PROD
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

  return (
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  );
};
