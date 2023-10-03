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

const ProgressBar = ({ percent = 12 }) => {
  return (
    <Wrapper data-testid="wrapper">
      <Progress percent={percent} data-testid="progress" />
      Progress Bar
    </Wrapper>
  );
};

export default ProgressBar;
