import { useState } from "react";
import products from "../Items";
import Button from "../button/button.component";
import cartImg from "../../assets/icon-cart.svg";
import "./card.styles.css";

// Change Button Component to be single instead of dual for 1 prev and 1 next on card component
// Figure out useState and moving between all 3 items in the array, otherwise, just stick to 2.

const Card = () => {
  const [items, setItems] = useState(products[0]);

  console.log(items);

  const handleNextItem = () => {
    setItems(products[1]);
  };

  return (
    <>
      {/* <div>
        {items.map((item) => {
          if (item.id === 1) {
            return (
              <div key={item.id}>
                <div>
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          }
        })}
      </div> */}

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
            <Button />
            <button
              className="my-2 w-full rounded-xl bg-gray-700 py-1 hover:bg-gray-800"
              id="checkoutBtn"
            >
              <img src={cartImg} className="mr-4 inline" alt="..." />
              <p className="inline font-montserrat text-white">カートに追加</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
