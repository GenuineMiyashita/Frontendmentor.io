import { useState } from "react";
import Products from "../Items";
import CheckoutCart from "../../assets/icon-cart.svg";
import "./card.styles.css";

const Card = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const currentItem = Products[selectedItem];
  const incrementItem = (val: number) => {
    setSelectedItem((currentVal: number) => {
      return Math.min(Math.max(val + currentVal, 0), Products.length);
    });
  };

  return (
    <main>
      <div className="container" id="mainContainer">
        <div className="rounded-t-lg" id="imgContainer">
          {currentItem.img}
        </div>

        <div
          className="rounded-b-lg bg-yellow-200 px-5 text-left"
          id="textContainer"
        >
          <p
            className="pt-2 font-montserrat text-sm font-medium tracking-[.35em]"
            id="itemCategory"
          >
            {currentItem.category}
          </p>

          <h1 className="pt-2 font-fraunces text-3xl font-bold" id="itemName">
            {currentItem.name}
          </h1>

          <p
            className="pt-2 font-montserrat text-sm font-medium"
            id="itemDescription"
          >
            {currentItem.description}
          </p>

          <div id="priceContainer">
            {/* Screen reader price */}
            <div className="sr-only">Current: 44.29</div>
            <p
              className="py-1 font-fraunces text-3xl"
              aria-hidden="true"
              id="itemSalePrice"
            >
              {currentItem.salePrice}

              {/* Screen reader price */}
              <span className="sr-only">Original: 55.93</span>
              <span
                id="itemPrice"
                className="ml-4 align-middle font-montserrat text-sm line-through"
                aria-hidden="true"
              >
                {currentItem.price}
              </span>
            </p>
            {/* <button
              className="my-2 w-full rounded-xl bg-gray-700 py-1 hover:bg-gray-800"
              id="checkoutBtn"
            >
              <img src={CheckoutCart} className="mr-4 inline" alt="..." />
              <span className="inline font-montserrat text-white">
                Checkout
              </span>
            </button> */}

            <div className="flex justify-evenly py-1">
              <button
                className="rounded bg-gray-300 px-2 font-bold text-gray-800 hover:bg-gray-400"
                disabled={selectedItem <= 0}
                onClick={() => incrementItem(-1)}
              >
                &larr; Prev
              </button>
              <button
                className="rounded bg-gray-300 px-2 font-bold text-gray-800 hover:bg-gray-400"
                disabled={selectedItem >= 2}
                onClick={() => incrementItem(1)}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
