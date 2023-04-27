import React from "react";
import Trailblazer from "../../assets/Trailblazer.png";
import Star from "../../assets/Star.png";
import "./card.styles.css";

const Card = () => {
  return (
    <>
      <main>
        <div
          id="cardContainer"
          className="bg-slate-400 w-80 relative rounded-lg shadow-xl border-black border
      "
        >
          <div id="imgContainer" className="py-4">
            <img
              src={Trailblazer}
              className="mx-auto rounded-full border-black border bg-black"
            />
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
              Trailblazer
            </h1>
            <p
              id="characterDescription"
              className="font-light mx-auto w-64
          "
            >
              The Trailblazer is the playable main protagonist of Honkai: Star
              Rail
            </p>
            <p></p>
          </div>
        </div>
        <button className="absolute left-64 top-16"> &lt; </button>
      </main>
    </>
  );
};

export default Card;
