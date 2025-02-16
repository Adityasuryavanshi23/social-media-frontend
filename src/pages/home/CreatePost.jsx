import React, { useRef, useState } from "react";
import { Form, Formik } from "formik";
import useApiRequest from "../../../hooks/useApiRequest";
import { handleFileUpload } from "../../utils/cloudinary";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BtnSpinner from "../../components/Common/BtnSpinner";

export const CreatePost = () => {
  const { makeApiRequest } = useApiRequest();
  const [loading, setLoading] = useState(false);
  const [previewImage, setpreviewImage] = useState("");
  const navigate = useNavigate();
  const imageref = useRef();
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const payload = {
        desc: values.desc,
      };
      const cloudinaryResponse = await handleFileUpload(values.image);
      payload.image = cloudinaryResponse.secure_url;
      const resp = await makeApiRequest("/post", "POST", payload);
      if (resp) {
        toast.success("Post created successfully!");
        resetForm();
        navigate("/home/myposts");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full text-white">
      <div className="w-full mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <Formik initialValues={{ desc: "", image: "" }} onSubmit={handleSubmit}>
          {({ setFieldValue, handleChange }) => (
            <Form className="w-full mx-auto  space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 ">
                <div className="flex justify-between items-center">
                  <textarea
                    name="desc"
                    className="w-full flex-[.6] bg-transparent border-none focus:outline-none focus:ring-0 resize-none h-64 text-white placeholder-gray-500"
                    onChange={handleChange}
                    placeholder="What's on your mind, Aurora?"
                  ></textarea>
                  <div className="h-[200px] mx-2 bg-gray-500 w-[1px]"></div>
                  <input
                    id="avatar-input-1"
                    ref={imageref}
                    className="hidden"
                    onChange={(e) => {
                      setFieldValue("image", e.target.files[0]);
                      setpreviewImage(URL.createObjectURL(e.target.files[0]));
                    }}
                    type="file"
                    name="image"
                  />
                  <div className="  flex-[.4] flex items-center justify-center flex-col space-x-4">
                    <div onClick={() => imageref.current.click()} className="">
                      {previewImage ? (
                        <div className="relative w-full h-full">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setpreviewImage("");
                              setFieldValue("image", "");
                            }}
                            className=" top-2 right-9 absolute bg-gray-900 grid place-content-center w-5 h-5 rounded-full p-2"
                          >
                            <i className="fa-solid  text-[8px] fa-trash"></i>
                          </div>
                          <div className=" top-2 right-2 absolute bg-gray-900 grid place-content-center w-5 h-5 rounded-full p-2">
                            <i className="fa-solid  text-[8px] fa-pen"></i>
                          </div>
                          <img
                            src={previewImage}
                            alt="preview"
                            className="w-full h-full max-h-[200px]"
                          />
                        </div>
                      ) : (
                        <div className="flex justify-center items-center flex-col">
                          <div className="bg-purple-600 grid place-content-center w-6 h-6 rounded-full p-2">
                            <i className="fa-solid  text-[12px] fa-plus "></i>
                          </div>
                          <span>Add Photos/Videos</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-200"
                  >
                    {loading ? <BtnSpinner /> : "Post"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
