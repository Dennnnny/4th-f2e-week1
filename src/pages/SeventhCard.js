import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Tag from "../components/Tag";
import { device } from "../../styles/config";

const SeventhCardLayout = styled.div.withConfig({
  componentId: "SeventhCardLayout",
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

export default function SeventhCard({ reference }) {
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".seventh-one"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: element.querySelector(".seventh"),
          start: "top center",
          end: "30% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".seventh-two"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".seventh"),
          start: "30% center",
          end: "60% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".seventh-three"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".seventh"),
          start: "60% center",
          end: "90% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );
  }, []);

  return (
    <Section className="seventh">
      <SeventhCardLayout>
        <HeaderComponent content="贊助單位" />
        {/* <span>以下blablabla</span> */}

        <SponsorCard
          className="seventh-one"
          img="/logo_sponsor_0.svg"
          tag="#版塊設計"
        />
        <SponsorCard
          className="seventh-two"
          img="/logo_sponsor_1.svg"
          tag="#鈦坦科技"
        />
        <SponsorCard
          className="seventh-three"
          img="/logo_sponsor_2.svg"
          tag="#凱鈿科技"
        />
      </SeventhCardLayout>
    </Section>
  );
}

const SponsorCardLayout = styled.div.withConfig({
  componentId: "SponsorCardLayout",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  div.img-area {
    border: 5px solid #007fab;
    background-color: white;
    width: max-content;
    box-sizing: border-box;
    border-radius: 30px;
    /* border-width: 6px; */
    border-bottom-width: 8px;
    border-right-width: 8px;
    margin-bottom: 16px;

    img {
      width: 200px;
      height: 200px;
    }
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function SponsorCard({ className, img, tag }) {
  return (
    <SponsorCardLayout className={className}>
      <div className="img-area">
        <img src={img} alt="sponsor" />
      </div>
      <Tag text={tag} type="secondary" color="#A46039" />
    </SponsorCardLayout>
  );
}
