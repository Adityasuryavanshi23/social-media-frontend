import React from "react";
import PostsNavHeader from "../../components/Common/PostsNavHeader";
import { Outlet } from "react-router-dom";
import { PageTrans } from "../../components/applayout/PageTrans";

const MyProfile = () => {
  return (
    <>
      <PageTrans>
        <PostsNavHeader />
        <Outlet />
      </PageTrans>
    </>
  );
};

export default MyProfile;
