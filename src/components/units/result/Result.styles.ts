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

export const SaveButton = styled.div<{ isLogin: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 40px;
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
  width: 359px;
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

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
