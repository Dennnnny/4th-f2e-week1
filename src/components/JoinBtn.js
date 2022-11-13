import styled from "styled-components";
import { device } from "../../styles/config";

const JoinBtnLAyout = styled.div.withConfig({ componentId: "JoinBtnLayout" })`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div.text {
    font-family: "Gen Jyuu Gothic P";
    color: #007fab;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
  }

  img.hand {
    width: ${({ width }) => `${width / 2 || 20}px`};
    height: ${({ height }) => `${height || 25}px`};
  }

  > div.btn {
    background-image: url("/btn_join.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    width: ${({ width }) => `${width || 40}px`};
    height: ${({ height }) => `${height || 25}px`};
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function JoinBtn({
  text = "JOIN",
  showHand = true,
  width,
  height,
}) {
  return (
    <JoinBtnLAyout width={width} height={height}>
      <div className="text">{text}</div>
      <img className="hand" src="/btn_joinHand.gif" alt="hands" />

      <div className="btn" />
    </JoinBtnLAyout>
  );
}
