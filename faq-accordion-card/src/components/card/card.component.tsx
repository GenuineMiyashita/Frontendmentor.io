import Accordion from "../accordion/accordion.component";
import heroImgMobile from "../../assets/illustration-woman-online-mobile.svg";
import heroImgDesktop from "../../assets/illustration-woman-online-desktop.svg";
import boxDesktop from "../../assets/illustration-box-desktop.svg";
import heroShadowMobile from "../../assets/bg-pattern-mobile.svg";
import heroShadowDesktop from "../../assets/bg-pattern-desktop.svg";

import "./card.styles.css";

const Card = () => {
  return (
    <main>
      <div id="mainContainer" className="w-[20.438rem] h-[40.162rem]">
        {/* Image Container */}
        <section id="imgContainer" className="w-[14.803rem] mx-auto">
          <picture>
            <source media="(min-width: 720px)" srcSet={heroImgDesktop}></source>
            <img
              src={heroImgMobile}
              alt="..."
              className="relative z-20"
              id="heroImg"
            />
          </picture>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet={heroShadowDesktop}
            ></source>
            <img
              src={heroShadowMobile}
              alt="..."
              className="relative bottom-[4.375rem] z-10"
              id="heroShadow"
            />
          </picture>
          <img
            src={boxDesktop}
            alt="..."
            className="invisible md:visible overflow-visible"
            id="boxImg"
          />
        </section>
        {/* Text Container */}
        <section
          id="textContainer"
          className="bg-white h-[31rem] relative bottom-[10.938rem] rounded-lg"
        >
          <h1
            id="FAQ"
            className="font-Kumbh text-[2rem] font-bold text-center pt-32"
          >
            FAQ
          </h1>
          <Accordion />
        </section>
      </div>
    </main>
  );
};

export default Card;
