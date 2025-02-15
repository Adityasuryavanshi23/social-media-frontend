import { useDispatch, useSelector } from "react-redux";
import axiosMain from "../src/Http/axiosMain";
import { setUserdata } from "../src/store/slices/loginReducer";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const { userdata, isuserloggedin } = useSelector((state) => state.login);
  const nav = useNavigate();
  const login = async (payload) => {
    try {
      const resp = await axiosMain.post("/auth/login", payload);
      return resp.data;
    } catch (error) {
      throw error;
    }
  };
  const register = async (payload) => {
    try {
      const resp = await axiosMain.post("/auth/register", payload);
      return resp.data;
    } catch (error) {
      throw error;
    }
  };
  const handlePostLogin = (resp) => {
    localStorage.setItem("authToken", resp.token);
    dispatch(setUserdata(resp.user));
    nav("/home");
  };
  return {
    isuserloggedin,
    user: null,
    login,
    userdata,
    register,
    handlePostLogin,
  };
};

export default useAuthentication;
