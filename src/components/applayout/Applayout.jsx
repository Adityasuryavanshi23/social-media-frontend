import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import AuthenTicateLayout from "./AuthenTicateLayout";
import UnAuthencticatedLayout from "./UnAuthencticatedLayout";

const unauthenticateddroutes = ["/login", "/register"];

const Applayout = () => {
  const navigate = useNavigate();
  const { isuserloggedin } = useAuthentication();

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      if (unauthenticateddroutes.includes(window.location.pathname)) {
        navigate("/home");
      }
    } else {
      navigate("/login");
    }
  }, []);
  return isuserloggedin || sessionStorage.getItem("authToken") ? (
    <AuthenTicateLayout>
      <Outlet />
    </AuthenTicateLayout>
  ) : (
    <UnAuthencticatedLayout>
      <Outlet />
    </UnAuthencticatedLayout>
  );
};
export default Applayout;
