import { MouseEvent, useState } from "react";
import Toggle from "../Toggle";
import * as S from "./Question.styles";
import { IQuestionProps } from "./Question.types";
import { v4 as uuidv4 } from "uuid";
import ToastPopUp from "../ToastPopUP";

export default function Question({
  questionId,
  onClickDeleteQuestion,
}: IQuestionProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [questionType, setQuestionType] = useState("Multiple Choice");
  const [isMultipleChoiceOn, setIsMultipleChoiceOn] = useState(false);
  const [isNecessaryOn, setIsNecessaryOn] = useState(false);
  const [option, setOption] = useState([{ id: uuidv4() }]);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const initialQuestion = {
    questionType: "Multiple Choice",
    isMultipleChoiceOn: false,
    isNecessaryOn: false,
    option: [{ id: uuidv4() }],
  };

  const onClickEditButton = () => {
    setIsEditMode(true);
  };

  const onClickSaveButton = () => {
    if (isMultipleChoiceOn && option.length === 1) {
      setIsToastOpen(true);
    } else {
      setIsEditMode(false);
    }
  };

  const onClickCancelButton = () => {
    setIsEditMode(false);
    setQuestionType(initialQuestion.questionType);
    setIsMultipleChoiceOn(initialQuestion.isMultipleChoiceOn);
    setIsNecessaryOn(initialQuestion.isNecessaryOn);
    setOption(initialQuestion.option);
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
            <S.QuestionTitleInput defaultValue="Untitled Question" autoFocus />
          ) : (
            <S.QuestionTitle>Untitled Question</S.QuestionTitle>
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
          {option.map((el: { id: string }) => (
            <S.SelectWrapper key={el.id}>
              <S.RadioOptionWrapper>
                <S.Radio
                  type={isMultipleChoiceOn ? "checkbox" : "radio"}
                  name="option"
                />
                {isEditMode ? (
                  <>
                    <S.RadioTitleInput defaultValue="Option" />
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
                  <S.RadioTitle>Option</S.RadioTitle>
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
            "Form Description"
          ) : (
            <S.ParagraphInput defaultValue="Form Description" />
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
