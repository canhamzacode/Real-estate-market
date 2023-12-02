import { useContext, useEffect, useState } from "react";
import supabase from "../config/superbase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";
const Sucess = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    return;
  }, [isLoggedIn, navigate]);

  const signUserOut = async () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.log("error ", error);
    }
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then((value) => {
        if (value?.data?.user) {
          setUser(value.data.user);
          console.log(user);
        }
      });
    };
    getUserData();
  }, []);

  return (
    <div>
      <h1>Welcome {user?.username} </h1>
      <button onClick={signUserOut}>Log Out</button>
    </div>
  );
};

export default Sucess;
