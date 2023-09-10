import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors } from "commons/styles/palette";

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
