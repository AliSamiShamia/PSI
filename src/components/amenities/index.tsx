import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "../carousel";
import { AmenitiesData } from "../constant";
import { AmenitiesType } from "../types";
import AmenitiesItem from "./item";

function Amenities() {
  return (
    <>
      <Grid>
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
                Amenities
              </Typography>

              <Typography
                textAlign={"center"}
                maxWidth={600}
                variant="subtitle1"
                px={1}
                sx={{ fontSize: { md: 18, xs: 15 } }}
              >
                Enjoy facilities designed for your family's comfort and
                convenience, promoting well-being and community engagement.
              </Typography>
            </Grid>
            <Grid item md={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"}>
        <Grid sx={{ maxWidth: { md: "lg", xs: "100%" } }}>
          <CustomCarousel slidesToShow={4}>
            {AmenitiesData.map((item: AmenitiesType, key: number) => {
              return <AmenitiesItem key={key} {...item} />;
            })}
          </CustomCarousel>
        </Grid>
      </Grid>
    </>
  );
}

export default Amenities;
