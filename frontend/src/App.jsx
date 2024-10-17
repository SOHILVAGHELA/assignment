import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Register from "./component/Register";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
