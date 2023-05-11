import { useState } from "react";
import heroImg from "../../assets/illustration-woman-online-mobile.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";

const Card = () => {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const [questionFive, setQuestionFive] = useState(false);

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
        <div id="questionsContainer" className=" w-72 mx-auto">
          {/* Question One */}
          <article className="pb-7">
            {/* Question Title */}
            <h2 className="text-sm inline pr-6">
              How many team members can I invite?
            </h2>
            <button onClick={() => setQuestionOne(!questionOne)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {questionOne && (
              <p className="text-sm pt-3">
                You can have an unlimited amount of team members!
              </p>
            )}
          </article>

          {/* Question Two */}
          <article className="pb-7">
            {/* Question Title */}
            <h2 className="text-sm inline pr-6">
              What is the maximum file upload size?
            </h2>
            <button onClick={() => setQuestionTwo(!questionTwo)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {questionTwo && (
              <p className="text-sm pt-3">
                No more than 2GB. All files in your account must fit your
                alloted storage space.
              </p>
            )}
          </article>

          {/* Question Three */}
          <article className="pb-7">
            {/* Question Title */}
            <h2 className="text-sm inline pr-6">How do I reset my password?</h2>
            <button onClick={() => setQuestionThree(!questionThree)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}{" "}
            {questionThree && (
              <p className="text-sm pt-3">
                You can reset your password by clicking on the "forgot password"
                button under login.
              </p>
            )}
          </article>

          {/* Question Four */}
          <article className="pb-7">
            {/* Question Title */}
            <h2 className="text-sm inline pr-6">
              Can I cancel my subscription?
            </h2>
            <button onClick={() => setQuestionFour(!questionFour)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}{" "}
            {questionFour && (
              <p className="text-sm pt-3">
                Yes! You can cancel at anytime under the "subscription" section
                in account settings.
              </p>
            )}
          </article>

          {/* Question Five */}
          <article className="pb-7">
            {/* Question Title */}
            <h2 className="text-sm inline pr-4">
              Do you provide additional support?
            </h2>
            <button onClick={() => setQuestionFive(!questionFive)}>
              <img src={arrowDown} alt="..." />
            </button>
            {/* Question Text */}
            {questionFive && (
              <p className="text-sm pt-3">
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
