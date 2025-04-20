import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const PostsNavHeader = () => {
  const active =
    "inline-block bg-[#2c2c2c]  rounded-md hover:bg-[#2c2c2c] hover:text-[#ae7aff]  px-6 py-1.5";
  const inactive = "inline-block px-6 py-1.5 hover:bg-[#2c2c2c] hover:text-[#ae7aff] hover:rounded-md";
  const location = useLocation();
  return (
    <div className="sticky top-[82px] z-10 mt-[1px] bg-[#121212] pb-4 before:absolute before:inset-x-0 before:bottom-full before:h-[17px] before:bg-[#121212] md:top-[100px] md:mt-0">
      <ul className="no-scrollbar flex w-full overflow-x-auto px-4 sm:px-0">
        <li className="mr-2 inline-block shrink-0">
          <NavLink
            to="/home"
            className={`${location.pathname === "/home" ? active : inactive}`}
          >
            Feeds
          </NavLink>
        </li>
        <li className="mr-2 inline-block shrink-0">
          <NavLink
            to="myposts"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            My Posts
          </NavLink>
        </li>

        {/* <li className="mr-2 inline-block shrink-0">
          <NavLink
            to="edit"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            Edit profile
          </NavLink>
        </li>
        <li className="mr-2 inline-block shrink-0">
          <NavLink
            to="changepassword"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            Change password
          </NavLink>
        </li> */}
        <li className="mr-2 inline-block shrink-0">
          <NavLink
            to="bookmark"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            Bookmarked
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PostsNavHeader;
