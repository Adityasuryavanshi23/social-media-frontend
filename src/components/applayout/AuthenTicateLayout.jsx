import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Header from "../../../Header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import { getMyUserprofileAction } from "../../store/action";

const AuthenTicateLayout = ({ children }) => {
  const { userdata, otheruserdata } = useSelector((state) => state.login);
  const { pathname } = useLocation();
  if (!userdata) {
    return <Link to="/login" replace />;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    if (userdata?._id) {
      dispatch(getMyUserprofileAction(userdata?._id));
    }
  }, [userdata?._id]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#121212]">
        <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 pt-0 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
          <LeftSidebar
            userdata={
              pathname.includes("userprofile")
                ? { ...otheruserdata?.data, isOtheruser: true }
                : userdata
            }
          />
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
