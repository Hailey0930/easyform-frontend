import { useMutation } from "react-query";
import { instance } from "../instance";
import { useRouter } from "next/router";

export const getSurveyPost = () => {
  const router = useRouter();

  return useMutation<any>(
    "getSurveyPost",
    async () => await instance.post("/survey"),
    {
      onSuccess(data) {
        router.push(`/create/${data.id}`);
      },
      onError(error) {
        console.log(error);
      },
    }
  );
};
