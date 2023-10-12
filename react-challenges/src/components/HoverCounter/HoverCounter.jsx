import React, { useState } from "react";
import Task from "../Task/Task";
import { Link } from "react-router-dom";

const HoverCounter = ({ data }) => {
  const [count, setCount] = useState(0);

  const handleHover = () => {
    setCount(count + 1);
  };

  const filteredData = data.filter((item) => item.title === "Hover Counter");

  return (
    <div>
      <Task filteredData={filteredData} />
      <h2>Result:</h2>
      <button data-testid="button" onMouseEnter={handleHover}>
        Hover Me!
      </button>
      <h1 data-testid="count">{count}</h1>
      <Link to={-1}>🔙 back</Link>
    </div>
  );
};

export default HoverCounter;
