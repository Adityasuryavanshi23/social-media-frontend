/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export const UserList = ({ user, onClose }) => {
  return (
    <div className="mt-2 border-b border-gray-500 pb-4  flex items-center justify-between">
      <Link
        onClick={onClose}
        to={`userprofile/${user?._id}`}
        className="flex-1"
      >
        {user.firstname}
      </Link>
      <img
        src={user.profilePicture}
        alt=""
        className="w-8 mr-12  rounded-md "
      />
    </div>
  );
};
