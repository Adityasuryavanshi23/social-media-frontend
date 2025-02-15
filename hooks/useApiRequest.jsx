import React from "react";
import axiosMain from "../src/Http/axiosMain";

const useApiRequest = () => {
  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  const makeApiRequest = async (url, method, body) => {
    setLoading(true);
    try {
      const response = await axiosMain({
        url,
        method,
        data: body,
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
      return error;
    }
  };
  return { loading, error, data, makeApiRequest };
};

export default useApiRequest;
