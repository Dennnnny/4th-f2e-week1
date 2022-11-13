import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { device } from "../../styles/config";

const ThirdCardLayout = styled.div.withConfig({
  componentId: "ThirdCardLayout",
})`
  padding: 0px 20px;
  width: 100vw;
  overflow-x: hidden;

  > div {
    /* background-color: blue; */
    /* width: 100%;
    height: 300px;
    border: 1px solid white;
    display: flex;
    justify-content: space-evenly; */

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    > img {
      width: 50%;
    }
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function ThirdCard({ reference }) {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".third-one"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".third"),
          start: "top center",
          end: "30% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".third-two"),
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".third"),
          start: "30% center",
          end: "60% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".third-three"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: element.querySelector(".third"),
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
    <Section className="third">
      <ThirdCardLayout>
        <HeaderComponent
          content="本屆主題：互動式網頁設計？"
          descriptions="以下兩個角色進行攜手合作"
        />

        <CharacterCard
          className="third-one"
          img="/dog.svg"
          character="前端工程師"
        />
        <CharacterCard
          className="third-two"
          img="/cat.svg"
          character="UI設計師"
        />
        <CharacterCard
          className="third-three"
          img="/pig.svg"
          character="團體組(UI+前端)"
        />
      </ThirdCardLayout>
    </Section>
  );
}

const CharacterCardLayout = styled.div.withConfig({
  componentId: "CharacterCardLayout",
})`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 40px 0;

  img {
    width: 100%;
  }

  > .btn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    img {
      width: 110px;
    }

    span {
      color: #007fab;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      text-align: center;
      letter-spacing: 0.05em;

      margin-top: 16px;
    }
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function CharacterCard({ img = "", character = "", className }) {
  return (
    <CharacterCardLayout className={className}>
      <img src={img} alt="character" />
      <div className="btn">
        <img src="/btn_join.png" alt="btn" />
        <span>{character}</span>
      </div>
    </CharacterCardLayout>
  );
}
