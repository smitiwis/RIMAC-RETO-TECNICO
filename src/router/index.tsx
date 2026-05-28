import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { HomePage } from "../pages/HomePage";
import { PlansPage } from "../pages/PlansPage";
import { SummaryPage } from "../pages/SummaryPage";

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
