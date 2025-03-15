import React, { useMemo } from "react";
import Dummyuser from "../../assets/dummyuser.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { makeApiRequest } from "../../Http/axiosMain";
import { getUsersDetailAction } from "../../store/action";

const LeftSidebar = ({ userdata }) => {
  const navigate = useNavigate();
  const { userdata: loggedinuser } = useSelector((state) => state.login);

  const isUserFollower = useMemo(() => {
    if (userdata?.isOtheruser) {
      return userdata?.followers?.some((id) => id === loggedinuser?._id);
    }
  }, [userdata]);

  const dispatch = useDispatch();
  const handleClick = async () => {
    if (userdata?.isOtheruser) {
      await makeApiRequest(
        `/user/${userdata?._id}/${isUserFollower ? "unfollow" : "follow"}`,
        "put",
        {
          userId: loggedinuser?._id,
        }
      );
      dispatch(getUsersDetailAction(userdata?._id));
    } else {
      navigate("/home/edit");
    }
  };
  return (
    <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3">
      <div className="sticky top-[100px] border-b border-white p-4 sm:border">
        <img
          className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
          referrerPolicy="no-referrer"
          src={userdata?.profilePicture || Dummyuser}
          alt={userdata?.firstname}
        />
        <h2 className="mb-1 font-bold">{userdata?.firstname || "Username"} </h2>
        <p className="text-sm">
          Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
        </p>
        <hr className="my-4 h-[1px] w-full" />
        <div className="mb-4">
          <h3 className="mb-1 font-bold">Short Bio</h3>
          <p className="text-sm">{userdata?.about} 🌕🌙🌎</p>
        </div>
        <div className="mb-4 text-sm">
          <h3 className="mb-1 font-bold">Public link</h3>
          <button className="block text-[#ae7aff] hover:underline">
            {userdata?.email}
          </button>
          <button className="block break-all text-[#ae7aff] hover:underline">
            https://www.youtube.com/
          </button>
        </div>
        <p className="mb-4 flex gap-x-4">
          <span className="inline-block ">
            <span className="font-bold">
              {userdata?.followers?.length || 0}
            </span>
            <span className="text-sm text-gray-400 ml-2">Followers</span>
          </span>
          <span className="inline-block">
            <span className="font-bold">
              {userdata?.following?.length || 0}
            </span>
            <span className="text-sm text-gray-400 ml-2">Following</span>
          </span>
        </p>

        <button
          onClick={handleClick}
          className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
        >
          {userdata?.isOtheruser
            ? isUserFollower
              ? "Un Follow"
              : "Follow"
            : "Edit Profile"}
        </button>
      </div>
    </aside>
  );
};

LeftSidebar.propTypes = {
  userdata: PropTypes.object.isRequired,
};

export default LeftSidebar;
