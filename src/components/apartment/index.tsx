import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "../carousel";
import { Apartments } from "../constant";
import { ApartmentType } from "../types";
import AppartmentItem from "./item";

function Appartment() {
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
                Apartments for Sale
              </Typography>

              <Typography
                textAlign={"center"}
                maxWidth={600}
                variant="subtitle1"
                px={1}
                sx={{ fontSize: { md: 18, xs: 15 } }}
              >
                The leading real estate marketplace. Search millions of for-sale
                and rental listings, compare home values and connect.
              </Typography>
            </Grid>
            <Grid item md={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"}>
        <Grid sx={{ maxWidth: { md: "lg", xs: "100%" } }}>
          <CustomCarousel>
            {Apartments.map((item: ApartmentType, key: number) => {
              return <AppartmentItem key={key} {...item} />;
            })}
          </CustomCarousel>
        </Grid>
      </Grid>
    </>
  );
}

export default Appartment;
