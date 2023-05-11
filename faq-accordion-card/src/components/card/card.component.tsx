import Accordion from "../accordion/accordion.component";
import heroImg from "../../assets/illustration-woman-online-mobile.svg";
import heroShadow from "../../assets/bg-pattern-mobile.svg";

const Card = () => {
  return (
    <main className="w-[20.438rem] h-[40.162rem]">
      {/* Image Container */}
      <section id="imgContainer" className="w-[14.803rem] mx-auto ">
        <img src={heroImg} alt="..." className="relative z-20" />
        <img
          src={heroShadow}
          alt=""
          className="relative bottom-[4.375rem] z-10"
        />
      </section>
      {/* Text Container */}
      <section
        id="textContainer"
        className="bg-white h-[31rem] relative bottom-[10.938rem] rounded-lg"
      >
        <h1 className="font-Kumbh text-[2rem] font-bold text-center pt-32">
          FAQ
        </h1>
        <Accordion />
      </section>
    </main>
  );
};

export default Card;
