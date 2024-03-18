import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Navbar from "../components/Navbar";

const PrivateRouter = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const loginedUser = localStorage.getItem("token") || null;
    if (loginedUser) {
      setUser(JSON.parse(loginedUser));
    }
  }, [setUser]);

  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
