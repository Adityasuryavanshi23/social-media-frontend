import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import Dummyuser from "../../assets/dummyuser.png";
import { useDispatch, useSelector } from "react-redux";
import BtnSpinner from "../Common/BtnSpinner";
import { handleFileUpload } from "../../utils/cloudinary";
import useApiRequest from "../../../hooks/useApiRequest";
import { setUserdata } from "../../store/slices/loginReducer";

const EditProfile = () => {
  const imageref = useRef();
  const { userdata } = useSelector((state) => state.login);
  const [previewImage, setpreviewImage] = useState(userdata?.profilePicture);
  const [loading, setLoading] = useState(false);
  const { makeApiRequest } = useApiRequest();

  const initialvalue = {
    firstname: userdata?.firstname || "",
    about: userdata?.about || "",
    lastname: userdata?.lastname || "",
    image: userdata?.image || "",
    username: userdata?.username || "",
  };
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      if (values.image) {
        const cloudinaryResponse = await handleFileUpload(values.image);
        values.profilePicture = cloudinaryResponse.secure_url;
      }
      const resp = await makeApiRequest(`/user/${userdata?._id}`, "PUT", {
        ...values,
        userId: userdata?._id,
      });
      dispatch(setUserdata(resp.user));
      resetForm();
      setpreviewImage(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik initialValues={initialvalue} onSubmit={handleSubmit}>
      {({ setFieldValue, handleChange, values }) => (
        <Form className="mb-4 mt-8 flex flex-wrap gap-y-4 p-4 md:p-0">
          <div className="flex w-full items-center justify-center">
            <input
              id="avatar-input-1"
              className="hidden"
              ref={imageref}
              onChange={(e) => {
                setFieldValue("image", e.target.files[0]);
                setpreviewImage(URL.createObjectURL(e.target.files[0]));
              }}
              type="file"
              name="image"
            />
            <label
              htmlFor="avatar-input-1"
              onClick={() => imageref.current.click()}
              className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1"
            >
              <img
                alt="avatar-inp"
                src={previewImage || Dummyuser}
                className="h-full w-full rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-[#ae7aff] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-3 w-3 text-black"
                >
                  <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"></path>
                </svg>
              </span>
            </label>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2 xl:w-1/2 xl:pr-2">
            <label className="text-xs text-slate-200">First name</label>
            <input
              placeholder="Enter first name"
              autoComplete="false"
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              value={values.firstname}
              onChange={handleChange}
              name="firstname"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2 xl:w-1/2 xl:pl-2">
            <label className="text-xs text-slate-200">Last name</label>
            <input
              placeholder="Enter last name"
              autoComplete="false"
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              value={values.lastname}
              onChange={handleChange}
              name="lastname"
            />
          </div>

          <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Username</label>
            <input
              placeholder="Enter username"
              autoComplete="false"
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              value={values.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Short Bio</label>
            <textarea
              placeholder="Enter short bio"
              autoComplete="false"
              value={values.about}
              onChange={handleChange}
              name="about"
              className="w-full resize-none border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
          >
            {loading ? <BtnSpinner /> : "Edit profile"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfile;
