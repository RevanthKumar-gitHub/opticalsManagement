import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="min-h-screen container">
      <Navbar onClickMenu={handleMenuClick} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default ProtectedRoutes;
