import { Box, styled } from "@mui/material";
import React from "react";

import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Container = styled("div")`
  background: white;
  overflow-x: auto;
  border-radius: 18px;
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
    min-width: 90px;
    text-align: center;
  }
  div:nth-of-type(3) {
    flex: 2;
    min-width: 100px;
  }
`;

const Table = () => {
  const { loading, balance, currency, equity, marketwatchTime } = useFetch();
  return (
    <Container>
      <Row sx={{ background: "grey" }}>
        <div>
          Balance <br></br> &#40;{!loading && currency}&#41;
        </div>
        <div>
          Equity <br></br> &#40;{!loading && currency}&#41;
        </div>
        <div>
          MarketWatch Time <br></br> &#40;EET&#41;
        </div>
      </Row>

      {loading ? (
        <Loading />
      ) : (
        <Row>
          <div>{balance}</div>
          <div>{equity}</div>
          <div>{marketwatchTime}</div>
        </Row>
      )}
      <Box
        sx={{
          fontSize: "small",
          color: "#1d4353",
          borderTop: "1px solid #ffffffa6f",
          padding: "5px",
          textAlign: "center",
        }}
      >
        Updated Every 5mins
      </Box>
    </Container>
  );
};

export default Table;
