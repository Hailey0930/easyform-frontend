import styled from "@emotion/styled";
import { colors } from "commons/styles/palette";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IToastPopUp {
  contents: string;
  isToastOpen: boolean;
  setIsToastOpen: Dispatch<SetStateAction<boolean>>;
  toastMode: "normal" | "warning";
}

export default function ToastPopUp({
  contents,
  isToastOpen,
  setIsToastOpen,
  toastMode,
}: IToastPopUp) {
  useEffect(() => {
    if (isToastOpen) setTimeout(() => setIsToastOpen(false), 2000);
  }, [isToastOpen]);

  return (
    <Container isToastOpen={isToastOpen} toastMode={toastMode}>
      {toastMode === "normal" && <Icon />}
      {contents}
    </Container>
  );
}

const Container = styled.div<{
  isToastOpen: boolean;
  toastMode: "normal" | "warning";
}>`
  display: flex;
  justify-content: ${(props) => props.toastMode === "warning" && "center"};
  align-items: center;
  opacity: ${(props) => (props.isToastOpen ? "100" : "0")};

  width: 320px;
  height: 50px;
  padding: ${(props) =>
    props.toastMode === "normal" ? "16px 18px" : "12px 8px"};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${(props) =>
    props.toastMode === "normal" ? `${colors.blue[200]}` : `#f54d4d`};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  color: ${colors.black[1000]};
  transition: all 0.3s ease-out;
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/assets/icon_toast.png");
  margin-right: 10px;
`;
