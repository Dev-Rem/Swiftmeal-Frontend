import axios from "axios";

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
    if (error.response && error.response.status === 401) {
      // Check if the response status is 401 (Unauthorized)
      // Handle token expiration or unauthorized access here
      // For example, redirect to a login page or show an error message
      localStorage.setItem("authorization", "");
      localStorage.setItem("signedIn", false);
      console.log("Token has expired or unauthorized access");
    }
    return Promise.reject(error);
  }
);
