import Accordion from "../accordion/accordion.component";
import heroImgMobile from "../../assets/illustration-woman-online-mobile.svg";
import heroImgDesktop from "../../assets/illustration-woman-online-desktop.svg";
import boxDesktop from "../../assets/illustration-box-desktop.svg";

import "./card.styles.css";

const Card = () => {
  return (
    <main>
      <div id="mainContainer" className="w-[20.438rem] h-[40.162rem]">
        <img
          id="box"
          src={boxDesktop}
          alt="cardboard box with at symbol on top"
          className="hidden md:inline"
        />
        {/* Image Container */}
        <section id="imgContainer" className="w-[14.803rem] mx-auto">
          <picture>
            <source media="(min-width: 720px)" srcSet={heroImgDesktop}></source>
            <img
              src={heroImgMobile}
              alt="woman at desktop"
              className="relative top-3 z-20  "
              id="heroImg"
            />
          </picture>
        </section>

        {/* Text Container */}
        <section
          id="textContainer"
          className="bg-white bg-mobilePattern bg-no-repeat bg-top h-[31rem] relative top-[-60px] rounded-3xl md:bg-desktopPattern md:bg-[left_-36rem_top_-17.8rem] md:bg-no-repeat"
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
