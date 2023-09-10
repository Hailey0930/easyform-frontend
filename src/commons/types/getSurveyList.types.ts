export interface IGetSurveyListResponse {
  id: string;
  title: string;
  isGetResponse: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IFormContainerProps {
  survey: IGetSurveyListResponse;
}
