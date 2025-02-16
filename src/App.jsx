import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const Router = createBrowserRouter([
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
]);

export const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
