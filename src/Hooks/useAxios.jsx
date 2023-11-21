import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiositem = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
    const navigate=useNavigate()
    const {logout}=useAuth()
    
  axiositem.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("access-token");
    //   console.log("request stopped bty inceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiositem.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
     async(error)=> {
        const status=error.response.status;
    //   console.log('error status interceptor',status);
    //   401 and 403 check an logout the user directly
    if(status === 401 || status === 403){
        await logout()
        navigate('/login')
    }

      return Promise.reject(error);
    }
  );
  return axiositem;
};

export default useAxios;
