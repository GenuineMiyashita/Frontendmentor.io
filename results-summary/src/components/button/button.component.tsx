import { useState } from "react";

const Button = () => {
  const [statNumber, setStatNumber] = useState(0);

  function handleAddStat() {
    setStatNumber(statNumber + 1);
  }

  function handleRemoveStat() {
    setStatNumber(statNumber - 1);
  }
  return (
    <>
      <button onClick={handleRemoveStat} disabled={statNumber <= 0}>
        &larr;
      </button>
      <p className="inline px-3">
        {statNumber}
        <span className="pl-2">/ 9</span>
      </p>
      <button onClick={handleAddStat} disabled={statNumber >= 9}>
        &rarr;
      </button>
    </>
  );
};

export default Button;
