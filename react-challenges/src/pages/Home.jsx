import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>List of challenges</p>
      <ul>
        <li>
          {" "}
          <Link to={"/progress-bar"}>Progress Bar</Link>
        </li>
        <li>
          <Link to={"/tabs"}>Tabs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
