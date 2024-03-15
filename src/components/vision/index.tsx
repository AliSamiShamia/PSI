import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Parallax } from "react-scroll-parallax";

function Vision() {
  return (
    <Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={1}
        mt={10}
      >
        <Grid
          container
          maxWidth={"lg"}
          sx={{ flexDirection: { md: "row", xs: "column-reverse" } }}
        >
          <Grid
            item
            md={6}
            xs={12}
            mt={3}
            display={"flex"}
            justifyContent={"center"}
          >
            <Parallax scale={[0.7, 1.4]}>
              <Box
                component={"img"}
                src={process.env.baseURL + "architecture/vision.png"}
                sx={{
                  height: 550,
                }}
              ></Box>
            </Parallax>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              sx={{
                backgroundImage: `url('${
                  process.env.baseURL + "architecture/tower.png"
                }')`,
                height: 600,
                width: "100%",
                backgroundSize: "200%",
                backgroundPosition: "100%",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Parallax scale={[0.7, 1.05]}>
                <Box
                  component={"img"}
                  src={process.env.baseURL + "architecture/lady.jpg"}
                  sx={{
                    height: 550,
                  }}
                ></Box>
              </Parallax>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Vision;
