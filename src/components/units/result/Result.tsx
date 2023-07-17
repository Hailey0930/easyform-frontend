import MultipleOption from "components/commons/response/individual/MultipleOption";
import * as S from "./Result.styles";
import OneOption from "components/commons/response/individual/OneOption";
import BarGraph from "components/commons/response/summary/BarGraph";
import DoughnutGraph from "components/commons/response/summary/DoughnutGraph";
import Paragraph from "components/commons/response/summary/Paragraph";
import { useRouter } from "next/router";
import IndividualParagraph from "components/commons/response/individual/IndividualParagraph";
import { useState } from "react";
import RemoveModal from "components/commons/modal/RemoveModal";
import { useRecoilValue } from "recoil";
import { loginState } from "store/loginState";
import Toggle from "components/commons/Toggle";

export default function Result() {
  const isLogin = useRecoilValue(loginState);
  const [isOn, setIsOn] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const SUMMARY_PAGE = router.asPath.includes("summary");
  const INDIVIDUAL_PAGE = router.asPath.includes("individual");
  const CREATE_PAGE = router.asPath.includes("create");
  const RESULT_PAGE = router.asPath.includes("result");

  const onClickQuestion = () => {
    router.push("/create");
  };

  const onClickResult = () => {
    router.push("/result/summary");
  };

  const onClickToggle = () => {
    setIsOn(!isOn);
  };

  const onClickSummary = () => {
    router.push("/result/summary");
  };

  const onClickIndividual = () => {
    router.push("/result/individual");
  };

  const onClickRemoveButton = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <S.MenubarWrapper>
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
        <S.RightContainer>
          <S.ResponseContainer>
            응답받기
            <Toggle onClick={onClickToggle} isOn={isOn} />
          </S.ResponseContainer>
          <S.MiddleButtonContainer>
            <S.TextButton>미리보기</S.TextButton>
            <S.TextButton>초기화</S.TextButton>
            <S.ShareButton isLogin={isLogin}>공유</S.ShareButton>
          </S.MiddleButtonContainer>
          <S.SaveButton isLogin={isLogin}>
            저장
            <S.SaveBubble isLogin={isLogin}>
              로그인 이후 서비스를 완전히 이용할 수 있어요!
            </S.SaveBubble>
          </S.SaveButton>
        </S.RightContainer>
      </S.MenubarWrapper>
      <S.Wrapper>
        <S.Title>103 Responses</S.Title>
        <S.CategoryContainer>
          <S.CategoryTab
            className={`${SUMMARY_PAGE ? "active" : ""}`}
            onClick={onClickSummary}
            value="summary"
          >
            Summary
          </S.CategoryTab>
          <S.CategoryTab
            className={`${INDIVIDUAL_PAGE ? "active" : ""}`}
            onClick={onClickIndividual}
            value="individual"
          >
            Individual
          </S.CategoryTab>
        </S.CategoryContainer>

        {INDIVIDUAL_PAGE && (
          <>
            <S.IndividualMenuBar>
              <S.ResponseMoveContainer>
                <S.PreviousButton>Previous</S.PreviousButton>
                <S.CountContainer>
                  <S.CurrentPage>1</S.CurrentPage>/ 103
                </S.CountContainer>
                <S.NextButton>Next</S.NextButton>
              </S.ResponseMoveContainer>
              <S.RemoveButton onClick={onClickRemoveButton}>
                해당 응답 삭제
              </S.RemoveButton>
            </S.IndividualMenuBar>
            {isModalOpen && <RemoveModal setIsModalOpen={setIsModalOpen} />}
          </>
        )}

        <S.SummaryWrapper>
          {SUMMARY_PAGE && (
            <>
              <BarGraph />
              <DoughnutGraph />
              <Paragraph />
            </>
          )}
          {INDIVIDUAL_PAGE && (
            <>
              <OneOption />
              <MultipleOption />
              <IndividualParagraph />
            </>
          )}
        </S.SummaryWrapper>
      </S.Wrapper>
    </>
  );
}
