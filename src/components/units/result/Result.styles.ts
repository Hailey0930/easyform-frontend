import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 48px 1.6667vw 69px 1.6667vw;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 4rem;
  line-height: 48px;
  color: ${colors.black[100]};
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const CategoryTab = styled.button`
  width: 139px;
  height: 53px;

  padding: 12px 16px;
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[500]};
  border: none;
  background-color: transparent;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid ${colors.blue[100]};
    color: ${colors.blue[100]};
    font-weight: 600;
  }
`;

export const IndividualMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 59.583vw;
  height: 40px;
  margin-bottom: 32px;

  ${setTabletStyle(css`
    width: 79.5vw;
  `)}
`;

export const ResponseMoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 358px;
`;

export const PreviousButton = styled.button`
  width: 115px;
  height: 40px;

  padding: 0px 36px;
  background-color: transparent;
  background-image: url("/assets/icon_previous.png");
  background-repeat: no-repeat;
  background-position-x: 15px;
  background-position-y: center;
  border: 1px solid #c1c1c1;
  border-radius: 2px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: #242424;
  cursor: pointer;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 29px;
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};
`;

export const CurrentPage = styled.div`
  height: 100%;
  padding: 0 12px;
  margin-right: 8px;
  border-bottom: 1px solid ${colors.black[500]};
`;

export const NextButton = styled.button`
  width: 87px;
  height: 40px;

  padding-left: 18px;
  text-align: left;
  background-color: transparent;
  background-image: url("/assets/icon_next.png");
  background-repeat: no-repeat;
  background-position-x: 65px;
  background-position-y: center;
  border: 1px solid #c1c1c1;
  border-radius: 2px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: #242424;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: #f54d4d;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const RemoveModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 328px;
  height: 188px;
  padding: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.black[1000]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 4px;
`;

export const ModalTitle = styled.div`
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[100]};
  margin-bottom: 10px;
`;

export const ModalContents = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 21px;
  color: ${colors.black[300]};
  margin-bottom: 27px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ModalCancelButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: ${colors.blue[400]};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.blue[100]};
  cursor: pointer;
`;

export const ModalConfirmButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: ${colors.blue[100]};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[1000]};
  cursor: pointer;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
