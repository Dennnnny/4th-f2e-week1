import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Tag from "../components/Tag";
import JoinBtn from "../components/JoinBtn";
import { device } from "../../styles/config";

const FifthCardLayout = styled.div.withConfig({
  componentId: "FifthCardLayout",
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

  .fifth-ending {
    margin: 30vh 0 10vh;

    font-weight: 700;
    font-size: 28px;
    line-height: 125%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.05em;
    color: #ff5136;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function FifthCard({ reference }) {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".fifth-one"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".fifth-one"),
          start: "top center",
          end: "30% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".fifth-two"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: element.querySelector(".fifth-two"),
          start: "top center",
          end: "60% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".fifth-three"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".fifth-three"),
          start: "top center",
          end: "90% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".fifth-ending"),
      {
        opacity: 0,
        scale: 3,
      },
      {
        opacity: 1,
        scale: 1,

        scrollTrigger: {
          trigger: element.querySelector(".fifth-ending"),
          start: "top center",
          endTrigger: ".fifth-ending",
          end: "50% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );
  }, []);

  return (
    <Section className="fifth">
      <FifthCardLayout>
        <HeaderComponent content="重要時程" />

        <ScheduleCard
          className="fifth-one"
          imgConponent={<JoinBtn text="" width={150} height={100} />}
          text="SIGN UP"
          date="10/13 - 11/6"
          description="截止前可修改報名組別"
        />

        <ScheduleCard
          className="fifth-two"
          imgConponent={<img src="/date_start.svg" alt="start flag" />}
          text="START"
          date="10/31 - 11/28"
          description={`10/31(一) UI、團體組開賽
          11/7(一) 前端組開賽`}
        />
        <ScheduleCard
          className="fifth-three"
          imgConponent={<img src="/date_upload.svg" alt="upload cloud" />}
          text="UPLOAD"
          date="10/31 - 11/28"
          description="依賽程登錄作品"
          hint="額外競賽： 主題豐厚獎金等著你"
        />

        <div className="fifth-ending">
          區區修煉 <br />
          已經無法滿足了嗎？
        </div>
      </FifthCardLayout>
    </Section>
  );
}

const ScheduleCardLayout = styled.div.withConfig({
  componentId: "ScheduleCardLayout",
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 20px 0 40px;
  .text {
    font-size: 28px;
    color: #ff5136;
    margin: 12px 0;
  }

  .description {
    color: #a46039;
    margin: 12px 0;
    white-space: pre-line;
    p {
      margin: 0;
    }
    .hint {
      color: #ff5136;
      font-size: 18px;
    }
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function ScheduleCard({
  imgConponent,
  className,
  text,
  date,
  description,
  hint,
}) {
  return (
    <ScheduleCardLayout className={className}>
      <div className="img-area">{imgConponent}</div>
      <div className="text">{text}</div>
      <Tag text={date} background="#007FAB" />
      <div className="description">
        <p>{description}</p>
        <span className="hint">{hint}</span>
      </div>
    </ScheduleCardLayout>
  );
}

// function JoinBtn
