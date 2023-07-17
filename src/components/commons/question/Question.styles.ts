import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 59.583vw;
  padding: 24px 32px;
  background-color: ${colors.black[950]};
  border: 1px solid ${colors.black[700]};
  box-shadow: 0px 4px 16px rgba(86, 86, 86, 0.2);
  border-radius: 4px;
  margin-bottom: 24px;

  ${setTabletStyle(css`
    width: 100%;
  `)}
`;

export const QuestionTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 61px;
  margin-bottom: 32px;
`;

export const QuestionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 44.167vw;

  ${setTabletStyle(css`
    width: 58.93vw;
  `)}
`;

export const QuestionTitleInput = styled.input`
  width: 87%;
  height: 15px;
  border: 1px solid ${colors.black[500]};
  border-radius: 4px;
  padding: 16px 24px;
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};

  :focus {
    outline: 1px solid ${colors.blue[100]};
    border: transparent;
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[100]};
  }

  ${setTabletStyle(css`
    width: 83%;
  `)}
`;

export const QuestionTitle = styled.div`
  width: 87%;
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};
`;

export const AddImageWrapper = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const AddImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const DropdownWrapper = styled.div`
  width: 171px;
  position: relative;
  cursor: pointer;
`;

export const DropdownBox = styled.div<{ isDropdownOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 171px;
  height: 40px;
  padding: 10.5px 15px;
  border: ${(props) =>
    props.isDropdownOpen
      ? `1px solid ${colors.blue[200]}`
      : `1px solid ${colors.blue[400]}`};
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};

  :hover {
    border: 1px solid ${colors.blue[200]};
  }
`;

export const DropdownArrow = styled.div<{ isDropdownOpen: boolean }>`
  width: 15px;
  height: 10px;
  background-image: ${(props) =>
    props.isDropdownOpen
      ? `url("/assets/header/icon_profile_up.png")`
      : `url("/assets/header/icon_profile_down.png")`};
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 10px;
`;

export const DropdownSelectWrapper = styled.div<{ isDropdownOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isDropdownOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  width: 171px;
  height: 80px;
  top: 40px;
`;

export const DropdownSelect = styled.button`
  width: 100%;
  height: 40px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};
  padding: 10.5px 15px;
  border: none;
  background-color: transparent;
  text-align: start;
  cursor: pointer;

  :hover {
    background-color: #f6f7f9;
  }
`;

export const QuestionMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

export const RadioOptionWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 90%;
`;

export const Radio = styled.input`
  width: 22px;
  height: 22px;
  border: 1.2px solid ${colors.blue[400]};
  border-radius: 14px;
  margin-right: 12px;
`;

export const RadioTitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  color: ${colors.black[200]};
`;

export const RadioTitleInput = styled.input`
  width: 35.052vw;
  height: 27px;
  padding: 8px;
  margin-right: 37px;
  border: 1px solid ${colors.black[600]};
  border-radius: 2px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};

  :focus {
    outline: 1px solid ${colors.blue[100]};
    border: transparent;
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[200]};
  }

  ${setTabletStyle(css`
    width: 46.769vw;
  `)}
`;

export const DeleteOptionWrapper = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 26px;
  cursor: pointer;
`;

export const DeleteOption = styled.img`
  width: 100%;
  height: 100%;
`;

export const AddOptionButton = styled.div`
  width: 60px;
  margin-top: -10px;
  margin-left: 40px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.blue[100]};
  cursor: pointer;
`;

export const ParagraphWrapper = styled.div<{ isEditMode: boolean }>`
  width: 100%;
  background-color: ${colors.black[900]};
  border-radius: 4px;
  border: ${(props) =>
    props.isEditMode ? `1px solid ${colors.blue[100]}` : "none"};

  padding: 16px 24px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  color: ${colors.black[500]};
`;

export const ParagraphInput = styled.input`
  width: 100%;
  height: 21px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  color: ${colors.black[500]};
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[500]};
  }
`;

export const QuestionBottomWrapper = styled.div<{
  questionType: string;
  isEditMode: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${(props) => (props.isEditMode ? "100%" : "254px")};
  height: 24px;
  margin-top: 32px;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 19px;
  border: transparent;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 19px;
  color: ${colors.black[200]};
  cursor: pointer;
`;

export const SaveIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 19px;
  border: transparent;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 19px;
  color: ${colors.blue[100]};
  cursor: pointer;
`;

export const ButtonIconWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const CancelIconWrapper = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

export const BoundaryLine = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${colors.black[700]};
`;

export const ToggleTitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};
`;

export const EditModeToggleWrapper = styled.div<{ questionType: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${(props) =>
    props.questionType === "Multiple Choice" ? "214px" : "85px"};
`;

export const EditModeButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 344px;
`;
