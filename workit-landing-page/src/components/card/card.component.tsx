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
          <div className="flex justify-between">
            <img src={LogoLight} alt="" />
            <p className="border-b-2 border-b-[#44FFA1] inline">
              <a href="#">Apply for access</a>
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-Fraunces font-semibold text-[50px] leading-[50px]">
              Data{" "}
              <span className="border-b-[#44FFA1] border-b-4">tailored</span> to
              your needs
            </h1>
            <button className="w-[133px] h-[55px] bg-[#44FFA1] p-2 text-[#24053E] font-Manrope font-bold text-base leading-[32px]">
              Learn More
            </button>
          </div>
        </div>
        <div id="ContainerTwo" className="text-center">
          <div>
            <div>
              <p>1</p>
            </div>

            <h2 className="font-Fraunces font-semibold text-[28px] leading-[36px] text-[#24053E]">
              Actionable insights
            </h2>
            <p className="font-Manrope text-base">
              Optimize your products, improve customer satisfaction and stay
              ahead of the competition with our product data analytics.
            </p>
          </div>
          <div>
            <div>
              <p>2</p>
            </div>

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
            <div>
              <p>3</p>
            </div>

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
        <div id="ContainerThree" className="pt-[100.29px]">
          <div>
            <img
              src={Founder}
              alt="..."
              className="w-[265px] mx-auto relative top-12 z-0"
            />
          </div>
          <div className="bg-[#24053E] text-center relative z-10 w-[344px] mb-[74px] mx-auto">
            <h2 className="pt-[32px] pb-[16px] font-Fraunces font-semibold text-[32px] leading-[48px] w-[281px] mx-auto text-white">
              Be the first to test
            </h2>
            <p className="font-Manrope text-base leading-[28px] text-white w-[281px] mx-auto">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for oru app and kickstart your
              company. Apply for access below and I'll be in touch to schedule a
              call.
            </p>
            <button className="mt-[24px] mb-[32px] mx-[86px] w-[172px] h-[55px] bg-[#44FFA1] p-2 text-[#24053E] font-Manrope font-bold text-base leading-[32px]">
              Apply for access
            </button>
          </div>
        </div>
        <div
          id="ContainerFour"
          className="flex flex-col justify-center align-middle"
        >
          <div className="mx-auto">
            <img src={LogoDark} alt="..." />
          </div>
          <div className="flex mx-auto">
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
