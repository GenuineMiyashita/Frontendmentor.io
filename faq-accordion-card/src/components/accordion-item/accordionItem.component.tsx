import { useState } from "react";
import QuestionsAnswers from "../../questions";
import arrow from "../../assets/icon-arrow-down.svg";
import "./accordionItem.styles.css";

const AccordionItem = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index: any) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className="w-[17.438rem] mx-auto font-Kumbh cursor-pointer">
      {QuestionsAnswers.map((item, index) => (
        <div className="item">
          <div
            className="title flex justify-between py-[0.938rem]"
            onClick={() => toggle(index)}
          >
            <h2 className="text-sm font-medium hover:text-[#F47B56]">
              {item.question}
            </h2>
            <span className="self-center">
              {selected === index ? (
                <img src={arrow} alt="..." className="rotate-180" />
              ) : (
                <img src={arrow} alt="..." />
              )}
            </span>
          </div>
          <div className={selected === index ? "content show" : "content"}>
            <p className="text-xs font-normal pb-[0.938rem]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;
