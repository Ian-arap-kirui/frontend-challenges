import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <>
      <header className="header">
        <h1 className="heading">Challenges</h1>
      </header>
      <div className="line" />
      <ul className="tasks">
        {data.map((item) => (
          <Link className="taskItem" to={item.link}>
            <li key={item.id}>
              <h5>{item.title}</h5>
              <span>{item.description.split(".")[0]}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="line" />
      <footer>&copy; Copyright 2023 FrontEnd-Challenges</footer>
    </>
  );
};

export default Home;
