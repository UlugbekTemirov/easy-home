import axios from "axios";
import { BASE_URL } from "../config";
export const useHttp = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const request = async ({
    method = "GET",
    url,
    data,
    headers = {
      "Content-Type": "application/json",
    },
  }) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers,
      });
      if (response.statusText !== "OK") {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return { request };
};
