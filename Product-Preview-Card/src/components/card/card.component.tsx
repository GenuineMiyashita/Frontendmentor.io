import { useState } from "react";
import products from "../Items";
import cartImg from "../../assets/icon-cart.svg";
import "./card.styles.css";

const Card = () => {
  const [items, setItems] = useState(products[0]);

  const handlePrevItem = () => {
    setItems(products[0]);
  };

  const handleNextItem = () => {
    setItems(products[1]);
  };

  return (
    <main>
      <div className="container" id="mainContainer">
        <div className="rounded-t-lg" id="imgContainer">
          {items.img}
        </div>

        <div
          className="rounded-b-lg bg-yellow-200 px-5 text-left"
          id="textContainer"
        >
          <p
            className="pt-2 font-montserrat text-sm font-medium tracking-[.35em]"
            id="itemCategory"
          >
            {items.category}
          </p>

          <h1 className="pt-2 font-fraunces text-3xl font-bold" id="itemName">
            {items.name}
          </h1>

          <p
            className="pt-2 font-montserrat text-sm font-medium"
            id="itemDescription"
          >
            {items.description}
          </p>

          <div id="priceContainer">
            {/* Screen reader price */}
            <div className="sr-only">Current: 44.29</div>
            <p
              className="py-1 font-fraunces text-3xl"
              aria-hidden="true"
              id="itemSalePrice"
            >
              {items.salePrice}

              {/* Screen reader price */}
              <span className="sr-only">Original: 55.93</span>
              <span
                id="itemPrice"
                className="ml-4 align-middle font-montserrat text-sm line-through"
                aria-hidden="true"
              >
                {items.price}
              </span>
            </p>
            <div className="flex justify-evenly py-1">
              <button
                className="rounded bg-gray-300 px-2 font-bold text-gray-800 hover:bg-gray-400"
                onClick={handlePrevItem}
              >
                &larr; Prev
              </button>
              <button
                className="rounded bg-gray-300 px-2 font-bold text-gray-800 hover:bg-gray-400"
                onClick={handleNextItem}
              >
                Next &rarr;
              </button>
            </div>
            <button
              className="my-2 w-full rounded-xl bg-gray-700 py-1 hover:bg-gray-800"
              id="checkoutBtn"
            >
              <img src={cartImg} className="mr-4 inline" alt="..." />
              <span className="inline font-montserrat text-white">
                Checkout
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
