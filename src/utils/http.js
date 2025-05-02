import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wealthexpress.onrender.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 403:
          console.error(
            "Forbidden: You do not have permission to access this resource.",
          );
          break;
        case 404:
          console.error(
            "Not Found: The requested resource could not be found.",
          );
          break;
        case 500:
          console.error("Server Error: Something went wrong.");
          break;
        default:
          console.error(
            `Error: ${error.response.status} - ${error.response.statusText}`,
          );
      }
    } else if (error.request) {
      console.error("Network Error: No response from server.");
    } else {
      console.error("Request Error:", error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
