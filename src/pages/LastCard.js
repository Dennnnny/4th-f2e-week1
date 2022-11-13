import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import JoinBtn from "../components/JoinBtn";

const LastCardLayout = styled.div.withConfig({
  componentId: "LastCardLayout",
})`
  padding: 30% 0 80px;
  width: 100vw;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  .last-one {
    margin-bottom: 20px;
  }

  .sign-in {
    font-weight: 700;
    font-size: 28px;
    line-height: 125%;
    letter-spacing: 0.05em;
    color: #ff5136;
  }
`;

export default function LastCard({ reference }) {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".last-one"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".last"),
          start: "top center",
          end: "30% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".last-two"),
      {
        opacity: 0,
      },
      {
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".last"),
          start: "30% center",
          end: "40% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    // gsap.fromTo(
    //   element.querySelector(".last-three"),
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,

    //     scrollTrigger: {
    //       trigger: element.querySelector(".last"),
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
    <Section className="last">
      <LastCardLayout>
        <div className="last-one">
          <img src="/index_logo.svg" alt="index" />
        </div>
        <div className="last-two">
          <JoinBtn width={100} height={75} text="" />
          <div className="sign-in">立即報名</div>
        </div>
      </LastCardLayout>
    </Section>
  );
}
