import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "../carousel";

function BuildView() {
  return (
    <>
      <Box
        component={"img"}
        alt="View"
        src={process.env.baseURL + "architecture/terrace update 2.jpg"}
        sx={{
          width: "100%",
        }}
      ></Box>
    </>
  );
}

export default BuildView;
