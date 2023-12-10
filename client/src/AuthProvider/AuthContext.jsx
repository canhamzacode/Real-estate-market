import { createContext, useEffect, useState } from "react";
import supabase from "../config/superbase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  signUserOut: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      setIsLoading(true);

      const session = await supabase.auth.getSession();
      if (session?.data.session !== null) {
        const user = session.data.session.user;
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
      }

      setIsLoading(false);
    };

    checkLoggedIn();
  }, []);

  const signUserOut = async () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.log("error ", error);
    }
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, setIsLoggedIn, signUserOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
