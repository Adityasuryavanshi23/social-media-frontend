import PropTypes from "prop-types";
import React from "react";
import Header from "../header/Header";

const AuthenTicateLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#121212]">
        <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 pt-0 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
          <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3">
            <div className="sticky top-[100px] border-b border-white p-4 sm:border">
              <img
                className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
                src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
                alt="avatar"
              />
              <h2 className="mb-1 font-bold">User name</h2>
              <p className="text-sm">
                Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
              </p>
              <hr className="my-4 h-[1px] w-full" />
              <div className="mb-4">
                <h3 className="mb-1 font-bold">Short Bio</h3>
                <p className="text-sm">
                  Immersed in the enchanting world of the night, captivated by
                  the moon&#x27;s allure, and constantly seeking new adventures
                  around the globe. 🌕🌙🌎
                </p>
              </div>
              <div className="mb-4 text-sm">
                <h3 className="mb-1 font-bold">Public link</h3>
                <button className="block text-[#ae7aff] hover:underline">
                  username@gmail.com
                </button>
                <button className="block break-all text-[#ae7aff] hover:underline">
                  https://www.youtube.com/
                </button>
              </div>
              <p className="mb-4 flex gap-x-4">
                <span className="inline-block">
                  <span className="font-bold">13.5k </span>
                  <span className="text-sm text-gray-400">Followers</span>
                </span>
                <span className="inline-block">
                  <span className="font-bold">204 </span>
                  <span className="text-sm text-gray-400">Following</span>
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
                  <button className="hover:text-[#ae7aff]">#javascript</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#typescript</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#java</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#python</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#golang</button>
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
