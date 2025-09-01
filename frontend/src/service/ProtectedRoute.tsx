// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAdminAuthenticated = (): boolean => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) return false;

    try {
      const parsedToken = JSON.parse(adminToken);
      return parsedToken.isLoggedIn === true;
    } catch {
      return false;
    }
  };

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
