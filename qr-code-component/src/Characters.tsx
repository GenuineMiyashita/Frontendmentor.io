import Trailblazer from "./assets/Trailblazer.png";
import Seele from "./assets/Seele.png";
import Bronya from "./assets/Bronya.png";
import Welt from "./assets/Welt.png";
import Clara from "./assets/Clara.png";

const Characters = [
  {
    id: 1,
    rarity: 5,
    name: "Trailblazer",
    description:
      "In the beginning of the game, Kafka with the help of Silver Wolf activated their receptacle, awakening them to the real world where they woke up inside the Herta Space Station during the invasion of the Antimatter Legion.",
    picture: (
      <img
        src={Trailblazer}
        alt="..."
        className="mx-auto rounded-full border-black border bg-black"
      />
    ),
  },
  {
    id: 2,
    rarity: 5,
    name: "Seele",
    description:
      "A spirited and valiant key member of Wildfire who grew up in the perilous Underworld of Belobog.",
    picture: (
      <img
        src={Seele}
        alt="..."
        className="mx-auto rounded-full border-black border bg-black"
      />
    ),
  },
  {
    id: 3,
    rarity: 5,
    name: "Bronya",
    description:
      "She is the commander of the Silvermane Guards and the heir to the Supreme Guardian of Belobog.",
    picture: (
      <img
        src={Bronya}
        alt="..."
        className="mx-auto rounded-full border-black border bg-black"
      />
    ),
  },
  {
    id: 4,
    rarity: 5,
    name: "Welt",
    description:
      "A seasoned member of the Astral Express crew and the former sovereign of Anti-Entropy who has saved Earth from annihilation. He inherited the name of the world 'Welt'.",
    picture: (
      <img
        src={Welt}
        alt="..."
        className="mx-auto rounded-full border-black border bg-black"
      />
    ),
  },
  {
    id: 5,
    rarity: 5,
    name: "Clara",
    description:
      "She is a shy young girl orphaned at an early age, accompanied by an ancient mech named Svarog. Her greatest wish is 'to have a family'.",
    picture: (
      <img
        src={Clara}
        alt="..."
        className="mx-auto rounded-full border-black border bg-black"
      />
    ),
  },
];

export default Characters;
