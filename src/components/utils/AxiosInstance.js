import axios from "axios";
import { useNavigate } from "react-router-dom";

export const axiosInstance = axios.create(
  {
    baseURL: "http://127.0.0.1:4000/api",
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  },
  { withCredentials: true }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const navigate = useNavigate();

    if ((error.response && error.response.status === 401) || 400) {
      // Check if the response status is 401 (Unauthorized)
      // Handle token expiration or unauthorized access here
      // For example, redirect to a login page or show an error message
      localStorage.removeItem("authorization");
      localStorage.removeItem("signedIn");
      localStorage.removeItem("userInfo");
      navigate("/");
    }
    return Promise.reject(error);
  }
);
