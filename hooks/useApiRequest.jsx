import React from "react";
import axiosMain from "../src/Http/axiosMain";

const useApiRequest = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  const makeApiRequest = async (url, method, body) => {
    // eslint-disable-next-line no-async-promise-executor
    // new Promise(async (resolve, reject) => {
    setLoading(true);
    try {
      const response = await axiosMain({
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
        data: body,
      });
      setData(response.data);
      setLoading(false);
      // resolve(response.data);
      return response.data;
    } catch (error) {
      setError(error);
      setLoading(false);
      // reject(error);
      throw error;
    }
  };
  // });
  return { loading, error, data, makeApiRequest };
};

export default useApiRequest;
