import {
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./Create.styles";
import Question from "components/commons/question/Question";
import { v4 as uuidv4 } from "uuid";
import ToastPopUp from "components/commons/ToastPopUP";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "commons/types/create.types";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loginState } from "store/loginState";
import Toggle from "components/commons/Toggle";

export default function Create() {
  const isLogin = useRecoilValue(loginState);
  const [isOn, setIsOn] = useState(true);
  const [isEditTitle, setIsEditTitle] = useState(true);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [addQuestion, setAddQuestion] = useState([
    {
      id: uuidv4(),
    },
  ]);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTopDown, setScrollTopDown] = useState("top");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const router = useRouter();

  const { register, handleSubmit, getValues } = useForm<IFormInput>();
  const { ref, ...rest } = register("formDescription");

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

  const onClickToggle = () => {
    setIsOn(!isOn);
  };

  // NOTE textArea 높이 자동 설정
  const handleResizeHeight = useCallback(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = "fit-content";
      textAreaRef.current.style.height =
        textAreaRef.current?.scrollHeight - 20 + "px";
    }
  }, []);

  const onClickEditTitle = () => {
    if (!isEditTitle) setIsEditTitle(true);
  };

  const onBlurEditTitle = () => {
    setIsEditTitle(false);
  };

  const onClickEditDescription = () => {
    if (!isEditDescription) setIsEditDescription(true);
  };

  const onBlurEditDescription = () => {
    setIsEditDescription(false);
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

  const onClickScrollToTop = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setScrollTopDown("down");
  };

  const onClickScrollToBottom = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    setScrollTopDown("top");
  };

  const getScrollPosition = () => {
    if (window !== undefined) {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  };

  const onSubmitForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
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
            type="button"
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
            <S.TextButton type="button">미리보기</S.TextButton>
            <S.TextButton type="button">초기화</S.TextButton>
            <S.ShareButton type="button" isLogin={isLogin}>
              공유
            </S.ShareButton>
          </S.MiddleButtonContainer>
          <S.SaveButton type="submit" isLogin={isLogin}>
            저장
            <S.SaveBubble isLogin={isLogin}>
              로그인 이후 서비스를 완전히 이용할 수 있어요!
            </S.SaveBubble>
          </S.SaveButton>
        </S.RightContainer>
      </S.MenubarWrapper>
      <S.Wrapper>
        {!isEditTitle ? (
          <S.FormTitle onClick={onClickEditTitle}>
            {getValues().formTitle}
          </S.FormTitle>
        ) : (
          <S.FormTitleInput
            defaultValue="설문지1"
            autoFocus
            {...register("formTitle")}
            onBlur={onBlurEditTitle}
          />
        )}
        {!isEditDescription ? (
          <S.FormDescription onClick={onClickEditDescription}>
            {getValues().formDescription}
          </S.FormDescription>
        ) : (
          <S.FormDescriptionInput
            defaultValue="Form Description"
            autoFocus
            {...register("formDescription", {
              onChange: handleResizeHeight,
            })}
            ref={(e) => {
              ref(e);
              textAreaRef.current = e;
            }}
            onBlur={onBlurEditDescription}
          />
        )}

        <S.QuestionWrapper>
          {addQuestion.map((el: { id: string }) => (
            <Question
              questionId={el.id}
              key={el.id}
              onClickDeleteQuestion={onClickDeleteQuestion}
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
              type="button"
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
    </form>
  );
}
