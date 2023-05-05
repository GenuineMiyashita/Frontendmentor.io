import StatList from "../stats/stats.component";

import "./card.styles.css";

const Card = () => {
  return (
    <main>
      <div id="mainContainer">
        <div
          id="characterContainer"
          className="text-center pt-4 pb-8 rounded-b-3xl"
        >
          <h1 id="characterName" className="text-3xl pb-5 font-oswald">
            Itarish Lunafallow
          </h1>
          <img
            src={require("../../assets/-wandering-princess.jpg")}
            alt="..."
            className="rounded-full h-32 w-32 mx-auto object-cover border-solid border-white border-4"
          />
          <h2 id="characterClass" className="text-xl pt-5 pb-2 font-source">
            Mystic Nomad
          </h2>
          <p id="characterLore" className="text-sm w-80 mx-auto font-source">
            Once a student in the prestigious institute of magics, Akexmyce,
            Itarish now travels the land of Jagrend using her magic to aid
            others.{" "}
          </p>
        </div>
        <div id="statContainer" className="w-80 py-3 mx-auto">
          <div className="text-center">
            <h2 className="pb-3 pr-3 font-oswald text-xl inline">
              Character Stats
            </h2>
            <button className="bg-neutral-300 hover:bg-neutral-500 rounded-lg px-2 font-source">
              Read 5e Rules
            </button>
          </div>
          <div>
            <StatList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
