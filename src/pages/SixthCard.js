import Section from "../components/Section";
import styled from "styled-components";
import { gsap, Power0, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { createRef, useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { device } from "../../styles/config";

const SixthCardLayout = styled.div.withConfig({
  componentId: "SixthCardLayout",
})`
  padding: 0px 20px 80px;
  width: 100vw;
  overflow-x: hidden;

  > div {
    /* width: 100%; */
    /* height: 300px; */
    /* background-color: blue; */
    /* border: 1px solid white; */
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function SixthCard({ reference }) {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".sixth-trophy"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".sixth-trophy"),
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".sixth-one"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: element.querySelector(".sixth-one"),
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".sixth-two"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".sixth-two"),
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    // gsap.fromTo(
    //   element.querySelector(".sixth-three"),
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,

    //     scrollTrigger: {
    //       trigger: element.querySelector(".sixth"),
    //       start: "60% center",
    //       end: "90% center",
    //       scrub: true,
    //       // markers: true,
    //       toggleActions: "play pause resume reverse",
    //     },
    //   }
    // );
  }, []);

  return (
    <Section className="sixth">
      <SixthCardLayout>
        <HeaderComponent content="????????????????????????" />
        {/* <span>??????blablabla</span> */}
        <div className="sixth-trophy">
          <Trophy />
        </div>

        <RuleCard
          className="sixth-one"
          title="????????????"
          description={
            <>
              ????????? ???????????????????????????UI ?????????????????????????????? <br /> ?????????
              ?????????????????????????????????????????????????????????????????? 12/30(???)
              ????????????????????????????????????
            </>
          }
        />
        <RuleCard
          className="sixth-two"
          title="??????"
          description={
            <>
              1. ???????????? ?????????????????????????? <br />
              2. ??????????????? ???????????NTD
              <span className="hint">3,000</span> /??? <br />
              3. ??????????????? ???????????NTD
              <span className="hint">10,000</span> /??? <br />
              4. ?????????????????????????????????
            </>
          }
        />
      </SixthCardLayout>
    </Section>
  );
}

const TrophyLayout = styled.div.withConfig({ componentId: "TrophyLayout" })`
  width: 335px;
  height: 375px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 0;

  img {
    width: 100%;
  }

  img.trophy_bg {
    position: absolute;
    left: 0;
    z-index: -1;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function Trophy({}) {
  const animate = createRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }, 100);
    // tl.duration(10);
    tl.fromTo(animate.current, { rotation: 0 }, { rotation: 90 });
    // gsap.timeline();
  }, []);

  return (
    <TrophyLayout>
      <img src="/award_trophy.svg" />
      <img ref={animate} className="trophy_bg" src="/award_light.svg" />
    </TrophyLayout>
  );
}

const RuleCardLayout = styled.div.withConfig({
  componentId: "RuleCardLayout",
})`
  margin-top: 40px;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #ff5136;
  }
  .description {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.05em;
    color: #007fab;
  }

  span.hint {
    color: #ff5136;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function RuleCard({ title, description, className }) {
  return (
    <RuleCardLayout className={className}>
      <div className="title">{title}</div>
      <p className="description">{description}</p>
    </RuleCardLayout>
  );
}
