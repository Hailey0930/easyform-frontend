import { useMutation } from "react-query";
import { instance } from "../instance";
import { useRouter } from "next/router";
import { IQuestionValue } from "commons/types/Create.types";
import { Dispatch, SetStateAction } from "react";

export const getSurveyPut = (
  title: string,
  description: string,
  isGetResponse: boolean,
  surveys: IQuestionValue[],
  setIsSuccessSave: Dispatch<SetStateAction<boolean>>,
  setIsFailSave: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter();

  return useMutation<any>(
    "getSurveyPut",
    async () =>
      await instance.put(`/survey/${router.query.surveyId}`, {
        content: {
          title,
          description,
          isGetResponse,
          surveys,
        },
      }),
    {
      onSuccess(data) {
        setIsSuccessSave(true);
      },
      onError(error) {
        console.log(error);
        setIsFailSave(true);
      },
    }
  );
};
