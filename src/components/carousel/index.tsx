import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import { Colors } from "@/components/constant";
import { Parallax } from "react-scroll-parallax";

export default function CustomCarousel({
  children,
  slidesToShow,
}: {
  children: ReactNode;
  slidesToShow?: number;
}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    speed: 500,
    loop: true,

    slidesToShow: slidesToShow ?? 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          infinite: false,
        },
      },
    ],
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
    <Grid className="slick-container">
      <Slider {...settings}>{children}</Slider>
    </Grid>
  );
}
