import Attributes from "../../attributes";
import Button from "../button/button.component";

const StatList = () => {
  const character = Attributes.map((attribute) => {
    return (
      <li
        id="stats"
        key={attribute.id}
        className="flex justify-between my-1 px-2 py-1.5 rounded-md bg-gradient-to-r  from-orange-200 to-teal-200"
      >
        <div>
          {" "}
          {attribute.img} {attribute.name}
        </div>
        <div>
          <Button />
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="w-56 mx-auto">{character}</ul>
    </div>
  );
};

export default StatList;
