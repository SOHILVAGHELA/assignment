import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
useNavigate;
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  console.log("role", role);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(password);
    // console.log(email);
    // console.log(role);
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4004/user/register", {
        username,
        password,
        email,
        role,
      });
      console.log(res);
      if (res.status == 200) {
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className=" bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md bg-white p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-semibold">Register</h1>
          <div className="mb-2">
            <label className="block ">Username:</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="mb-2">
            <label className="block ">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mb-2">
            <label className="block ">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-2">
            <label className="block ">role:</label>
            <select
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-500 rounded text-white disabled:opacity-50"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
