import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { device } from "../../styles/config";

const SecondCardLayout = styled.div.withConfig({
  componentId: "SecondCardLayout",
})`
  padding: 0px 20px;
  width: 100vw;
  overflow-x: hidden;
  margin-bottom: 70px;

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function SecondCard({ reference }) {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".one"),
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".second"),
          start: "top center",
          end: "30% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".two"),
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".second"),
          start: "30% center",
          end: "60% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".three"),
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".second"),
          start: "60% center",
          end: "90% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    // gsap.fromTo(
    //   element.querySelector(".second > div > .header-component"),
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: element.querySelector(".second"),
    //       start: "-50px center",
    //       end: "50px center",
    //       scrub: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <Section className="second">
      <SecondCardLayout>
        <HeaderComponent content="你是否也有以下困擾？" />
        <Card
          className="one"
          title="羨慕別人的酷酷網頁動畫？"
          img="/question_1.svg"
        />
        <Card
          className="two"
          title="滿足不了同事的許願？"
          img="/question_2.svg"
        />
        <Card
          className="three"
          title="動畫技能樹太雜無從下手？"
          img="/question_3.svg"
        />
      </SecondCardLayout>
    </Section>
  );
}

const CardLayout = styled.div.withConfig({ componentId: "CardLayout" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px 0;

  .title {
    color: #ff5136;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
  }

  img {
    width: 335px;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function Card({ title = "", img, className }) {
  return (
    <CardLayout className={className}>
      <div className="title">{title}</div>
      <img src={img} alt="card-img" />
    </CardLayout>
  );
}
