import { useLocation, useRoutes } from "react-router-dom";
import React from "react";
import Applayout from "./components/applayout/Applayout";
import PostDetail from "./pages/postdetail/PostDetail";
import SocialLogin from "./pages/login/SocialLogin";
import SocialRegister from "./pages/register/SocialRegister";
import PostListing from "./pages/posts/PostListing";
import EditProfile from "./components/editprofile/EditProfile";
import ChangePassword from "./components/changedpassword/ChangePassword";
import Bookmark from "./components/Bookmark/Bookmark";
import "./App.css";
import MyProfile from "./pages/home/MyProfile";
import { CreatePost } from "./pages/home/CreatePost";
import PostsUpdates from "./pages/home/PostsUpdates";
import MyPosts from "./pages/home/MyPosts";
import UserProfile from "./pages/UserProfile/UserProfile";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const location = useLocation();
  const element = useRoutes(routesconfig);

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}> {element}</div>
    </AnimatePresence>
  );
};
const routesconfig = [
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "home",
        element: <MyProfile />,
        children: [
          {
            index: true,
            element: <PostsUpdates />,
          },
          {
            path: "myposts",
            element: <MyPosts />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
          {
            path: "changepassword",
            element: <ChangePassword />,
          },
          {
            path: "bookmark",
            element: <Bookmark />,
          },
          {
            path: "create",
            element: <CreatePost />,
          },
        ],
      },
      {
        path: "/userprofile/:id",
        element: <UserProfile />,
      },
      {
        path: "*", // Catch-all route for any unmatched paths
        element: <Applayout />,
      },
      {
        path: "/postdetail",
        element: <PostDetail />,
      },
      {
        path: "/postlist",
        element: <PostListing />,
      },
      {
        path: "/login",
        element: <SocialLogin />,
      },
      {
        path: "/register",
        element: <SocialRegister />,
      },
    ],
  },
];
