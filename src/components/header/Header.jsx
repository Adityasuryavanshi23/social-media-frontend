import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuthentication from "../../../hooks/useAuthentication";
import { logoutUser } from "../../store/slices/loginReducer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchUserModal from "../Common/SearchUserModal";
import ProfileDropDown from "../../pages/home/ProfileDropDown";
import { PaymentButton } from "../razorpay/PaymentButton";

const Header = () => {
  const { isuserloggedin } = useAuthentication();
  const { userdata } = useSelector((state) => state.login);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [searchModal, setsearchModal] = useState(false);
  const [showuser, setshowuser] = useState(false);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutUser());
    sessionStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    pathname && setshowuser(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
      <h1 className="text-xl font-bold md:text-4xl text-[#a578f1] ">
        <Link to={"/home"}> Socail Hub</Link>
      </h1>
      <p
        onClick={() => setsearchModal(true)}
        className="cursor-pointer font-bold px-4 py-2 hover:bg-[#9562e7] bg-[#9565e3de] rounded-md active:scale-95 hover:scale-105 transition-all ease-in-out ml-[253px] "
      >
        Search users
      </p>
      <div className="flex justify-between items-center gap-4 ">
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          {/* <span className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </span> */}
          <PaymentButton />
          {isuserloggedin ? (
            <button className="capitalize active:scale-95 hover:scale-105 transition-all ease-in-out py-1 px-4 bg-[#ae7aff] hover:bg-[#9562e7] hover:text-white  font-bold text-lg rounded-md ">
              <Link
                to="/login"
                className="block w-full h-full"
                onClick={handlelogout}
              >
                logout
              </Link>
            </button>
          ) : null}

          <button
            onClick={() => navigate("/home/create")}
            className="hidden w-max items-center justify-center  rounded-md bg-[#ae7aff] hover:bg-[#9562e7] active:scale-95 hover:scale-105 transition-all ease-in-out py-3 px-4 text-center font-bold text-white md:inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="mr-2 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              ></path>
            </svg>
            Create new
          </button>
        </div>
        <div
          className="border rounded-full p-2 max-w-12 h-12 cursor-pointer"
          onClick={() => setshowuser(!showuser)}
        >
          <img src={userdata.profilePicture} alt="" className="w-8" />
        </div>
      </div>
      {searchModal && (
        <SearchUserModal onClose={() => setsearchModal(!searchModal)} />
      )}
      {showuser && (
        <ProfileDropDown setshowuser={setshowuser} logout={handlelogout} />
      )}
    </header>
  );
};

export default Header;
