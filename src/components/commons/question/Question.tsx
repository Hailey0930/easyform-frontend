import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Toggle from "../Toggle";
import * as S from "./Question.styles";
import { IQuestionProps } from "./Question.types";
import { v4 as uuidv4 } from "uuid";
import ToastPopUp from "../ToastPopUP";
import { ISavedState } from "commons/types/Question.types";

export default function Question({
  questionId,
  onClickDeleteQuestion,
  onSaveQuestionValue,
}: IQuestionProps) {
  // NOTE 설문지 제목
  const [title, setTitle] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [questionType, setQuestionType] = useState("Multiple Choice");
  // NOTE 복수 선택
  const [isMultipleChoiceOn, setIsMultipleChoiceOn] = useState(false);
  // NOTE 필수
  const [isNecessaryOn, setIsNecessaryOn] = useState(false);
  // NOTE 설문지 옵션
  const [option, setOption] = useState([{ id: uuidv4(), value: "Option" }]);
  // NOTE 주관식 설문지 내용
  const [paragraphDescription, setParagraphDescription] =
    useState("Form Description");
  const [isToastOpen, setIsToastOpen] = useState(false);
  // NOTE 저장 시 저장되는 설문지 내용들
  const [savedState, setSavedState] = useState<ISavedState>();

  // NOTE 아무런 액션을 하지 않았을 때 첫 Question value 값 넣어서 자동저장
  useEffect(() => {
    console.log("Saved state:", savedState);

    onSaveQuestionValue({
      title,
      questionType,
      isMultipleChoiceOn,
      isNecessaryOn,
      option,
    });
  }, [savedState]);

  const initialQuestion = {
    questionType: "Multiple Choice",
    isMultipleChoiceOn: false,
    isNecessaryOn: false,
    option: [{ id: uuidv4(), value: "Option" }],
    paragraphDescription: "",
  };

  const onClickEditButton = () => {
    setIsEditMode(true);
  };

  const onClickSaveButton = () => {
    if (isMultipleChoiceOn && option.length === 1) {
      setIsToastOpen(true);
    } else {
      setIsEditMode(false);

      const newMultipleValue = {
        title,
        questionType,
        isMultipleChoiceOn,
        isNecessaryOn,
        option,
      };

      const newParagraphValue = {
        title,
        questionType,
        isMultipleChoiceOn,
        isNecessaryOn,
        paragraphDescription,
      };

      if (questionType === "Multiple Choice") {
        setSavedState(newMultipleValue);
        onSaveQuestionValue(newMultipleValue);
      } else if (questionType === "Paragraph") {
        setSavedState(newParagraphValue);
        onSaveQuestionValue(newParagraphValue);
      }
    }
  };

  // NOTE 취소 눌렀을 때, 저장이 한 번도 되지 않았던 경우에만 초기화시키기
  const onClickCancelButton = () => {
    setIsEditMode(false);

    if (questionType === "Multiple Choice") {
      if (
        !title &&
        !isMultipleChoiceOn &&
        !isNecessaryOn &&
        option[0].value !== "Option"
      ) {
        setQuestionType(initialQuestion.questionType);
        setIsMultipleChoiceOn(initialQuestion.isMultipleChoiceOn);
        setIsNecessaryOn(initialQuestion.isNecessaryOn);
        setOption(initialQuestion.option);
      }
    } else if (questionType === "Paragraph") {
      if (
        !title &&
        !isMultipleChoiceOn &&
        !isNecessaryOn &&
        paragraphDescription !== "Paragraph"
      ) {
        setQuestionType(initialQuestion.questionType);
        setIsMultipleChoiceOn(initialQuestion.isMultipleChoiceOn);
        setIsNecessaryOn(initialQuestion.isNecessaryOn);
        setOption(initialQuestion.option);
      }
    }
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOptionChange = (id: string, newValue: string) => {
    setOption((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, value: newValue } : option
      )
    );
  };

  const handleParagraphDescriptionChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setParagraphDescription(e.target.value);
  };

  const onClickDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickQuestionType = (e: MouseEvent<HTMLButtonElement>) => {
    setQuestionType((e.target as HTMLButtonElement).value);
    setIsDropdownOpen(false);
  };

  const onClickAddOption = () => {
    const newAddOption = {
      id: uuidv4(),
      value: "Option",
    };
    setOption([...option, newAddOption]);
  };

  const onClickDeleteOption = (id: string) => {
    if (option.length > 1)
      setOption(option.filter((option: { id: string }) => option.id !== id));
  };

  const onClickMultipleChoiceToggle = () => {
    setIsMultipleChoiceOn(!isMultipleChoiceOn);
  };

  const onClickNecessaryToggle = () => {
    setIsNecessaryOn(!isNecessaryOn);
  };

  return (
    <S.QuestionContainer>
      <S.QuestionTopWrapper>
        <S.QuestionTitleWrapper>
          {isEditMode ? (
            <S.QuestionTitleInput
              defaultValue={title ? title : "Untitled Question"}
              autoFocus
              onChange={handleTitle}
            />
          ) : (
            <S.QuestionTitle>
              {title ? title : "Untitled Question"}
            </S.QuestionTitle>
          )}
          {isEditMode && (
            <S.AddImageWrapper>
              <S.AddImage src="/assets/create/icon_image.png" />
            </S.AddImageWrapper>
          )}
        </S.QuestionTitleWrapper>
        {isEditMode && (
          <S.DropdownWrapper onClick={onClickDropdown}>
            <S.DropdownBox isDropdownOpen={isDropdownOpen}>
              {questionType}
              <S.DropdownArrow isDropdownOpen={isDropdownOpen} />
            </S.DropdownBox>
            <S.DropdownSelectWrapper isDropdownOpen={isDropdownOpen}>
              <S.DropdownSelect
                value="Multiple Choice"
                onClick={onClickQuestionType}
              >
                Multiple Choice
              </S.DropdownSelect>
              <S.DropdownSelect value="Paragraph" onClick={onClickQuestionType}>
                Paragraph
              </S.DropdownSelect>
            </S.DropdownSelectWrapper>
          </S.DropdownWrapper>
        )}
      </S.QuestionTopWrapper>

      {questionType === "Multiple Choice" ? (
        <S.QuestionMiddleWrapper>
          {option.map((el) => (
            <S.SelectWrapper key={el.id}>
              <S.RadioOptionWrapper>
                <S.Radio
                  type={isMultipleChoiceOn ? "checkbox" : "radio"}
                  name="option"
                />
                {isEditMode ? (
                  <>
                    <S.RadioTitleInput
                      defaultValue={el.value}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleOptionChange(el.id, e.target.value)
                      }
                    />
                    <S.AddImageWrapper>
                      <S.AddImage src="/assets/create/icon_image.png" />
                    </S.AddImageWrapper>
                    {option.length >= 2 && (
                      <S.DeleteOptionWrapper
                        onClick={() => onClickDeleteOption(el.id)}
                      >
                        <S.DeleteOption src="/assets/create/icon_delete_option.png" />
                      </S.DeleteOptionWrapper>
                    )}
                  </>
                ) : (
                  <S.RadioTitle>{el.value}</S.RadioTitle>
                )}
              </S.RadioOptionWrapper>
            </S.SelectWrapper>
          ))}
          {isEditMode && (
            <S.AddOptionButton onClick={onClickAddOption}>
              옵션 추가
            </S.AddOptionButton>
          )}
        </S.QuestionMiddleWrapper>
      ) : (
        <S.ParagraphWrapper isEditMode={isEditMode}>
          {!isEditMode ? (
            paragraphDescription
          ) : (
            <S.ParagraphInput
              defaultValue={paragraphDescription}
              onChange={handleParagraphDescriptionChange}
            />
          )}
        </S.ParagraphWrapper>
      )}

      <S.QuestionBottomWrapper
        isEditMode={isEditMode}
        questionType={questionType}
      >
        {!isEditMode ? (
          <>
            <S.IconButton onClick={onClickEditButton}>
              <S.ButtonIconWrapper>
                <S.ButtonIcon src="/assets/create/icon_edit.png" />
              </S.ButtonIconWrapper>
              수정
            </S.IconButton>
            <S.IconButton>
              <S.ButtonIconWrapper>
                <S.ButtonIcon src="/assets/create/icon_copy.png" />
              </S.ButtonIconWrapper>
              복제
            </S.IconButton>
            <S.IconButton onClick={() => onClickDeleteQuestion(questionId)}>
              <S.ButtonIconWrapper>
                <S.ButtonIcon src="/assets/create/icon_delete.png" />
              </S.ButtonIconWrapper>
              삭제
            </S.IconButton>
          </>
        ) : (
          <>
            <S.EditModeToggleWrapper questionType={questionType}>
              {questionType === "Multiple Choice" && (
                <>
                  <S.ToggleTitle>복수선택</S.ToggleTitle>
                  <Toggle
                    onClick={onClickMultipleChoiceToggle}
                    isOn={isMultipleChoiceOn}
                  />
                </>
              )}
              <S.ToggleTitle>필수</S.ToggleTitle>
              <Toggle onClick={onClickNecessaryToggle} isOn={isNecessaryOn} />
            </S.EditModeToggleWrapper>
            <S.EditModeButtonWrapper>
              <S.IconButton>
                <S.ButtonIconWrapper>
                  <S.ButtonIcon src="/assets/create/icon_copy.png" />
                </S.ButtonIconWrapper>
                복제
              </S.IconButton>
              <S.IconButton onClick={() => onClickDeleteQuestion(questionId)}>
                <S.ButtonIconWrapper>
                  <S.ButtonIcon src="/assets/create/icon_delete.png" />
                </S.ButtonIconWrapper>
                삭제
              </S.IconButton>
              <S.BoundaryLine />
              <S.SaveIconButton onClick={onClickSaveButton}>
                <S.ButtonIconWrapper>
                  <S.ButtonIcon src="/assets/create/icon_save.png" />
                </S.ButtonIconWrapper>
                저장
              </S.SaveIconButton>
              <S.IconButton onClick={onClickCancelButton}>
                <S.CancelIconWrapper>
                  <S.ButtonIcon src="/assets/create/icon_delete_option.png" />
                </S.CancelIconWrapper>
                취소
              </S.IconButton>
            </S.EditModeButtonWrapper>
          </>
        )}
      </S.QuestionBottomWrapper>
      <ToastPopUp
        isToastOpen={isToastOpen}
        setIsToastOpen={setIsToastOpen}
        contents="복수선택 시 2개 이상의 답변을 생성해 주세요."
        toastMode="warning"
      />
    </S.QuestionContainer>
  );
}
