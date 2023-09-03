export interface ISavedState {
  title: string;
  questionType: string;
  isMultipleChoiceOn: boolean;
  isNecessaryOn: boolean;
  option?: { id: string; value: string }[];
  paragraphDescription?: string;
}
