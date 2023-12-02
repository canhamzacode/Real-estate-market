import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import supabase from "../config/superbase";
import { AuthContext } from "../AuthProvider/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const handleAuthStateChange = (event, session) => {
      console.log(event, session);

      try {
        if (event === "SIGNED_IN") {
          setIsLoggedIn(true);
          navigate("/");
        } else if (event === "SIGNED_OUT") {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error handling auth state change:", error);
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      handleAuthStateChange
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, setIsLoggedIn]);

  if (isLoggedIn) {
    navigate("/");
  }

  return (
    <div className="w-full mx-auto min-h-screen max-w-[600px] grid items-center p-3">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
};

export default Login;
