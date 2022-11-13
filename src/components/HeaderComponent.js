import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { createRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../styles/config";

const HeaderComponentLayout = styled.div.withConfig({
  componentId: "HeaderComponentLayout",
})`
  margin: 30px -20px;
  h2 {
    border: solid 3px #007fab;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    -webkit-transform: skewX(-2deg);
    -ms-transform: skewX(-2deg);
    transform: skewX(-3deg);
    padding: 10px 20px;
    background-color: #ffe2a9;
    text-align: center;
    color: #007fab;
    margin: 0;
  }

  .description {
    color: #a46039;
    text-align: center;
    width: 100%;
    display: block;
    margin-top: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    white-space: break-spaces;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function HeaderComponent({ content, descriptions }) {
  gsap.registerPlugin(ScrollTrigger);
  const component = createRef();
  useEffect(() => {
    const element = component.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element,
          start: "-100px center",
          end: "50px center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <HeaderComponentLayout className="header-component" ref={component}>
      <h2>{content}</h2>
      <span className="description">{descriptions}</span>
    </HeaderComponentLayout>
  );
}
