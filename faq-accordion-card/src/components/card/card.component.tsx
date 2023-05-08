import { useState } from "react";
import heroImg from "../../assets/illustration-woman-online-mobile.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";

const Card = () => {
  const [showText, setShowText] = useState(false);

  return (
    // Main Container
    <main className="w-[20.438rem] h-[40.162rem]">
      <section id="imgContainer">
        <img src={heroImg} alt="..." />
      </section>
      {/* Text Container */}
      <section id="textContainer">
        <div>
          <h1>FAQ</h1>
        </div>
        {/* Questions */}
        <div>
          <article>
            {/* Question Title */}
            <h2 className="text-sm inline pr-4">
              How many team members can I invite?
            </h2>
            <button onClick={() => setShowText(!showText)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {showText && (
              <p className="text-sm">
                You can have an unlimited amount of team members!
              </p>
            )}
          </article>
          <article>
            {/* Question Title */}
            <h2 className="text-sm inline pr-4">
              What is the maximum file upload size?
            </h2>
            <button onClick={() => setShowText(!showText)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {showText && (
              <p className="text-sm">
                No more than 2GB. All files in your account must fit your
                alloted storage space.
              </p>
            )}
          </article>
          <article>
            {/* Question Title */}
            <h2 className="text-sm inline pr-4">How do I reset my password?</h2>
            <button onClick={() => setShowText(!showText)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {showText && (
              <p className="text-sm">
                You can reset your password by clicking on the "forgot password"
                button under login.
              </p>
            )}
          </article>
          <article>
            {/* Question Title */}
            <h2 className="text-sm inline pr-4">
              Can I cancel my subscription?
            </h2>
            <button onClick={() => setShowText(!showText)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {showText && (
              <p className="text-sm">
                Yes! You can cancel at anytime under the "subscription" section
                in account settings.
              </p>
            )}
          </article>
          <article>
            {/* Question Title */}
            <h2 className="text-sm inline pr-4">
              Do you provide additional support?
            </h2>
            <button onClick={() => setShowText(!showText)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {showText && (
              <p className="text-sm">
                Yes! You can contact our support team 24/7 at hi@support.com
              </p>
            )}
          </article>
        </div>
      </section>
    </main>
  );
};

export default Card;
