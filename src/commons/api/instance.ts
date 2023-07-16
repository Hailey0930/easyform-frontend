import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API,
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) return res.data.data;
  },

  (err) => {
    console.log(err);
  }
);
