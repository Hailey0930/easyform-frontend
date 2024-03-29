import styled from "@emotion/styled";
import { colors } from "commons/styles/palette";

interface IToggle {
  onClick: () => void;
  isOn: boolean | undefined;
}

export default function Toggle({ onClick, isOn }: IToggle) {
  return (
    <ToggleContainer onClick={onClick}>
      <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
      <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div`
  position: relative;

  > .toggle-container {
    width: 48px;
    height: 24px;
    border-radius: 16px;
    background-color: ${colors.black[600]};
  }
  > .toggle--checked {
    background-color: #2773ff;
    transition: 0.3s;
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${colors.black[1000]};
    box-shadow: 0px 2px 4px rgba(29, 31, 33, 0.2);
    transition: 0.3s;
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.3s;
  }
`;
