import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div id="mainContainer" className="w-80">
          <div id="musicContainer" className="text-sm text-center mb-1">
            Sample Our Collection By Clicking The Image!
          </div>
          <div
            id="imgContainer"
            className="rounded-t-xl overflow-hidden cursor-pointer h-40"
          >
            <img
              src={require("./assets/Hero.jpg")}
              alt="..."
              onClick={() => alert("It Worked!")}
            />
          </div>
          <div
            id="textContainer"
            className="bg-neutral-100 rounded-b-xl shadow-lg"
          >
            <p className="text-xs text-center">
              <a href="https://www.pixiv.net/en/users/93459916">
                Art by Nairu on Pixiv
              </a>
            </p>
            <div id="heroText" className="w-56 py-4 mx-auto text-center">
              <h1 className="font-bold text-xl pb-3">Order Summary</h1>
              <p className="font-light text-sm">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </div>
            <div
              id="subscriptionContainer"
              className="flex justify-evenly w-64 mb-4 py-3 mx-auto rounded-md bg-slate-200 text-center"
            >
              <img
                src={require("./assets/listen.png")}
                alt="..."
                className="w-10"
              />
              <div>
                <p className="font-semibold text-sm mb-1">Annual Plan</p>
                <p className="font-light text-xs">$59.99/year</p>
              </div>
              <a href="" className="self-center text-sm">
                Change
              </a>
            </div>
            <div
              id="paymentContainer"
              className="flex flex-col text-center pb-6"
            >
              <button className="w-64 py-2 mb-4 mx-auto rounded-md font-bold bg-slate-600 shadow-md text-white">
                Proceed to Payment
              </button>
              <button className="text-sm font-light">Cancel Order</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
