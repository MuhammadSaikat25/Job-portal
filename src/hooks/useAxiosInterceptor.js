import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const axiosInterceptor = axios.create({
  baseURL: `http://localhost:5000`,
});
const useAxiosInterceptor = () => {
  const { userOut } = useContext(AuthContext);
  const navigate = useNavigate();
 
  axiosInterceptor.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInterceptor.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response?.status;
      if (status === 403 || status === 401) {
        await userOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosInterceptor;
};

export default useAxiosInterceptor;
