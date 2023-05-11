import Accordion from "./accordion/accordion.component";
import heroImg from "../../assets/illustration-woman-online-mobile.svg";

const Card = () => {
  return (
    <main className="w-[20.438rem] h-[40.162rem]">
      {/* Image Container */}
      <section id="imgContainer">
        <img src={heroImg} alt="..." />
      </section>
      {/* Text Container */}
      <section id="textContainer">
        <h1>FAQ</h1>
        <Accordion />
      </section>
    </main>
  );
};

export default Card;
