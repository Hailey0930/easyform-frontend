import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import * as S from "./ShareModal.styles";
import ToastPopUp from "../ToastPopUP";

interface IShareModalProps {
  setIsShareModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ShareModal({ setIsShareModalOpen }: IShareModalProps) {
  const [tabName, setTabName] = useState("url");
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const [selected, setSelected] = useState("응답 링크");
  const [isResponseToastOpen, setIsResponseToastOpen] = useState(false);
  const [isAdministratorToastOpen, setIsAdministratorToastOpen] =
    useState(false);

  const onClickTab = (e: MouseEvent<HTMLButtonElement>) => {
    setTabName((e.target as HTMLButtonElement).value);
  };

  const onClickSelectBox = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  };

  const selectedOption = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected((e.target as HTMLButtonElement).value);
  };

  const onClickResponseCopyButton = () => {
    setIsResponseToastOpen(true);
  };

  const onClickAdministratorCopyButton = () => {
    setIsAdministratorToastOpen(true);
  };

  const onClickCancelButton = () => {
    setIsShareModalOpen(false);
  };

  // NOTE 추후 이메일 공유 기능 추가 필요
  const onClickConfirmButton = () => {
    setIsShareModalOpen(false);
  };

  return (
    <>
      <S.ModalContainer>
        <S.ModalTitle>설문지 공유</S.ModalTitle>
        <S.TabContainer>
          <S.TabWrapper>
            <S.TabButton
              value="url"
              onClick={onClickTab}
              className={tabName === "url" ? "active" : ""}
            >
              URL
            </S.TabButton>
            <S.TabButton
              value="email"
              onClick={onClickTab}
              className={tabName === "email" ? "active" : ""}
            >
              이메일 공유
            </S.TabButton>
          </S.TabWrapper>
        </S.TabContainer>

        {tabName === "url" && (
          <S.ContentsContainer>
            <S.TitleWrapper>
              <S.ContentsTitle>응답 링크</S.ContentsTitle>
              <S.ContentsDetail>
                설문조사 응답을 할 수 있습니다.
              </S.ContentsDetail>
            </S.TitleWrapper>
            <S.URLContainer>
              <S.URLBox></S.URLBox>
              <S.URLCopyButton onClick={onClickResponseCopyButton}>
                복사
              </S.URLCopyButton>
            </S.URLContainer>
            <S.TitleWrapper>
              <S.ContentsTitle>관리자 링크</S.ContentsTitle>
              <S.ContentsDetail>
                관리자 링크를 받은 사용자는 수정/결과 확인이 가능합니다.
              </S.ContentsDetail>
            </S.TitleWrapper>
            <S.URLContainer>
              <S.URLBox></S.URLBox>
              <S.URLCopyButton onClick={onClickAdministratorCopyButton}>
                복사
              </S.URLCopyButton>
            </S.URLContainer>
            <S.PasswordTitle>관리자 링크 비밀번호</S.PasswordTitle>
            <S.PasswordContainer>
              <S.PasswordBox></S.PasswordBox>
              <S.URLCopyButton>복사</S.URLCopyButton>
            </S.PasswordContainer>
          </S.ContentsContainer>
        )}

        {tabName === "email" && (
          <S.ContentsContainer>
            <S.SelectBox onClick={onClickSelectBox}>
              {selected}
              <S.SelectBoxIcon isSelectBoxOpen={isSelectBoxOpen} />
              <S.SelectOptionContainer isSelectBoxOpen={isSelectBoxOpen}>
                <S.SelectOption value="응답 링크" onClick={selectedOption}>
                  응답 링크
                </S.SelectOption>
                <S.SelectOption value="관리자 링크" onClick={selectedOption}>
                  관리자 링크
                </S.SelectOption>
              </S.SelectOptionContainer>
            </S.SelectBox>
            <S.ContentsTitle>이메일</S.ContentsTitle>
            <S.EmailTabBox></S.EmailTabBox>
            <S.ContentsTitle>제목</S.ContentsTitle>
            <S.EmailTabBox></S.EmailTabBox>
            <S.ContentsTitle>메시지</S.ContentsTitle>
            <S.EmailTabBox></S.EmailTabBox>
          </S.ContentsContainer>
        )}

        <S.BottomContainer>
          <S.CancelButton onClick={onClickCancelButton}>취소</S.CancelButton>
          <S.ConfirmButton onClick={onClickConfirmButton}>
            {tabName === "url" ? "확인" : "보내기"}
          </S.ConfirmButton>
        </S.BottomContainer>
      </S.ModalContainer>

      <ToastPopUp
        isToastOpen={isResponseToastOpen}
        setIsToastOpen={setIsResponseToastOpen}
        contents="응답 링크가 복사되었습니다."
        toastMode="normal"
      />
      <ToastPopUp
        isToastOpen={isAdministratorToastOpen}
        setIsToastOpen={setIsAdministratorToastOpen}
        contents="관리자 링크가 복사되었습니다."
        toastMode="normal"
      />
    </>
  );
}
