import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const RequireAuth = ({ children }) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    if (isLoading) {
      return "loading...";
    } else {
      navigate("/login");
      return;
    }
  }

  return children;
};

export default RequireAuth;
