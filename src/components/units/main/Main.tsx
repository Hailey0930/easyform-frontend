import { getSurveyList } from "commons/api/getSurveyList";
import * as S from "./Main.styles";
import FormContainer from "components/commons/main/FormContainer";
import { useState } from "react";

export default function Main() {
  const [offset] = useState(0);
  const [limit] = useState(10);

  const { data: surveyList } = getSurveyList(offset, limit);

  return surveyList && surveyList.length < 1 ? (
    <S.Wrapper>
      <S.InformationContainer>
        <S.ImageContainer>
          <S.Image src="/assets/img_home.png" />
        </S.ImageContainer>
        <S.Logo />
        <S.InformationText>
          작성된 설문지가 없습니다.
          <br />
          설문지를 작성해 주세요.
        </S.InformationText>
      </S.InformationContainer>
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <S.Title>Recent Forms</S.Title>
      <S.ListWrapper></S.ListWrapper>

      <S.Title>My Forms</S.Title>
      <S.ListWrapper>
        {surveyList?.map((item) => (
          <FormContainer key={item.id} survey={item} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
