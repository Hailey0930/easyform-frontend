import { useEffect, useRef, useState } from "react";
import * as S from "./FormContainer.styles";
import FormModal from "./FormModal";
import modalClose from "commons/utils/modalClose";
import { IFormContainerProps } from "commons/types/getSurveyList.types";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function FormContainer({ survey }: IFormContainerProps) {
  const [isDisplayFormModal, setIsDisplayFormModal] = useState(false);

  const outSide = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    modalClose(isDisplayFormModal, setIsDisplayFormModal, outSide);
  }, [isDisplayFormModal]);

  const onClickSeeMoreRecent = () => {
    setIsDisplayFormModal(!isDisplayFormModal);
  };

  const today = dayjs();
  const editDate = dayjs(survey.updatedAt);
  const differenceInDays = today.diff(editDate, "day");

  const onClickMoveToDetailSurvey = (id: string) => {
    router.push(`/create/${id}`);
  };

  return (
    <S.FormContainer onClick={() => onClickMoveToDetailSurvey(survey.id)}>
      <S.FormImageWrapper>
        <S.FormImage />
      </S.FormImageWrapper>
      <S.FormInfoWrapper>
        <S.FormInfoContainer>
          {survey.isGetResponse ? (
            <S.FormActiveBadge>Accepting Responses</S.FormActiveBadge>
          ) : (
            <S.FormDisabledBadge>Not Accepting Responses</S.FormDisabledBadge>
          )}
          <S.FormTitle>{survey.title}</S.FormTitle>
          <S.FormEditDate>
            {differenceInDays === 0
              ? "Today Edited"
              : `edited ${differenceInDays}days ago`}
          </S.FormEditDate>
        </S.FormInfoContainer>
        <S.ButtonWrapper>
          <S.FormSeeMoreButton ref={outSide} onClick={onClickSeeMoreRecent} />
          <FormModal
            isDisplayFormModal={isDisplayFormModal}
            setIsDisplayFormModal={setIsDisplayFormModal}
          />
        </S.ButtonWrapper>
      </S.FormInfoWrapper>
    </S.FormContainer>
  );
}
