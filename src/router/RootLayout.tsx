import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { RimacHeader } from "../shared/components/ui";
import SpinerMain from "@/shared/components/ui/SpinerMain";

export function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Suspense fallback={<SpinerMain />}>
      <QueryClientProvider client={queryClient}>
        <RimacHeader />
        <main>
          <Outlet />
        </main>
      </QueryClientProvider>
    </Suspense>
  );
}
