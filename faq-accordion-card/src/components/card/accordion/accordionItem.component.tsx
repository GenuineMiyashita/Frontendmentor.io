import { useState } from "react";
import QuestionsAnswers from "../../../questions";
import arrow from "../../../assets/icon-arrow-down.svg";
import "./accordion.styles.css";

const AccordionItem = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index: any) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div>
      {QuestionsAnswers.map((item, index) => (
        <div className="item">
          <div
            className="title flex justify-between py-2"
            onClick={() => toggle(index)}
          >
            <h2>{item.question}</h2>
            <span>
              {selected === index ? (
                <img src={arrow} alt="..." className="rotate-180" />
              ) : (
                <img src={arrow} alt="..." />
              )}
            </span>
          </div>
          <div className={selected === index ? "content show" : "content"}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;
