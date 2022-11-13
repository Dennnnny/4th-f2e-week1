import Section from "../components/Section";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Tag from "../components/Tag";
import { device } from "../../styles/config";

const FourthCardLayout = styled.div.withConfig({
  componentId: "FourthCardLayout",
})`
  padding: 0px 20px 80px;
  width: 100vw;
  overflow-x: hidden;

  > div {
    /* width: 100%;
    height: 300px;
    border: 1px solid white; */
    /* background-color: blue; */
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

const fourthCardConfig = [
  {
    img: "/week_1.svg",
    title: "The F2E 活動網站設計",
    tags: ["Parallax Scrolling", "#版塊設計"],
    link: "/",
    className: "fourth-one",
  },
  {
    img: "/week_2.svg",
    title: "今晚，我想來點點簽",
    tags: ["Canvas", "#凱鈿行動科技"],
    link: "/",
    className: "fourth-two",
  },
  {
    img: "/week_3.svg",
    title: "Scrum 新手村",
    tags: ["JS draggable", "#鈦坦科技"],
    link: "/",
    className: "fourth-three",
  },
];

export default function FourthCard({ reference }) {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = reference.current;

    gsap.fromTo(
      element.querySelector(".fourth-one"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: element.querySelector(".fourth"),
          start: "top center",
          end: "30% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".fourth-two"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: element.querySelector(".fourth"),
          start: "30% center",
          end: "60% center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".fourth-three"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: element.querySelector(".fourth"),
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
    <Section className="fourth">
      <FourthCardLayout>
        <HeaderComponent
          content="年度最強合作，三大主題來襲"
          descriptions={`各路廠商強強聯手\n共同設計出接地氣的網頁互動挑戰關卡`}
        />

        {fourthCardConfig.map((item, index) => (
          <ThemeCard
            className={item.className}
            key={index}
            img={item.img}
            index={index}
            title={item.title}
            tags={item.tags}
            link={item.link}
          />
        ))}

        {/* <div className="fourth-one">
          <img alt="fourth-1" />
          <div>title</div>
          <div>tag1</div>
          <div>tag2</div>
          <button>goto</button>
        </div>
        <div className="fourth-two">
          <img alt="fourth-2" />
          <div>title</div>
          <div>tag1</div>
          <div>tag2</div>
          <button>goto</button>
        </div>
        <div className="fourth-three">
          <img alt="fourth-3" />
          <div>title</div>
          <div>tag1</div>
          <div>tag2</div>
          <button>goto</button>
        </div> */}
      </FourthCardLayout>
    </Section>
  );
}

const ThemeCardLayout = styled.div.withConfig({
  componentId: "ThemeCardLayout",
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;

  .theme_img {
    width: 200px;
  }

  .week {
    color: #ff5136;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 125%;
    text-align: center;
    letter-spacing: 0.05em;
    margin: 8px 0;
  }

  .title {
    color: #007fab;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    margin: 8px 0 20px;
  }

  a {
    text-decoration: none;
    color: white;
    background-color: #a46039;
    border-radius: 60px;
    padding: 4px 24px;
  }

  > .TagLayout {
    margin-bottom: 20px;
  }

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

function ThemeCard({ img, index, title, tags = [], link, className }) {
  return (
    <ThemeCardLayout className={className}>
      <img className="theme_img" src={img} alt="theme" />
      <div className="week">WEEK {index + 1}</div>
      <div className="title">{title}</div>
      {tags.map((tag, tag_index) => (
        <Tag text={tag} key={tag_index} color="#A46039" />
      ))}
      <a href={link}>查看關卡細節</a>
    </ThemeCardLayout>
  );
}
