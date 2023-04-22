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
        <source media="(min-width: 720px" srcSet={RoxasDesk}></source>
        <img src={RoxasMobile} alt="..." />
      </picture>
    ),
    category: "ルームフレグランス",
    name: "ロクサス",
    description:
      "プチ グレインのグリーンをイメージしたシトラス アコードから、クローバーの甘さが広がり、ラストはムスクやアンバー、バルサム ノートが夏の暑さを感じさせる香り。",
    price: "7500円",
    salePrice: "5,940円",
  },
  {
    id: 2,
    img: (
      <picture>
        <source media="(min-width: 720px" srcSet={AxelDesk}></source>
        <img src={AxelMobile} alt="..." />
      </picture>
    ),
    category: "ルームフレグランス",
    name: "アクセル",
    description:
      "アップルとシトラスのフレッシュな香り立ちから、ジャスミンとピーチの甘みが広がり、ラストはマイルドなムスクとアンバーが温かみのあるオーラで包み込んでくれるような香りです。",
    price: "7500円",
    salePrice: "5,940円",
  },
  {
    id: 3,
    img: (
      <picture>
        <source media="(min-width: 720px" srcSet={XionDesk}></source>
        <img src={XionMobile} alt="..." />
      </picture>
    ),
    category: "ルームフレグランス",
    name: "シオン",
    description:
      "グレープフルーツのフレッシュな香り立ちから、微かなティーノートが広がり、ラストはしっとりとしたシーソルトとバルサミックなラブダナムが夏の終わりの夕暮れの切ない思い出を感じさせる香りです。",
    price: "7500円",
    salePrice: "5,940円",
  },
];

export default Items;
