import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <div id="mainContainer" className="w-80">
        <div id="imgContainer">
          <img src={require("./assets/Hero.jpg")} alt="..." />
        </div>
        <div id="textContainer">
          <div id="heroText">
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div id="subscriptionContainer">
            <img src={require("./assets/icon-music.svg")} alt="" />
            <div>
              <p className="">Annual Plan</p>
              <p>$59.99/year</p>
            </div>
            <button>Change</button>
          </div>
          <div id="paymentContainer">
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
      <footer>
        Image Credit: Nairu on{" "}
        <a href="https://www.pixiv.net/en/users/93459916">Pixiv</a>
      </footer>
    </main>
  );
}

export default App;
