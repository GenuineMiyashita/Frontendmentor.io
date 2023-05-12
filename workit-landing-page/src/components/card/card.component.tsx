import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/icon-twitter.svg";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import HeroImage from "../../assets/image-hero.webp";
import Founder from "../../assets/image-founder.webp";

const Card = () => {
  return (
    <>
      <div id="mainContainer">
        <div id="ContainerOne" className="bg-[#24053E] text-white">
          <div>
            <img src={LogoLight} alt="" />
            <p>Apply for access</p>
          </div>
          <div>
            <h1>
              Data <span>tailored</span>to your needs
            </h1>
            <button>Learn More</button>
          </div>
        </div>
        <div id="ContainerTwo">
          <div>
            <p>1</p>
            <h2 className="font-Fraunces font-semibold text-[28px] leading-[36px] text-[#24053E]">
              Actionable insights
            </h2>
            <p className="font-Manrope text-base">
              Optimize your products, improve customer satisfaction and stay
              ahead of the competition with our product data analytics.
            </p>
          </div>
          <div>
            <p>2</p>
            <h2 className="font-Fraunces font-semibold text-[28px] leading-[36px] text-[#24053E]">
              Data-driven decisions
            </h2>
            <p className="font-Manrope text-base">
              Make data-driven decisions with our product data analytics. Our
              AI-generated reports hep you unlock insights hidden in your
              product data.
            </p>
          </div>
          <div>
            <p>3</p>
            <h2 className="font-Fraunces font-semibold text-[28px] leading-[36px] text-[#24053E]">
              Always affordable
            </h2>
            <p className="font-Manrope text-base">
              Always affordable pricing that scales with your business. Get
              top-quality product data analytics services without hidden costs
              or unexpected fees.
            </p>
          </div>
        </div>
        <div id="ContainerThree">
          <div>
            <img src={Founder} alt="..." className="w-60" />
          </div>
          <div className="bg-[#24053E]">
            <h2 className="font-Fraunces font-semibold text-[32px] leading-[48px] text-white">
              Be the first to test
            </h2>
            <p className="font-Manrope text-base leading-[28px] text-white">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for oru app and kickstart your
              company. Apply for access below and I'll be in touch to schedule a
              call.
            </p>
            <button>Apply for access</button>
          </div>
        </div>
        <div id="ContainerFour">
          <div>
            <img src={LogoDark} alt="..." />
          </div>
          <div>
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
