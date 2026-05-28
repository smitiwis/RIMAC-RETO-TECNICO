import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";

const HomePage = lazy(() =>
  import("../pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const PlansPage = lazy(() =>
  import("../pages/PlansPage").then((module) => ({ default: module.PlansPage })),
);
const SummaryPage = lazy(() =>
  import("../pages/SummaryPage").then((module) => ({
    default: module.SummaryPage,
  })),
);

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/planes", element: <PlansPage /> },
      { path: "/resumen", element: <SummaryPage /> },
    ],
  },
]);
