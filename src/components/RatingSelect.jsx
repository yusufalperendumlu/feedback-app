import { useState } from "react";

const RantingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {[...Array(10)].map((_, index) => (
        <li
          key={index + 1}
          style={
            selected === index + 1
              ? { backgroundColor: "purple", color: "white" }
              : null
          }
        >
          <input
            type="radio"
            id={`num${index + 1}`}
            name="rating"
            value={index + 1}
            onChange={handleChange}
            checked={selected === index + 1}
          />
          <label htmlFor={`num${index + 1}`} style={{ width: 100 }}>
            {index + 1}{" "}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RantingSelect;
