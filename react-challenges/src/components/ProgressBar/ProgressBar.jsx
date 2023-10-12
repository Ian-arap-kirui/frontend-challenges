// Create a component called ProgressBar displays a progress bar. The progress bar should have the following styling applied:

// A width of 100%
// A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey The component should accept a percent prop which is used to determine how many percents of the progress bar to fill with green colour. We have already written some code for you. image
// Instructions
// Do not edit the data-testid attributes
// You can use styled-components library to achieve the desired result

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Task from "../Task/Task";

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
`;
const Progress = styled.div`
  color: "white";
  width: ${(props) => props.percent}%;
  height: 100%;
  border-radius: 5px;
  background-color: green;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProgressBar = ({ data }) => {
  const [percent, setPercent] = useState(60);

  useEffect(() => {
    const calculateYearProgress = () => {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const endOfYear = new Date(now.getFullYear(), 11, 31);
      const yearProgress =
        ((now - startOfYear) / (endOfYear - startOfYear)) * 100;
      setPercent(Math.round(yearProgress));
    };

    calculateYearProgress();
  }, []);

  const filteredData = data.filter((item) => item.title === "Progress-Bar");

  return (
    <>
      <Task filteredData={filteredData} />
      <h2>Result:</h2>
      2023 Progress: {percent} %
      <Wrapper data-testid="wrapper">
        <Progress percent={percent} data-testid="progress">
          {" "}
          {percent}%
        </Progress>
      </Wrapper>
      <Link to={-1}>🔙 back</Link>
    </>
  );
};

export default ProgressBar;
