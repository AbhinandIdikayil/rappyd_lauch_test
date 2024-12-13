import axios from 'axios'

export const AXIOS_INSTANCE = axios.create({
    baseURL: process.env.SERVER,
    withCredentials: true,
    timeout: 10000, 
});


// Add a response interceptor
AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
      // Return the response if successful
      return response;
    },
    (error) => {
      if (error.code === "ECONNABORTED" || error.message === "Network Error") {
        console.error("The server is unavailable. Please try again later.");
        alert("Cannot connect to the server. Please try again later.");
      } else if (error.response) {
        const { status, data } = error.response;
  
        if (status === 500) {
          console.error("Internal Server Error:", data.message || "An error occurred.");
        } else if (status === 404) {
          console.error("Resource not found:", data.message || "Requested resource not available.");
        }
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
  
      return Promise.reject(error);
    }
  );