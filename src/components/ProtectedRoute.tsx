import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  isAdmin?: boolean;
  user?: {
    isAdmin?: boolean;
  };
  redirectPath?: string;
  adminRedirectPath?: string;
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  isAdmin = false,
  user,
  redirectPath = "/login",
  adminRedirectPath = "/unauthorized",
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }

  if (isAdmin && !(user && user.isAdmin)) {
    return <Navigate to={adminRedirectPath} />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export { ProtectedRoute };
