import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { notify } from "../notifier/Notifier";
import Loader from "./Loader";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    setLoading(true);
    notify.success("Logout success");
    setLoading(false);
    navigate("/login");
  };
  return (
    <div onClick={handleLogout}>
      {loading && <Loader />}
      <FaSignOutAlt />
    </div>
  );
};

export default LogoutBtn;
