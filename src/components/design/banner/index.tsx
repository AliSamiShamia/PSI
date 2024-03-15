import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Colors } from "@/components/constant";
import CustomButton from "@/components/widgets/button";
import ImageSlider from "@/components/widgets/slider";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: 600,
        with: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        color: "white",
        overflow: "hidden",
        paddingTop: 17,
        paddingBottom: 17,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundImage: `url("/static/images/hero-bg.png")`,
      }}
    >
      <Grid container maxWidth={"lg"}>
        <Grid
          item
          md={6}
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={4}
        >
          <Typography
            fontWeight={"bold"}
            component={"h2"}
            variant="h4"
            sx={{ fontSize: { md: 40, xs: 30 }, color: Colors.primary }}
          >
            Bask In A Radiance That
            <br />
            Shines Like A Beacon <br /> Above The City.
          </Typography>

          <CustomButton
            style={{ width: 200, padding: 2 }}
            color={Colors.secondary}
            action={() => {}}
            size={"large"}
          >
            <Typography color={"white"}> Enquire Now</Typography>
          </CustomButton>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <ImageSlider
            items={[
              process.env.baseURL + "architecture/SAFA-park-aerial.jpg",
              process.env.baseURL + "architecture/tower-evening.jpg",
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
