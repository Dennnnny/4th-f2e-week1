import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Section from "../src/components/Section";
import FirstCard from "../src/pages/FirstCard";
import styled from "styled-components";
import SecondCard from "../src/pages/SecondCard";
import ThirdCard from "../src/pages/ThirdCard";
import FourthCard from "../src/pages/FourthCard";
import FifthCard from "../src/pages/FifthCard";
import SixthCard from "../src/pages/SixthCard";
import SeventhCard from "../src/pages/SeventhCard";
import LastCard from "../src/pages/LastCard";
import JoinBtn from "../src/components/JoinBtn";
import { device } from "../styles/config";
import Loading from "../src/components/Loading";

export default function Home() {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [ready, setReady] = useState(false)

  useEffect(()=>{
    let timer = setInterval(()=>{
      setReady(true)
    },2000)

    return  () => clearInterval(timer)
  },[])

  useEffect(() => {

    if(!ready) return

    const element = container.current;

    gsap.fromTo(
      element.querySelector(".footer_join_btn"),
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".footer_join_btn"),
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 10,
        scrollTrigger: {
          trigger: element.querySelector(".last"),
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".gifs"),
      { scale: 1, y: 0 },
      {
        scale: 0.4,
        y: 60,
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".gifs"),
      {
        scale: 0.4,
        y: 60,
      },
      {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".last"),
          start: "top center",
          end: "center center",
          scrub: true,
          // markers: true,
          toggleActions: "none",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".road"),
      { scale: 1 },
      {
        scale: 0.4,
        y: 15,
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".road"),
      {
        scale: 0.4,
        y: 15,
      },
      {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".last"),
          start: "top center",
          end: "center center",
          scrub: true,
          // markers: true,
          toggleActions: "none",
        },
      }
    );

    gsap.set(element.querySelector(".gifs"), {
      scale: 1,
      y: 0,
    });
    gsap.set(element.querySelector(".road"), {
      scale: 1,
      y: 0,
    });
    gsap.set(element.querySelector(".footer_join_btn"), {
      opacity: 0,
    });
  }, [ready]);

  if(!ready) {
    return(
      <Section>
        <Loading />
      </Section>
    )
  }

  return (
    <div ref={container} style={{ paddingTop: 60 }}>
      <Head>
        <title>GOGO Animation</title>
      </Head>
      <Header />
      <FirstCard reference={container} />
      <SecondCard reference={container} />
      <ThirdCard reference={container} />
      <FourthCard reference={container} />
      <FifthCard reference={container} />
      <SixthCard reference={container} />
      <SeventhCard reference={container} />
      <LastCard reference={container} />
      {/* <Section />
      <Section /> */}

      <Footer />
    </div>
  );
}

const HeaderLayout = styled.header.withConfig({
  componentId: "HeaderLayout",
})`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 1px #ffc37d99;
  background-color: #ffc37d;
  z-index: 2;

  @media ${device.mobile} {
    max-width: 375px;
    left: 50%;
    transform: translate(-50%);
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <img src="/btn_burger_open.svg" alt="menu here" />
      <img src="/logo_header.svg" alt="the 4th F2E" />
      <img src="/btn_user.svg" alt="who are you" />
    </HeaderLayout>
  );
}

const FooterLayout = styled.footer.withConfig({
  componentId: "FooterLayout",
})`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  /* transform: scale(1); */

  > div.gifs {
    display: flex;
    justify-content: center;

    > img {
      width: 30%;

      &:nth-child(1),
      :nth-child(3) {
        transform: translateY(5px);
      }
    }
  }
  > .road {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  > div.footer_join_btn {
    opacity: 0;
    position: absolute;
    right: 16px;
    bottom: 20px;
  }

  @media ${device.mobile} {
    max-width: 375px;
    left: 50%;
    transform: translate(-50%);
  }
`;

function Footer() {
  return (
    <FooterLayout>
      <div className="gifs">
        <img src="/character_f2e.gif" alt="ui dog" />
        <img src="/character_ui.gif" alt="ui cat" />
        <img src="/character_team.gif" alt="ui pig" />
      </div>
      <img className="road" src="/road.svg" />
      <div className="footer_join_btn">
        <JoinBtn />
      </div>
    </FooterLayout>
  );
}
