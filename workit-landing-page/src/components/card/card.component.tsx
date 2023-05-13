import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/icon-twitter.svg";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import HeroImage from "../../assets/image-hero.webp";
import Founder from "../../assets/image-founder.webp";
import "./card.styles.css";

const Card = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="h-[30.107rem] bg-[#24053E]">
        <header>
          {/* Navigation Bar */}
          <nav className="flex justify-between pt-[2rem] pb-[4rem] px-[1rem] text-white">
            <a href="#">
              <img src={LogoLight} alt="workit company logo" />
            </a>

            <a href="#">
              <p className="border-b-2 border-b-[#44FFA1] leading-8 font-Manrope font-bold hover:text-[#44FFA1]">
                Apply for access
              </p>
            </a>
          </nav>
        </header>
        <div className="text-center text-white">
          <h1 className="font-Fraunces font-semibold text-[2.813rem] leading-[3.125rem] pb-10">
            Data <span className="border-b-[#44FFA1] border-b-4">tailored</span>{" "}
            to your needs.
          </h1>
          <button className="w-[8.313rem] btnStyle btnHover">Learn More</button>
        </div>
      </section>

      {/* Hero Image */}
      <div>
        <img
          src={HeroImage}
          alt="cellphone with positive trending graph"
          className="w-[20rem] h-[11.5rem] absolute z-50  left-[2.25rem] top-[24.313rem]"
        />
      </div>
      {/* End Hero Section */}

      {/* Features Section */}
      <section id="features" className="text-center pt-36 px-4 bg-[#FCF8FF]">
        <div className="pb-10">
          <div className="mb-6">
            <p className="featureNum">1</p>
          </div>

          <h2 className="featureTitle">Actionable insights</h2>
          <p className="font-Manrope">
            Optimize your products, improve customer satisfaction and stay ahead
            of the competition with our product data analytics.
          </p>
        </div>
        <div className="pb-10">
          <div className="mb-6">
            <p className="featureNum">2</p>
          </div>

          <h2 className="featureTitle">Data-driven decisions</h2>
          <p className="font-Manrope">
            Make data-driven decisions with our product data analytics. Our
            AI-generated reports hep you unlock insights hidden in your product
            data.
          </p>
        </div>
        <div className="pb-10">
          <div className="mb-6">
            <p className="featureNum">3</p>
          </div>

          <h2 className="featureTitle">Always affordable</h2>
          <p className="font-Manrope">
            Always affordable pricing that scales with your business. Get
            top-quality product data analytics services without hidden costs or
            unexpected fees.
          </p>
        </div>
      </section>
      {/* End Features Section */}

      {/* Call-to-Action Section */}
      <section id="call-to-action" className="pt-[6.268rem]">
        <div>
          <img
            src={Founder}
            alt="photo of the company founder"
            className="w-[16.563rem] mx-auto relative top-12 z-0"
          />
        </div>
        <div className="text-center w-[21.5rem] mb-[4.625rem] mx-auto relative z-10 bg-[#24053E] ">
          <h2 className="ctaTitle">Be the first to test</h2>
          <p className="w-[17.563rem] mx-auto text-white font-Manrope leading-7">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for oru app and kickstart your
            company. Apply for access below and I'll be in touch to schedule a
            call.
          </p>
          <button className="mt-6 mb-8 mx-[5.375rem] w-[10.75rem] btnStyle btnHover">
            Apply for access
          </button>
        </div>
      </section>
      {/* End Call-to-Action Section */}

      {/* Footer */}
      <footer id="ContainerFour" className="flex flex-col justify-center">
        <div className="mx-auto pb-[3.601rem]">
          <img src={LogoDark} alt="workit company logo" />
        </div>
        <div className="flex w-[7.25rem] mx-auto pb-[3.986rem] justify-between">
          <a href="#">
            <img src={Facebook} alt="facebook logo" />
          </a>
          <a href="#">
            <img src={Twitter} alt="twitter logo" />
          </a>
          <a href="#">
            <img src={Instagram} alt="instagram logo" />
          </a>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Card;
