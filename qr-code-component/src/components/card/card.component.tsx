import React from "react";
import Trailblazer from "../../assets/Trailblazer.png";
import "./card.styles.css";

const Card = () => {
  return (
    <>
      <div
        id="cardContainer"
        className="bg-slate-400 w-80
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
          className="text-center
        "
        >
          <h1
            id="characterName"
            className="font-Lato mb-3 text-3xl font-medium"
          >
            Trailblazer
          </h1>
          <p
            id="characterDescription"
            className="font-Lato font-light
          "
          >
            The Trailblazer is the playable main protagonist of Honkai: Star
            Rail
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
