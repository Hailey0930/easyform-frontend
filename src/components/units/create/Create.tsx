import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Create.styles";
import Question from "components/commons/question/Question";
import { v4 as uuidv4 } from "uuid";
import ToastPopUp from "components/commons/ToastPopUP";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loginState } from "store/loginState";
import Toggle from "components/commons/Toggle";
import { IQuestionValue } from "commons/types/create.types";

export default function Create() {
  const isLogin = useRecoilValue(loginState);
  const [isReceiveResponse, setIsReceiveResponse] = useState(true);
  const [title, setTitle] = useState("설문지");
  const [description, setDescription] = useState("Form Description");
  const [addQuestion, setAddQuestion] = useState([
    {
      id: uuidv4(),
    },
  ]);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTopDown, setScrollTopDown] = useState("top");
  // NOTE 전체 Question값 저장
  const [questionValue, setQuestionValue] = useState<IQuestionValue[]>([]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const router = useRouter();

  const CREATE_PAGE = router.asPath.includes("create");
  const RESULT_PAGE = router.asPath.includes("result");

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

  const onClickQuestion = () => {
    router.push("/create");
  };

  const onClickResult = () => {
    router.push("/result/summary");
  };

  // NOTE 응답받기 토글
  const onClickReceiveResponseToggle = () => {
    setIsReceiveResponse(!isReceiveResponse);
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // NOTE textArea 높이 자동 설정
  const adjustTextAreaHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto"; // 높이를 재설정하기 전에 auto로 설정
    e.target.style.height = `${e.target.scrollHeight}px`; // 새 높이로 설정
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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
    const existingIndex = questionValue.findIndex((state) => state.id === id);

    if (existingIndex > -1) {
      const updatedQuestionValue = [...questionValue];
      updatedQuestionValue[existingIndex] = { id, ...newState };
      setQuestionValue(updatedQuestionValue);
    } else {
      setQuestionValue([...questionValue, { id, ...newState }]);
    }
  };

  const onClickSaveButton = () => {
    console.log("questionValue", questionValue);
    console.log("title", title);
    console.log("description", description);
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
            <Toggle
              onClick={onClickReceiveResponseToggle}
              isOn={isReceiveResponse}
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
      </S.MenubarWrapper>
      <S.Wrapper>
        <S.FormTitleInput
          defaultValue={title}
          autoFocus
          onChange={handleTitle}
        />

        <S.FormDescriptionInput
          defaultValue={description}
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
    </>
  );
}
