import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "../carousel";
import { FloorType } from "../types";
import FloorItem from "./item";
import { FloorData } from "../constant";
import { Slide } from "react-slideshow-image";

const responsiveSettings = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 380,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];
function Floor() {
  return (
    <Grid
      sx={{
        background: `url('/static/images/dots.png')`,
        py: 10,
      }}
    >
      <Grid display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Grid
          container
          maxWidth={"lg"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Grid
            item
            md={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={2}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              component={"h4"}
              sx={{ fontSize: { md: 40, xs: 30 } }}
            >
              Floor Plans
            </Typography>

            <Typography
              textAlign={"center"}
              maxWidth={600}
              variant="subtitle1"
              px={1}
              sx={{ fontSize: { md: 18, xs: 15 } }}
            >
              Explore our detailed floor plans for a clearer understanding of
              your living space.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid sx={{ maxWidth: { md: "xl", xs: "100%" } }}>
          <Slide
            slidesToScroll={1}
            slidesToShow={3}
            indicators={true}
            responsive={responsiveSettings}
          >
            {FloorData.map((item: FloorType, key: number) => {
              return (
                <Grid
                  key={key}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mx={2}
                >
                  <FloorItem {...item} />
                </Grid>
              );
            })}
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Floor;
