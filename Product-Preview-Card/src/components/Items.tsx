import RoxasMobile from "../assets/Roxas_01.jpeg";
import RoxasDesk from "../assets/Roxas_02.jpeg";
import AxelMobile from "../assets/Axel_01.jpeg";
import AxelDesk from "../assets/Axel_02.jpeg";
import XionMobile from "../assets/Xion_01.jpg";
import XionDesk from "../assets/Xion_02.jpg";

const Items = [
  {
    id: 1,
    img: (
      <picture>
        <source media="(min-width: 720px)" srcSet={RoxasDesk}></source>
        <img src={RoxasMobile} alt="Roxas themed room fragrance" />
      </picture>
    ),
    category: "Room Fragrance Mist",
    name: "Roxas",
    description:
      "From the Petite Grain's green-inspired Citrus Accord, the sweetness of the clover spreads, the last is a scent that makes Musk and Amber, and Balsam Note feel the summer heat.",
    price: "7500 yen",
    salePrice: "5,940 yen",
  },
  {
    id: 2,
    img: (
      <picture>
        <source media="(min-width: 720px)" srcSet={AxelDesk}></source>
        <img src={AxelMobile} alt="Axel themed room fragrance" />
      </picture>
    ),
    category: "Room Fragrance Mist",
    name: "Axel",
    description:
      "The fresh scent of Apple and Citrus spreads the sweetness of jasmine and peach, and the last is a scent that allows mild musk and amber to wrap in a warm aura.",
    price: "7500 yen",
    salePrice: "5,940 yen",
  },
  {
    id: 3,
    img: (
      <picture>
        <source media="(min-width: 720px)" srcSet={XionDesk}></source>
        <img src={XionMobile} alt="Xion themed room fragrance" />
      </picture>
    ),
    category: "Room Fragrance Mist",
    name: "Xion",
    description:
      "The fresh scent of grapefruit spreads a small tea note, and the last is a moist sea salt and balsamic love danam that gives you the endless memories of late summer dusk.",
    price: "7500 yen",
    salePrice: "5,940 yen",
  },
];

export default Items;
