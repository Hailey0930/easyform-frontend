import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 37.5vw;
  height: 31.25vw;
  background-color: ${colors.black[1000]};
  border-radius: 12px;
  position: relative;

  ${setTabletStyle(css`
    width: 50.035vw;
    height: 41.696vw;
  `)}
`;

export const ModalCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 16px;

  ${setTabletStyle(css`
    padding: 10px;
  `)}
`;

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 23px;
  background-color: ${colors.black[800]};
  background-image: url("/assets/create/icon_delete_option.png");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 16px;
  border: transparent;
  cursor: pointer;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100px;
  z-index: 2;

  ${setTabletStyle(css`
    margin-top: 30px;
    height: 100px;
  `)}
`;

export const ContentsTitle = styled.div`
  display: flex;
  justify-content: center;

  height: 29px;
  text-align: center;
  font-weight: 300;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[300]};

  ${setTabletStyle(css`
    height: 22px;
    font-size: 2rem;
  `)}
`;

export const ContentsBoldTitle = styled.div`
  display: flex;
  justify-content: center;

  height: 29px;
  text-align: center;
  font-weight: 700;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};

  ${setTabletStyle(css`
    height: 22px;
    font-size: 2rem;
  `)}
`;

export const FireIcon = styled.div`
  width: 23px;
  height: 29px;
  margin-left: 11px;
  background-image: url("/assets/icon_fire.png");
`;

export const HomeImageWrapper = styled.div`
  width: 70%;
  height: 60%;
  position: absolute;
  bottom: 0;

  ${setTabletStyle(css`
    width: 60%;
    height: 50%;
    z-index: 1;
  `)}
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
`;
