import { atom } from "recoil";
import { IQuestionValue } from "../../src/commons/types/Create.types";

interface IQuestionState {
  isReceiveResponse: boolean;
  title: string;
  description: string;
  questionValue: IQuestionValue[];
}

export const questionState = atom<IQuestionState>({
  key: "questionState",
  default: {
    isReceiveResponse: true,
    title: "설문지",
    description: "Form Description",
    questionValue: [],
  },
});
