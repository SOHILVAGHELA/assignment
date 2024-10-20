import React, { useEffect } from "react";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("auth", auth);
    !auth.token && navigate("/");
  }, [auth]);

  const handleLogout = () => {
    localStorage.clear("auth");
    setAuth({ user: null, token: "" });
    navigate("/");
  };
  return (
    <div className="p-5 flex justify-between">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <button
        className="bg-red-500 px-5 rounded-sm py-2 text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
