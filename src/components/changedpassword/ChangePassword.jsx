import React from "react";

const ChangePassword = () => {
  return (
    <>
      <h1 className="capitalize text-3xl text-center font-medium text-violet-400  ">change password</h1>
      <div className="mb-4 mt-8 flex flex-wrap gap-y-4 p-4 md:p-0">
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-md mb-2 text-slate-200">Old password</label>
          <input
            placeholder="Enter old password"
            autoComplete="false"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            type="password"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-md mb-2 text-slate-200">New password</label>
          <input
            placeholder="Enter new password"
            autoComplete="false"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            type="password"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-md mb-2 text-slate-200">Confirm password</label>
          <input
            placeholder="Enter confirm password"
            autoComplete="false"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            type="password"
          />
        </div>
        <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          Change Password
        </button>
      </div>
    </>
  );
};

export default ChangePassword;
