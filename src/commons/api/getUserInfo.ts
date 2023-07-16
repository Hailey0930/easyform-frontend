import { useQuery } from "react-query";
import { instance } from "./instance";
import { IGetUserInfo } from "commons/types/getUserInfo.types";

export const getUserInfo = () => {
  return useQuery<IGetUserInfo>(
    ["userInfo"],
    async () => await instance.get("/users"),
    {
      onSuccess(data) {
        return data;
      },
      onError(error) {
        console.log(error);
      },
    }
  );
};
