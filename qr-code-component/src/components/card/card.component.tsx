import { useState } from "react";
import Characters from "../../Characters";
import Star from "../../assets/Star.png";
import "./card.styles.css";

const Card = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const currentCharacter = Characters[selectedCharacter];
  const incrementCharacter = (val: number) => {
    setSelectedCharacter((currentVal: number) => {
      return Math.min(Math.max(val + currentVal, 0), Characters.length);
    });
  };

  return (
    <>
      <main>
        <div
          id="cardContainer"
          className="bg-slate-400 w-80 relative rounded-lg shadow-xl border-black border
      "
        >
          <div id="imgContainer" className="py-4">
            {currentCharacter.picture}
          </div>
          <div
            id="textContainer"
            className="text-center pb-4 font-Lato
        "
          >
            <p>
              Rarity: 5{" "}
              <img src={Star} alt="" className="inline w-4 align-middle pb-1" />
            </p>
            <h1
              id="characterName"
              className=" my-3 text-3xl font-bold font-Montserrat"
            >
              {currentCharacter.name}
            </h1>
            <p
              id="characterDescription"
              className="font-light mx-auto w-64
          "
            >
              {currentCharacter.description}
            </p>
            <p></p>
          </div>
        </div>

        <button onClick={() => incrementCharacter(-1)}>Prev</button>
        <button onClick={() => incrementCharacter(1)}>Next</button>
      </main>
    </>
  );
};

export default Card;
