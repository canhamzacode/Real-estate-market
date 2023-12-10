import { Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
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

  return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;
