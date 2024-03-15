import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import { Colors } from "@/components/constant";

export default function ImageSlider({ items }: { items: Array<string> }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}>
          {dots.map((item: any, key: number) => {
            return (
              <li
                style={{
                  backgroundColor: Colors.secondary,
                  width: 10,
                  height: 10,
                }}
              ></li>
            );
          })}
        </ul>
      </div>
    ),
  };
  return (
    <Grid>
      <Slider {...settings}>
        {items.map((item, key) => {
          return (
            <Box
              sx={{
                borderRadius: 1,
                borderBottomLeftRadius: { md: 80, xs: 1 },
                backgroundImage: `url('${item}')`,
                height: 600,
                backgroundSize:'cover',
                backgroundPosition:'90%'
              }}
              key={key}
            ></Box>
          );
        })}
      </Slider>
    </Grid>
  );
}
