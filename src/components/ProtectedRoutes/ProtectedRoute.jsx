import React from 'react';
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('AccessToken');
    
    if (!isAuthenticated) {
        return (
            <Navigate to="/login" />
        )
    }
    return children;
  }

export default ProtectedRoute;