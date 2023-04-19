import mobileImg from "../../assets/mobileImg.jpg";
import cartImg from "../../assets/icon-cart.svg";
import "./card.styles.css";

const Card = () => {
  return (
    <>
      <div>
        <img
          src={mobileImg}
          alt=""
          className="rounded-full
        "
        />
      </div>
      <div>
        <p className="text-9xl">Preview</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          {" "}
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p> $149.99 $169.99</p>
        <button>
          <img src={cartImg} className="inline" alt="" />
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
