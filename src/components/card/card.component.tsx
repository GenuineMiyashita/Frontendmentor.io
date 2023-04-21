import mobileImg from "../../assets/Roxas_01.jpeg";
import cartImg from "../../assets/icon-cart.svg";

const Card = () => {
  return (
    <main>
      <div className="ml-11 w-3/4">
        {/* Hero Image */}

        <img
          src={mobileImg}
          alt="..."
          className="rounded-t-lg
        "
        />

        {/* Hero Section */}
        <div className="rounded-b-lg bg-yellow-200 px-5 text-left">
          {/* Item Category */}
          <p className="pt-4 font-montserrat text-sm font-medium tracking-[.35em]">
            ルームフレグランス
          </p>
          {/* Item Name */}
          <h1 className="pt-4 font-fraunces text-3xl font-bold">ロクサス</h1>
          {/* Item Description */}
          <p className="pt-4 font-montserrat text-sm font-medium">
            {" "}
            プチ グレインのグリーンをイメージしたシトラス
            アコードから、クローバーの甘さが広がり、ラストはムスクやアンバー、バルサム
            ノートが夏の暑さを感じさせる香り。
          </p>

          <div>
            {/* Screen reader price */}
            <div className="sr-only">Current: 44.29</div>
            {/* Normal Price */}
            <p className="py-4 font-fraunces text-3xl" aria-hidden="true">
              {" "}
              5,940円
              {/* Screen reader price */}
              <span className="sr-only">Original: 55.93</span>
              {/* Normal Price */}
              <span
                className="ml-4 align-middle font-montserrat text-sm line-through"
                aria-hidden="true"
              >
                7500円
              </span>
            </p>
            <button className="mb-4 w-full rounded-xl bg-gray-700">
              <img src={cartImg} className="mr-3 inline" alt="..." />
              <p className="inline font-montserrat text-white">カートに追加</p>
            </button>
          </div>
        </div>

        {/* Previous and next buttons */}
        <div className="mt-4 flex justify-around font-montserrat text-xs text-white">
          <button className="rounded-full bg-gray-800 px-2 py-1 ">
            &larr; Prev
          </button>
          <button className="rounded-full bg-gray-800 px-2 py-1 ">
            Next &rarr;
          </button>
        </div>
      </div>
    </main>
  );
};

export default Card;
