import { keyframes, styled } from "@mui/material";
import React from "react";

const dots = keyframes`
    50%{
        opacity: 0;
        transform: scale(0.7) translateY(10px);
    }
`;

const Container = styled("div")`
  text-align: center;
  padding: 15px;
  span {
    width: 15px;
    height: 15px;
    margin: 0 5px;
    background-color: #3aa800;
    border-radius: 50%;
    display: inline-block;
    animation-name: ${dots};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  span:nth-of-type(2) {
    background-color: #349600;
    animation-delay: 0.1s;
  }
  span:nth-of-type(3) {
    background-color: #2b7503;
    animation-delay: 0.2s;
  }
`;

const Loading = () => {
  return (
    <Container>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};

export default Loading;
