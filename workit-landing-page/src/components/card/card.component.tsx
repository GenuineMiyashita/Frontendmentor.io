import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/icon-twitter.svg";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import HeroImage from "../../assets/image-hero.webp";
import Founder from "../../assets/image-founder.webp";
import BackgroundImg from "../../assets/bg-pattern-3.svg";
import "./card.styles.css";

const Card = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section id="hero" className="h-[30.107rem] bg-[#24053E] relative z-50">
          <header>
            {/* Navigation Bar */}
            <nav
              id="heroNavbar"
              className="flex justify-between pt-[2rem] pb-[4rem] px-[1rem] mx-auto text-white"
            >
              <img src={LogoLight} alt="workit company logo" />

              <p className="border-b-2 border-b-[#44FFA1] leading-8 font-Manrope font-bold hover:text-[#44FFA1] hover:cursor-pointer">
                Apply for access
              </p>
            </nav>
          </header>
          <div id="heroText" className="text-center text-white mx-auto">
            <h1
              id="heroTitle"
              className="font-Fraunces font-semibold text-[2.813rem] leading-[3.125rem] pb-10"
            >
              Data{" "}
              <span id="highlight" className="border-b-[#44FFA1] border-b-4">
                tailored
              </span>{" "}
              to your needs.
            </h1>
            <button id="heroBtn" className="w-[8.313rem] btnStyle btnHover">
              Learn More
            </button>
          </div>
        </section>

        {/* Hero Image */}
        <div className="relative">
          <img
            id="heroImg"
            src={HeroImage}
            alt="cellphone with positive trending graph"
            className="w-[20rem] h-[11.5rem] absolute z-50 left-[2.25rem] top-[-6rem]"
          />
        </div>
        {/* End Hero Section */}

        {/* Features Section */}
        <section
          id="features"
          className="text-center pt-36 px-4 bg-[#FCF8FF] relative bottom-5 z-40"
        >
          <div id="featuresContainer">
            <div className="pb-10 feat-tablet">
              <div className="num-container mb-6">
                <p className="featureNum">1</p>
              </div>

              <div className="feat-tablet-text">
                <h2 className="featureTitle">Actionable insights</h2>
                <p className="font-Manrope featureText">
                  Optimize your products, improve customer satisfaction and stay
                  ahead of the competition with our product data analytics.
                </p>
              </div>
            </div>
            <div className="pb-10 feat-tablet">
              <div className="num-container mb-6">
                <p className="featureNum">2</p>
              </div>

              <div className="feat-tablet-text">
                <h2 className="featureTitle">Data-driven decisions</h2>
                <p className="font-Manrope featureText">
                  Make data-driven decisions with our product data analytics.
                  Our AI-generated reports hep you unlock insights hidden in
                  your product data.
                </p>
              </div>
            </div>
            <div className="pb-10 feat-tablet">
              <div className="num-container mb-6">
                <p className="featureNum">3</p>
              </div>

              <div className="feat-tablet-text">
                <h2 className="featureTitle">Always affordable</h2>
                <p className="font-Manrope featureText">
                  Always affordable pricing that scales with your business. Get
                  top-quality product data analytics services without hidden
                  costs or unexpected fees.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}

        {/* Call-to-Action Section */}
        <section id="call-to-action" className="pt-[6.268rem]">
          <div>
            <img
              id="ctaImg"
              src={Founder}
              alt="company founder"
              className="w-[16.563rem] mx-auto relative top-12 z-0"
            />
            <img
              id="ctaBackgroundImg"
              src={BackgroundImg}
              alt="multiple teal circles in a cylinder"
              className="hidden md:inline"
            />
          </div>

          <div
            id="ctaText"
            className="text-center w-[21.5rem] mb-[4.625rem] mx-auto relative z-10 bg-[#24053E] "
          >
            <h2 className="ctaTitle">Be the first to test</h2>
            <p
              id="ctaSub"
              className="w-[17.563rem] mx-auto text-white font-Manrope leading-7"
            >
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for oru app and kickstart your
              company. Apply for access below and I'll be in touch to schedule a
              call.
            </p>
            <button
              id="ctaBtn"
              className="mt-6 mb-8 mx-[5.375rem] w-[10.75rem] btnStyle btnHover"
            >
              Apply for access
            </button>
          </div>
        </section>
        {/* End Call-to-Action Section */}

        {/* Footer */}
        <footer id="footer" className="flex flex-col justify-center">
          <div className="mx-auto pb-[3.601rem]">
            <img src={LogoDark} alt="workit company logo" />
          </div>
          <div className="flex w-[7.25rem] mx-auto pb-[3.986rem] justify-between">
            <img src={Facebook} alt="facebook logo" />

            <img src={Twitter} alt="twitter logo" />

            <img src={Instagram} alt="instagram logo" />
          </div>
        </footer>
        {/* End Footer */}
      </main>
    </>
  );
};

export default Card;
