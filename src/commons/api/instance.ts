import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("recoil-persist")) {
        const loginState = JSON.parse(
          localStorage.getItem("recoil-persist") as string
        );
        const token = loginState.loginState.accessToken;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) return res.data.data;
  },

  (err) => {
    console.log(err);
  }
);
