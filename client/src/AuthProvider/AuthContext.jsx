import { createContext, useEffect, useState } from "react";
import supabase from "../config/superbase";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const session = await supabase.auth.getSession();
      console.log(session.data.session);
      if (session?.data.session !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoggedIn();
    console.log("Is logged in: ", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
