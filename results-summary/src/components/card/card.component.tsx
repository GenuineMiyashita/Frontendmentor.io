import { useState } from "react";
import Button from "../button/button.component";

const Card = () => {
  const [wisdom, setWisdom] = useState(0);

  function increaseAttribute() {
    setWisdom(wisdom + 1);
  }

  return (
    <main>
      <div>
        <div className="bg-red-500 text-center pt-4 pb-8 rounded-b-3xl">
          <h1 className="text-xl pb-4">Itarish Lunafallow</h1>
          <img
            src={require("../../assets/-wandering-princess.jpg")}
            alt="..."
            className="rounded-full h-32 w-32 mx-auto object-cover border-solid border-white border-4"
          />

          <h2 className="text-lg pt-4 pb-2">Mystic Nomad</h2>
          <p className="text-sm w-80 mx-auto">
            Once a student in the prestigious institute of magics, Akexmyce,
            Itarish now travels the land of Jagrend using her magic to aid
            others.{" "}
          </p>
        </div>
        <div className="bg-slate-400 w-80 py-3 mx-auto">
          <h2 className="pb-3">Character Stats</h2>
          <div id="statContainer" className="">
            {/* Strength Stat */}
            <div className="flex justify-evenly pb-2">
              <div>
                <img
                  src={require("../../assets/strength.png")}
                  alt=""
                  className="w-5 inline"
                />
                <p className="inline pl-2">STR</p>
              </div>
              <div className="flex justify-between w-16 ">
                <button>-</button>
                <p className="inline">{wisdom}</p>
                <Button wisdom={wisdom} onClick={increaseAttribute} />
              </div>
            </div>

            {/* Dexterity Stat */}
            <div className="flex justify-evenly pb-2">
              <div>
                <img
                  src={require("../../assets/dexterity.png")}
                  alt=""
                  className="w-5 inline"
                />
                <p className="inline pl-2">DEX</p>
              </div>
              <div className="flex justify-between w-16 ">
                <button>-</button>
                <p className="inline">{wisdom}</p>
                <Button wisdom={wisdom} onClick={increaseAttribute} />
              </div>
            </div>

            {/* Constitution Stat */}
            <div className="flex justify-evenly pb-2">
              <div>
                <img
                  src={require("../../assets/constitution.png")}
                  alt=""
                  className="w-5 inline"
                />
                <p className="inline pl-2">CON</p>
              </div>
              <div className="flex justify-between w-16 ">
                <button>-</button>
                <p className="inline">{wisdom}</p>
                <Button wisdom={wisdom} onClick={increaseAttribute} />
              </div>
            </div>

            {/* Intelligence Stat */}
            <div className="flex justify-evenly pb-2">
              <div>
                <img
                  src={require("../../assets/intelligence.png")}
                  alt=""
                  className="w-5 inline"
                />
                <p className="inline pl-2">INT</p>
              </div>
              <div className="flex justify-between w-16 ">
                <button>-</button>
                <p className="inline">{wisdom}</p>
                <Button wisdom={wisdom} onClick={increaseAttribute} />
              </div>
            </div>

            {/* Wisdom Stat */}
            <div className="flex justify-evenly pb-2">
              <div>
                <img
                  src={require("../../assets/wisdom.png")}
                  alt=""
                  className="w-5 inline"
                />
                <p className="inline pl-2">WIS</p>
              </div>
              <div className="flex justify-between w-16 ">
                <button>-</button>
                <p className="inline">{wisdom}</p>
                <Button wisdom={wisdom} onClick={increaseAttribute} />
              </div>
            </div>

            {/* Charisma Stat */}
            <div className="flex justify-evenly pb-2">
              <div>
                <img
                  src={require("../../assets/charisma.png")}
                  alt=""
                  className="w-5 inline"
                />
                <p className="inline pl-2">CHR</p>
              </div>
              <div className="flex justify-between w-16 ">
                <button>-</button>
                <p className="inline">{wisdom}</p>
                <Button wisdom={wisdom} onClick={increaseAttribute} />
              </div>
            </div>
          </div>
          <button>Click me</button>
        </div>
      </div>
    </main>
  );
};

export default Card;
