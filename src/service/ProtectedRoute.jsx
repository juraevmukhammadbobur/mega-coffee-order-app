// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminAuthenticated = () => {
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
