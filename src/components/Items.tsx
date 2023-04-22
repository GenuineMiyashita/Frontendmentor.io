import RoxasMobile from "../assets/Roxas_01.jpeg";
import RoxasDesk from "../assets/Roxas_02.jpeg";
import Axel from "../assets/Axel_01.jpeg";
import Xion from "../assets/Xion_01.jpg";

const Items = [
  {
    id: 1,
    img: <img src={RoxasMobile} alt="..." />,
    category: "ルームフレグランス",
    name: "ロクサス",
    description:
      "プチ グレインのグリーンをイメージしたシトラス アコードから、クローバーの甘さが広がり、ラストはムスクやアンバー、バルサム ノートが夏の暑さを感じさせる香り。",
    price: "7500円",
    salePrice: "5,940円",
  },
  {
    id: 2,
    img: <img src={Axel} alt="..." />,
    category: "ルームフレグランス",
    name: "アクセル",
    description:
      "アップルとシトラスのフレッシュな香り立ちから、ジャスミンとピーチの甘みが広がり、ラストはマイルドなムスクとアンバーが温かみのあるオーラで包み込んでくれるような香りです。",
    price: "7500円",
    salePrice: "5,940円",
  },
  {
    id: 3,
    img: <img src={Xion} alt="..." />,
    category: "ルームフレグランス",
    name: "シオン",
    description:
      "グレープフルーツのフレッシュな香り立ちから、微かなティーノートが広がり、ラストはしっとりとしたシーソルトとバルサミックなラブダナムが夏の終わりの夕暮れの切ない思い出を感じさせる香りです。",
    price: "7500円",
    salePrice: "5,940円",
  },
];

export default Items;
