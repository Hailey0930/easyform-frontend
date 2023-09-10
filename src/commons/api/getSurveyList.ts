import { useQuery } from "react-query";
import { instance } from "./instance";
import { IGetSurveyListResponse } from "commons/types/getSurveyList.types";

export const getSurveyList = (offset: number, limit: number) => {
  return useQuery<IGetSurveyListResponse[]>(
    ["getSurveyList"],
    async () =>
      await instance.get("/survey", {
        params: { offset, limit },
      }),
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
