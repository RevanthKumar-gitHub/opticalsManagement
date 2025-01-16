import React, { useState } from "react";
import api from "../../helpers/api";
import { notify } from "../notifier/Notifier";
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await api.loginAdminUser(userDetails);
    setLoading(false);
    if (response.success) {
      notify.success(response.message);
      navigate("/");
      return;
    }
    notify.error(response.message);
  };
  return (
    <div className="flex flex-col md:flex-row  h-screen justify-center items-center gap-2 bg-black bg-opacity-5">
      {loading && <Loader/>}
      <div className="bg-primary p-6  flex flex-col items-center justify-center basis-1/2 rounded-b-full md:rounded-e-full md:rounded-b-none shadow-lg md:w-full">
        <div>
          <span className="text-9xl font-semibold left-4 relative">M</span>
          <span className="text-8xl font-bold italic -left-4 relative text-white ">
            O
          </span>
        </div>
        <div className="text-lg md:text-2xl bg-secondary px-4 rounded-xl">
          Mahesh Opticals
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center basis-1/2">
        <form className="flex flex-col gap-2 border-2 p-4 rounded-xl ring-2 ring-black outline-none">
          <div className="form-element">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              placeholder="email"
              id="email"
              className="input-box"
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
              value={userDetails.email}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password" className="form-label">
              Password *
            </label>
            <input
              type="password"
              placeholder="password"
              className="input-box"
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
              value={userDetails.password}
            />
          </div>
          <button className="btn" type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
