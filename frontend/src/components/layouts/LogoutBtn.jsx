import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { notify } from "../notifier/Notifier";
import Loader from "./Loader";
import api from "../../helpers/api";
import { logout } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    setLoading(true);
    const response = await api.logoutAdminUser();
    if (response.success) {
      dispatch(logout());
      notify.success(response.message);
      navigate("/login");
      return;
    }
    setLoading(false);
    notify.error(response.message);
  };
  return (
    <div onClick={handleLogout}>
      {loading && <Loader />}
      <FaSignOutAlt />
    </div>
  );
};

export default LogoutBtn;
