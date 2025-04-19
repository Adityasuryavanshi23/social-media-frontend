import React from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";
import { makeApiRequest } from "../../Http/axiosMain";
import { UserList } from "./UserList";

const SearchUserModal = ({ onClose }) => {
  const [loading, setloading] = React.useState(false);
  const [users, setusers] = React.useState([]);
  const handleSubmit = async (values) => {
    try {
      setloading(true);
      const users = await makeApiRequest(
        "/user/search/users?query=" + values.search,
        "GET"
      );
      setusers(users);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <Modal handleClose={onClose} containerClassname=" w-full md:w-[480px]">
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        {({ handleChange }) => (
          <Form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                onChange={handleChange}
                id="default-search"
                name="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm    active:scale-95 hover:scale-105 transition-all ease-in-out py-2 px-4 bg-[#9565e3de] hover:bg-[#9562e7]"
              >
                Search
              </button>
            </div>
            <div className="mt-4 h-64 overflow-y-auto border border-gray-500 rounded-md p-2">
              {users.length === 0 ? (
                <p className="capitalize text-indigo-200">
                  search result here.....
                </p>
              ) : (
                users.map((user) => (
                  <UserList user={user} key={user.id} onClose={onClose} />
                ))
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

SearchUserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SearchUserModal;
