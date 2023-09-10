import { getSurveyPut } from "commons/api/create/getSurveyPut";
import * as S from "./MenuBar.styles";
import Toggle from "components/commons/Toggle";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "store/loginState";
import { questionState } from "store/questionState";
import { surveyIdState } from "store/surveyIdState";
import ToastPopUp from "components/commons/ToastPopUP";

export default function MenuBar() {
  const isLogin = useRecoilValue(loginState);
  const [question, setQuestion] = useRecoilState(questionState);
  const surveyId = useRecoilValue(surveyIdState);
  // NOTE 저장 성공 시 ToastPopup 노출
  const [isSuccessSave, setIsSuccessSave] = useState(false);
  // NOTE 저장 실패 시 ToastPopup 노출
  const [isFailSave, setIsFailSave] = useState(false);

  const router = useRouter();

  const CREATE_PAGE = router.asPath.includes("create");
  const RESULT_PAGE = router.asPath.includes("result");

  const { mutate: surveyPut } = getSurveyPut(
    question.title,
    question.description,
    question.isReceiveResponse,
    question.questionValue,
    setIsSuccessSave,
    setIsFailSave
  );

  const onClickQuestion = () => {
    if (surveyId) {
      router.push(`/create/${surveyId}`);
    } else router.push("/create");
  };

  const onClickResult = () => {
    router.push("/result/summary");
  };

  const onClickToggle = () => {
    setQuestion({
      ...question,
      isReceiveResponse: !question.isReceiveResponse,
    });
  };

  const onClickSaveButton = () => {
    surveyPut();
  };

  return (
    <>
      <S.Wrapper>
        <S.LeftContainer>
          <S.CategoryTitle
            className={`${CREATE_PAGE ? "active" : ""}`}
            value="question"
            onClick={onClickQuestion}
          >
            설문
          </S.CategoryTitle>
          <S.CategoryTitle
            className={`${RESULT_PAGE ? "active" : ""}`}
            value="result"
            onClick={onClickResult}
          >
            응답
          </S.CategoryTitle>
        </S.LeftContainer>
        {CREATE_PAGE && (
          <S.RightContainer>
            <S.ResponseContainer>
              응답받기
              <Toggle
                onClick={onClickToggle}
                isOn={question.isReceiveResponse}
              />
            </S.ResponseContainer>
            <S.MiddleButtonContainer>
              <S.TextButton>미리보기</S.TextButton>
              <S.TextButton>초기화</S.TextButton>
              <S.ShareButton isLogin={isLogin}>공유</S.ShareButton>
            </S.MiddleButtonContainer>
            <S.SaveButton isLogin={isLogin} onClick={onClickSaveButton}>
              저장
              <S.SaveBubble isLogin={isLogin}>
                로그인 이후 서비스를 완전히 이용할 수 있어요!
              </S.SaveBubble>
            </S.SaveButton>
          </S.RightContainer>
        )}
      </S.Wrapper>

      {isSuccessSave && (
        <ToastPopUp
          isToastOpen={isSuccessSave}
          setIsToastOpen={setIsSuccessSave}
          contents="설문지가 저장되었습니다."
          toastMode="normal"
        />
      )}

      {isFailSave && (
        <ToastPopUp
          isToastOpen={isFailSave}
          setIsToastOpen={setIsFailSave}
          contents="저장에 실패하였습니다. 다시 시도해주세요"
          toastMode="warning"
        />
      )}
    </>
  );
}
