import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import AuthenTicateLayout from "./AuthenTicateLayout";
import UnAuthencticatedLayout from "./UnAuthencticatedLayout";

const authenticatedroutes = ["/home"];
const unauthenticateddroutes = ["/login", "/register"];

const Applayout = () => {
  const navigate = useNavigate();
  const { isuserloggedin } = useAuthentication();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      if (unauthenticateddroutes.includes(window.location.pathname)) {
        navigate("/home");
      }
    } else {
      if (authenticatedroutes.includes(window.location.pathname)) {
        navigate("/login");
      }
    }
  }, []);

  return isuserloggedin ? (
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
