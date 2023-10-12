import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Challenges</p>
      <ul>
        <li>
          {" "}
          <Link to={"/progress-bar"}>Progress Bar</Link>
        </li>
        <li>
          <Link to={"/tabs"}>Tabs</Link>
        </li>
        <li>
          <Link to={"/hover-counter"}>Hover Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
