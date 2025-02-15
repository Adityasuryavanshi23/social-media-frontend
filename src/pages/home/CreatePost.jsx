import React from "react";
import { Form, Formik } from "formik";
import useApiRequest from "../../../hooks/useApiRequest";

export const CreatePost = () => {
  const { makeApiRequest } = useApiRequest();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      resetForm();
      const res = await makeApiRequest();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen w-full text-white">
      <div className="w-full mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <Formik initialValues={{ desc: "", image: "" }} onSubmit={handleSubmit}>
          {() => (
            <Form className="w-full mx-auto  space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 ">
                <div className="flex justify-between items-center">
                  <textarea
                    name="desc"
                    className="w-full flex-[.6] bg-transparent border-none focus:outline-none focus:ring-0 resize-none h-64 text-white placeholder-gray-500"
                    placeholder="What's on your mind, Aurora?"
                  ></textarea>
                  <div className="h-[200px] mx-2 bg-gray-500 w-[1px]"></div>
                  <div className="  flex-[.4] flex items-center justify-center flex-col space-x-4">
                    <div className="bg-purple-600 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <span>Add Photos/Videos</span>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button className="border border-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-200">
                    Save Draft
                  </button>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-200">
                    Post
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
