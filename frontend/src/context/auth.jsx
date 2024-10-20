import { useState, useContext, useEffect, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      if (parseData?.user && parseData?.token) {
        setAuth({ user: parseData.user, token: parseData.token });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
//custom Hook
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
