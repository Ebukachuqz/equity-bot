import { styled } from "@mui/material";
import React from "react";

const Container = styled("div")`
  background: white;
  width: fit-content;
  border-radius: 18px;
  overflow: hidden;
  margin-top: 30px;
  box-shadow: 1px 0px 22px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 0px 22px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 0px 22px 0px rgba(0, 0, 0, 0.75);
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px solid #dedede;

  div {
    flex: 1;
    margin: 5px;
    min-width: 100px;
    text-align: center;
  }
  div:nth-of-type(3) {
    flex: 2;
    min-width: 150px;
  }
`;

const Table = () => {
  return (
    <Container>
      <Row sx={{ background: "grey" }}>
        <div>Balance</div>
        <div>Equity</div>
        <div>MarketWatch Time</div>
      </Row>
      <Row>
        <div>Balance</div>
        <div>Equity</div>
        <div>MarketWatch Time</div>
      </Row>
    </Container>
  );
};

export default Table;
