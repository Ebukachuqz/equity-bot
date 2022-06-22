import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Table from "./Table";

const Containerr = styled(Container)`
  position: relative;
  height: 80vh;
  overflow: hidden;
`;

const ClipPath = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  -webkit-clip-path: polygon(100% 100%, 100% 0%, 53% 0, 85% 100%);
  clip-path: polygon(100% 100%, 100% 0%, 53% 0, 85% 100%);
  background-color: #3aa800;
`;

const Body = () => {
  return (
    <Containerr>
      <Box
        sx={{
          marginTop: "80px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
          DASHBOARD
        </Typography>
        <Table />
      </Box>
      <ClipPath />
    </Containerr>
  );
};

export default Body;
