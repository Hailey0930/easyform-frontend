import { UseMutateFunction } from "react-query";

export interface IQuestionProps {
  questionId: string;
  onClickDeleteQuestion: (id: string) => void;
  onSaveQuestionValue: any;
  saveQuestion: UseMutateFunction<any, unknown, void, unknown>;
}
