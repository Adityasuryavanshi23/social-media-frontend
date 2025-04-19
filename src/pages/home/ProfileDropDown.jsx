import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileDropDown = ({ logout }) => {
  const { userdata } = useSelector((state) => state.login);

  return (
    <div className="border  capitalize max-w-[300px] bg-slate-900 absolute right-4 top-20 py-4">
      <div className="py-2  px-2  ">
        <p className="break-words truncate max-w-[200px]">{userdata.email}</p>
      </div>

      <ul className="capitalize">
        <li className="py-2  px-2  hover:bg-gray-700 cursor-pointer">
          <Link to={"home/edit"} className="w-full h-full block">
            {" "}
            edit profile
          </Link>
        </li>
        <li className="py-2  px-2 hover:bg-gray-700 cursor-pointer">
          <Link to={"home/changepassword"} className="w-full h-full block">
            change password
          </Link>
        </li>
        <li
          onClick={logout}
          className="py-2  px-2 hover:bg-gray-700 cursor-pointer"
        >
          logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
