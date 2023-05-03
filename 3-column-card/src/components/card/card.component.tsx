// https://www.artstation.com/kaws_peter
import Modal from "../modal/modal.component";
import "./card.styles.css";

const Card = () => {
  return (
    <main>
      <div
        id="mainContainer"
        className="w-80 rounded-lg shadow-xl overflow-hidden"
      >
        <div
          id="warriorContainer"
          className="bg-backgroundOne bg-no-repeat bg-cover h-48"
        >
          <div className="text-center h-full flex flex-col justify-center bg-gray-400/25">
            <h2 className="font-Marcellus text-2xl">Warrior</h2>
            <p className="font-Nunito">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Modal />
          </div>
        </div>
        <div
          id="mageContainer"
          className="bg-backgroundTwo bg-no-repeat bg-cover h-48"
        >
          <div className="text-center h-full flex flex-col justify-center bg-gray-400/25">
            <h2 className="font-Marcellus text-2xl">Mage</h2>
            <p className="font-Nunito">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Modal />
          </div>
        </div>
        <div
          id="rogueContainer"
          className="bg-backgroundThree bg-no-repeat bg-cover h-48"
        >
          <div className="text-center h-full flex flex-col justify-center bg-gray-400/25">
            <h2 className="font-Marcellus text-2xl">Rogue</h2>
            <p className="font-Nunito">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Modal />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
