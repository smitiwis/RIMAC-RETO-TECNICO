import { Navigate, Outlet } from "react-router-dom";
import { useQuoteStore } from "@/store/useQuoteStore";

export function ProtectedRoute() {
  const { user } = useQuoteStore();

  if (!user) return <Navigate to="/" replace />;

  return <Outlet />;
}
