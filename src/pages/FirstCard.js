import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef } from "react";
import Tag from "../components/Tag";
import { device } from "../../styles/config";
// import Users from "../../public/users.svg";
const FirstCardLayout = styled.div.withConfig({
  componentId: "FirstCardLayout",
})`
  padding: 90px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 15px;
  }

  > span {
    position: absolute;
    /* transform: translateY(50%); */

    &.cloud1 {
      left: 0;
      bottom: 45%;
      width: 100%;
    }

    &.cloud2 {
      right: 0;
      bottom: 45%;
    }

    &.traffic_light {
      right: 0;
      bottom: 30%;

      display: flex;
      flex-direction: column;

      > span {
        text-align: center;
        color: #ff5136;
      }

      svg {
        position: absolute;
        z-index: -1;
        top: 33px;
        left: 15px;
      }
      /* bottom: ; */
    }
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function FirstCard({ reference }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".ready"),
      {
        // x: -100,
        text: "READY?",
      },
      {
        // x: 0,
        text: "GO!",
        scrollTrigger: {
          trigger: element.querySelector(".traffic_light"),
          start: "top center",
          end: "top center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".red_light"),
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".traffic_light"),
          start: "-100% center",
          end: "-100% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".yellow_light"),
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".traffic_light"),
          start: "-50% center",
          end: "-50% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".green_light"),
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".traffic_light"),
          start: "0% center",
          end: "0% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );
  }, []);

  return (
    <Section className="first">
      <FirstCardLayout>
        <img src="/index_logo.svg" alt="index" />
        <Tag text="互動式網頁設計" background="#FF5136" />
        <TeamsInfo number={110} team="前端工程師" />
        <TeamsInfo number={200} team="UI設計師" />
        <TeamsInfo number={69} team="團體組" />

        <span className="cloud1">
          <img src="/cloud1.svg" alt="cloud on left" />
        </span>
        <span className="cloud2">
          <img src="/cloud2.svg" alt="cloud on right" />
        </span>
        <span className="traffic_light">
          <span className="ready"></span>
          <>
            <img src="/traffic_light.svg" alt="traffic light on right" />
            <svg className="light" height="20" width="80">
              <circle cx="10" cy="10" r="11" fill="red" className="red_light" />
              <circle
                cx="38"
                cy="10"
                r="11"
                fill="yellow"
                className="yellow_light"
              />
              <circle
                cx="67"
                cy="11"
                r="11"
                fill="green"
                className="green_light"
              />
            </svg>
          </>
        </span>
      </FirstCardLayout>
    </Section>
  );
}

const TeamsInfoLayout = styled.div.withConfig({
  componentId: "TeamsInfoLayout",
})`
  display: flex;
  flex-direction: column;
  color: #007fab;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 10px;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function TeamsInfo({ number = 0, team = "" }) {
  return (
    <TeamsInfoLayout>
      <p>{team}</p>
      <Tag background={"#007FAB"} text={number} img={"/users.svg"} />
    </TeamsInfoLayout>
  );
}
