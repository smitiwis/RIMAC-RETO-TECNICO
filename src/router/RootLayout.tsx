import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { RimacHeader } from "../shared/components/ui";
import ContainerMain from "../shared/components/layouts/ContainerMain";

export function RootLayout() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-brand-light-gray flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <RimacHeader />
        <main>
          <ContainerMain>
            <Outlet />
          </ContainerMain>
        </main>
      </QueryClientProvider>
    </Suspense>
  );
}
