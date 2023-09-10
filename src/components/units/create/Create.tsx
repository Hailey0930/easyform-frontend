import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./Create.styles";
import Question from "components/commons/question/Question";
import { v4 as uuidv4 } from "uuid";
import ToastPopUp from "components/commons/ToastPopUP";
import { getSurveyPut } from "commons/api/create/getSurveyPut";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { surveyIdState } from "store/surveyIdState";
import { questionState } from "store/questionState";

export default function Create() {
  const [question, setQuestion] = useRecoilState(questionState);
  const [addQuestion, setAddQuestion] = useState([
    {
      id: uuidv4(),
    },
  ]);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTopDown, setScrollTopDown] = useState("top");
  // NOTE 저장 성공 시 ToastPopup 노출
  const [isSuccessSave, setIsSuccessSave] = useState(false);
  // NOTE 저장 실패 시 ToastPopup 노출
  const [isFailSave, setIsFailSave] = useState(false);
  const [surveyId, setSurveyId] = useRecoilState(surveyIdState);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const CREATE_PAGE =
    router.pathname === "/create" || router.pathname === "/create/[surveyId]";

  const { mutate: surveyPut } = getSurveyPut(
    question.title,
    question.description,
    question.isReceiveResponse,
    question.questionValue,
    setIsSuccessSave,
    setIsFailSave
  );

  useEffect(() => {
    if (CREATE_PAGE && typeof router.query.surveyId === "string") {
      console.log("router.query", router.query.surveyId);
      setSurveyId(router.query.surveyId);
    }
  }, [router]);

  useEffect(() => {
    console.log("Current surveyId in Result:", surveyId);
  }, [surveyId]);

  // NOTE add question 버튼 클릭 시 스크롤 아래로 이동하도록 하는 useEffect
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [addQuestion]);

  // NOTE 현재 스크롤 위치 가져오는 useEffect
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", getScrollPosition);

      if (scrollPosition < 300) {
        setScrollTopDown("down");
      } else if (scrollPosition >= 300) {
        setScrollTopDown("top");
      }
    }
  }, [scrollPosition, scrollTopDown]);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion({ ...question, title: e.target.value });
  };

  // NOTE textArea 높이 자동 설정
  const adjustTextAreaHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto"; // 높이를 재설정하기 전에 auto로 설정
    e.target.style.height = `${e.target.scrollHeight}px`; // 새 높이로 설정
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion({ ...question, description: e.target.value });
    adjustTextAreaHeight(e);
  };

  const onClickAddQuestion = () => {
    const newAddQuestion = {
      id: uuidv4(),
    };
    setAddQuestion([...addQuestion, newAddQuestion]);
  };

  const onClickDeleteQuestion = (id: string) => {
    if (addQuestion.length > 1)
      setAddQuestion(
        addQuestion.filter((question: { id: string }) => question.id !== id)
      );
    else if (addQuestion.length === 1) {
      setIsToastOpen(true);
    }
  };

  // NOTE Question 컴포넌트에서 question value 가져오기
  const handleQuestionValue = (id: string, newState: any) => {
    const existingIndex = question.questionValue.findIndex(
      (state) => state.id === id
    );

    if (existingIndex > -1) {
      const updatedQuestionValue = [...question.questionValue];
      updatedQuestionValue[existingIndex] = { id, ...newState };
      setQuestion({ ...question, questionValue: updatedQuestionValue });
    } else {
      setQuestion({ ...question, questionValue: { id, ...newState } });
    }
  };

  // NOTE 맨 위로 가기
  const onClickScrollToTop = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setScrollTopDown("down");
  };

  // NOTE 맨 아래로 가기
  const onClickScrollToBottom = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    setScrollTopDown("top");
  };

  // NOTE 스크롤 포지션 가져오기
  const getScrollPosition = () => {
    if (window !== undefined) {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.FormTitleInput
          defaultValue={question.title}
          autoFocus
          onChange={handleTitle}
        />

        <S.FormDescriptionInput
          defaultValue={question.description}
          onChange={handleDescription}
        />

        <S.QuestionWrapper>
          {addQuestion.map((el: { id: string }) => (
            <Question
              questionId={el.id}
              key={el.id}
              onClickDeleteQuestion={onClickDeleteQuestion}
              onSaveQuestionValue={(newQuestionValue: any) =>
                handleQuestionValue(el.id, newQuestionValue)
              }
              saveQuestion={surveyPut}
            />
          ))}
        </S.QuestionWrapper>
        <S.AddQuestionButtonWrapper ref={scrollRef}>
          <S.AddQuestionButton onClick={onClickAddQuestion}>
            Add Question
          </S.AddQuestionButton>
        </S.AddQuestionButtonWrapper>
        {addQuestion.length > 2 && (
          <S.ScrollButtonWrapper>
            <S.ScrollButton
              onClick={
                scrollTopDown === "top"
                  ? onClickScrollToTop
                  : onClickScrollToBottom
              }
              scrollTopDown={scrollTopDown}
            />
          </S.ScrollButtonWrapper>
        )}
        <ToastPopUp
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
          contents="질문이 한 개 이상이여야 합니다."
          toastMode="warning"
        />
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
