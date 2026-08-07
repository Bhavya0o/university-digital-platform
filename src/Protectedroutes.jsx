import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/Login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return children;
};

export default ProtectedRoutes;
