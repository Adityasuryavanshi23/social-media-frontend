import React from "react";
import PostsNavHeader from "../../components/Common/PostsNavHeader";
import { Outlet } from "react-router-dom";

const MyProfile = () => {
  return (
    <>
      <PostsNavHeader />
      <Outlet />
    </>
  );
};

export default MyProfile;
