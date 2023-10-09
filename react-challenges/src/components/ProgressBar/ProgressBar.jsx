// Create a component called ProgressBar displays a progress bar. The progress bar should have the following styling applied:

// A width of 100%
// A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey The component should accept a percent prop which is used to determine how many percents of the progress bar to fill with green colour. We have already written some code for you. image
// Instructions
// Do not edit the data-testid attributes
// You can use styled-components library to achieve the desired result

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const Progress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  border-radius: 5px;
  background-color: green;
`;

const ProgressBar = ({ percent = 12, data }) => {
  const filteredData = data.filter((item) => item.title === "Progress-Bar");
  return (
    <>
      {filteredData.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.img} alt="content-img" />
          <p style={{ columnCount: "2", columnGap: "20px" }}>
            {item.description}
          </p>
          <div>
            <h4>NOTE</h4>
            <p style={{ fontStyle: "italic", color: "red" }}>{item.extras}</p>
          </div>

          <div>
            <h3>Challenges</h3>
            <p>
              {item.challenges.split(", ").map((text) => (
                <li>{text}</li>
              ))}
            </p>
          </div>
        </div>
      ))}
      <h2>Result:</h2>
      <Wrapper data-testid="wrapper">
        <Progress percent={percent} data-testid="progress" />
      </Wrapper>
      <Link to={-1}>🔙 back</Link>
    </>
  );
};

export default ProgressBar;
