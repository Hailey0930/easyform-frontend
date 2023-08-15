import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const MenubarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 88px;
  padding: 0.885vw 1.25vw;
  border-bottom: 1px solid ${colors.black[800]};

  ${setTabletStyle(css`
    padding: 0.885vw 1.668vw;
    height: 64px;
  `)}
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 148px;
  height: 53px;
`;

export const CategoryTitle = styled.button`
  width: 74px;
  height: 100%;

  font-weight: 500;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[500]};
  padding: 12px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid ${colors.blue[100]};
    color: ${colors.blue[100]};
    font-weight: 600;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 471px;
  height: 40px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[300]};
`;

export const ResponseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 117px;
`;

export const MiddleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 158px;
`;

export const TextButton = styled.button`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[300]};
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const ShareButton = styled.button<{ isLogin: boolean }>`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${(props) => (props.isLogin ? colors.black[300] : colors.black[500])};
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: ${(props) => (props.isLogin ? "pointer" : "default")};
`;

export const SaveButton = styled.button<{ isLogin: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 40px;
  border: transparent;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isLogin ? colors.blue[100] : colors.black[700]};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${(props) => (props.isLogin ? colors.black[1000] : colors.black[500])};
  cursor: ${(props) => (props.isLogin ? "pointer" : "default")};
  position: relative;
`;

export const SaveBubble = styled.div<{ isLogin: boolean }>`
  display: ${(props) => (props.isLogin ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${colors.blue[200]};
  border-radius: 8px;
  width: 410px;
  height: 50px;
  top: 60px;
  right: 0;
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[1000]};

  :after {
    content: "";
    position: absolute;
    top: 8px;
    left: 85%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: ${colors.blue[200]};
    border-top: 0;
    margin-left: -31px;
    margin-top: -23px;
  }
`;

export const Wrapper = styled.div`
  padding: 0 1.667vw;
`;

export const FormTitleInput = styled.input`
  margin-top: 48px;
  margin-bottom: 32px;
  width: fit-content;
  height: max-content;
  font-weight: 600;
  font-size: 4rem;
  line-height: 48px;
  color: ${colors.black[100]};
  border: transparent;
  border-radius: 4px;

  :hover {
    border: 1px solid ${colors.blue[100]};
  }

  :focus {
    outline: 1px solid ${colors.blue[100]};
    border: none;
    padding: 10px 20px;
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[100]};
  }
`;

export const FormDescriptionInput = styled.textarea`
  resize: none;
  width: 59.583vw;
  background-color: ${colors.black[950]};
  color: ${colors.black[200]};
  border: 1px solid ${colors.black[700]};
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  padding: 16px 24px;
  margin-bottom: 32px;

  :hover {
    border: 1px solid ${colors.blue[100]};
  }

  :focus {
    outline: 1px solid ${colors.blue[100]};
    border: none;
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[200]};
  }

  ${setTabletStyle(css`
    width: 100%;
  `)}
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddQuestionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 59.583vw;
  margin-bottom: 70px;

  ${setTabletStyle(css`
    width: 100%;
  `)}
`;

export const AddQuestionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 40px;
  background-color: ${colors.black[950]};
  border: 1px solid ${colors.black[700]};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.blue[100]};
  margin-top: -8px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const ScrollButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  right: 20vw;

  ${setTabletStyle(css`
    right: 1.667vw;
  `)}
`;

export const ScrollButton = styled.button<{ scrollTopDown: string }>`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  background-color: ${colors.black[950]};
  background-image: ${(props) =>
    props.scrollTopDown === "top"
      ? `url("/assets/header/icon_profile_up.png")`
      : `url("/assets/header/icon_profile_down.png")`};
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.35);
  border: transparent;
  cursor: pointer;
`;
