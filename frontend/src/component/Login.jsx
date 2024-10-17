import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useAuth();
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // console.log("auth test", auth);

  const authRedirect = () => {
    if (auth?.user?.role === "user") {
      navigate("/user/dashboard");
    } else if (auth?.user?.role === "admin") {
      navigate("/admin/dashboard");
    }
  };
  useEffect(() => {
    authRedirect();
  }, [auth]);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    try {
      const res = await axios.post("http://localhost:4004/user/login", {
        email,
        password,
      });
      if (res.status == 200) {
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        console.log("login auth", auth);
      }
      authRedirect();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md bg-white p-6">
        <form onSubmit={HandleSubmit}>
          <h1 className="text-center font-semibold">Login</h1>
          <div className="mb-2">
            <label className="block ">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="email"
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
              placeholder="Enter Your Username"
            />
          </div>

          <div className="mb-2">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
