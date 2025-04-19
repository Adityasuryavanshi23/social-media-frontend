import axios from 'axios'

const axiosMain = axios.create({
  baseURL: 'http://localhost:3001/',
})



export default axiosMain


export const makeApiRequest = async (url, method, body) => {
  // eslint-disable-next-line no-useless-catch
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
    console.log(response);
    // resolve(response.data);
    return response.data;
  } catch (error) {
    // reject(error);
    throw error;
  }
};