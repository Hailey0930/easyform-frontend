import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors } from "commons/styles/palette";
import { fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  padding: 0.833vw 1.25vw;

  ${setTabletStyle(css`
    padding: 0 1.668vw;
  `)}

  ${setMobileStyle(css`
    padding: 0 4.444vw;
  `)}
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 185px;
  border-bottom: 2px solid #f5f4f3;

  ${setTabletStyle(css`
    padding: 32px 0;
  `)}
`;

export const Title = styled.div`
  margin-top: 1.667vw;
  margin-bottom: 33px;
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};

  ${setTabletStyle(css`
    margin-top: 0;
  `)}
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountImageContainer = styled.div`
  width: 52px;
  height: 52px;
  background-color: #aed0ce;
  border: 1px solid ${colors.black[400]};
  border-radius: 50%;
  margin-right: 16px;
`;

export const AccountImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AccountDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

export const DetailIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountEmail = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[100]};
  margin-right: 9.5px;
`;

export const SocialIconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const NickNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NickName = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[300]};
  margin-right: 11px;
`;

export const NickNameInput = styled.input`
  min-width: 192px;
  margin-right: 8px;
  width: fit-content;
  height: 10px;
  padding: 8px;
  border: 1px solid ${colors.black[600]};
  border-radius: 2px;
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[300]};

  :focus {
    outline: 1px solid ${colors.blue[100]};
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[300]};
  }
`;

export const NickNameEditButton = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 4px;
  background-image: url("/assets/profile/icon_check.png");
  border: transparent;
  cursor: pointer;

  :hover {
    background-image: url("/assets/profile/icon_hover_check.png");
  }
`;

export const NickNameCancelButton = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 4px;
  background-image: url("/assets/profile/icon_cancel.png");
  border: transparent;
  cursor: pointer;

  :hover {
    background-image: url("/assets/profile/icon_hover_cancel.png");
  }
`;

export const EditIconWrapper = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const EditIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  color: ${colors.black[200]};
`;

export const LanguageSelect = styled.input`
  width: 22px;
  height: 22px;
  border-radius: 14px;
  border: 1.2px solid ${colors.black[400]};
  margin-right: 12px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 114px;
  margin-top: 32px;
`;

export const withdrawButton = styled.div`
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 17px;
  color: ${colors.black[400]};
  cursor: pointer;
  position: relative;
`;

export const logOutButton = styled.div`
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 17px;
  color: #4a5cff;
  cursor: pointer;
`;

export const withdrawModal = styled.div<{ isModalDisplay: boolean }>`
  display: ${(props) => (props.isModalDisplay ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;

  width: 328px;
  height: 188px;
  padding: 24px;
  position: absolute;
  top: 25px;
  left: 0;
  background-color: ${colors.black[1000]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 4px;
  cursor: default;
`;

export const ModalTitle = styled.div`
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[100]};
`;

export const ModalContents = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 21px;
  color: ${colors.black[300]};
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalCancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 132px;
  height: 40px;
  background-color: ${colors.blue[400]};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.blue[100]};
  cursor: pointer;
`;

export const ModalOKButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 132px;
  height: 40px;
  background-color: ${colors.blue[100]};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[1000]};
  cursor: pointer;
`;
