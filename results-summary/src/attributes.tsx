import STR from "./assets/strength.png";
import DEX from "./assets/dexterity.png";
import CON from "./assets/constitution.png";
import INT from "./assets/intelligence.png";
import WIS from "./assets/wisdom.png";
import CHR from "./assets/charisma.png";

const Attributes = [
  {
    id: 1,
    name: "STR",
    img: <img src={STR} alt="strength" className="w-5 inline rounded-md" />,
  },
  {
    id: 2,
    name: "DEX",
    img: <img src={DEX} alt="strength" className="w-5 inline rounded-md" />,
  },
  {
    id: 3,
    name: "CON",
    img: <img src={CON} alt="strength" className="w-5 inline rounded-md" />,
  },
  {
    id: 4,
    name: "INT",
    img: <img src={INT} alt="strength" className="w-5 inline rounded-md" />,
  },
  {
    id: 5,
    name: "WIS",
    img: <img src={WIS} alt="strength" className="w-5 inline rounded-md" />,
  },
  {
    id: 6,
    name: "CHR",
    img: <img src={CHR} alt="strength" className="w-5 inline rounded-md" />,
  },
];

export default Attributes;
