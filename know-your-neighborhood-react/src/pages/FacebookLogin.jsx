import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/auth-context";

const FacebookLogin = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    if (token) {
      authCtx.login(token);
      navigate("/profile");
    }
  }, [authCtx, navigate, location]);

  return <div className="mt-10 text-center">Loading...</div>;
};

export default FacebookLogin;
