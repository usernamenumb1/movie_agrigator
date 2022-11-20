import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import routes from "../../routes";

export default function ProtectedRoute({
  isAuthorized,
}: {
  isAuthorized: boolean;
}) {
  if (!isAuthorized) return <Navigate to={routes.loginPage()} replace />;
  return <Outlet />;
}
