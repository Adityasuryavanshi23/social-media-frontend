import PropTypes from "prop-types";
import React from "react";
import Header from "../../../Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dummyuser from "../../assets/dummyuser.png";

const AuthenTicateLayout = ({ children }) => {
  const { userdata } = useSelector((state) => state.login);
  const { profilePicture, firstname, email, about } = userdata;

  if (!userdata) {
    return <Link to="/login" replace />;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#121212]">
        <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 pt-0 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
          <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3">
            <div className="sticky top-[100px] border-b border-white p-4 sm:border">
              <img
                className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
                src={profilePicture || Dummyuser}
                alt={firstname}
              />
              <h2 className="mb-1 font-bold">{firstname || "Username"} </h2>
              <p className="text-sm">
                Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
              </p>
              <hr className="my-4 h-[1px] w-full" />
              <div className="mb-4">
                <h3 className="mb-1 font-bold">Short Bio</h3>
                <p className="text-sm">{about} 🌕🌙🌎</p>
              </div>
              <div className="mb-4 text-sm">
                <h3 className="mb-1 font-bold">Public link</h3>
                <button className="block text-[#ae7aff] hover:underline">
                  {email}
                </button>
                <button className="block break-all text-[#ae7aff] hover:underline">
                  https://www.youtube.com/
                </button>
              </div>
              <p className="mb-4 flex gap-x-4">
                <span className="inline-block ">
                  <span className="font-bold">0</span>
                  <span className="text-sm text-gray-400 ml-2">Followers</span>
                </span>
                <span className="inline-block">
                  <span className="font-bold">0</span>
                  <span className="text-sm text-gray-400 ml-2">Following</span>
                </span>
              </p>
              <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                Edit Profile
              </button>
            </div>
          </aside>
          <section className="col-span-12 text-white md:col-span-7 lg:col-span-5 xl:col-span-6">
            {children}
          </section>
          <aside className="hidden text-white lg:col-span-3 lg:block">
            <div className="sticky top-[100px] border p-4">
              <h2 className="mb-4 font-bold"># Trending Hashtags</h2>
              <ul className="list-disc pl-4">
                <li>
                  <button className="hover:text-[#ae7aff]">#Dailynews</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#AI deepseak</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#React</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">
                    #Frontend Development
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#Javascript</button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

AuthenTicateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenTicateLayout;
