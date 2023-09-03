export interface IQuestionValue {
  id: string;
  isMultipleChoiceOn: boolean;
  isNecessaryOn: boolean;
  option?: {
    id: string;
    value: TemplateStringsArray;
  }[];
  paragraphDescription?: string;
  questionType: string;
  title: string;
}
