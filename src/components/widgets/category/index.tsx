import { CategoryType } from "@/components/types";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import CustomScaleParallax from "../parallax/scale";
import CustomEasingParallax from "../parallax/easing";

const categories = [
  {
    title: "Buy",
    icon: "https://psinv.net/assets/img/units-mobile-icons/sale.svg?ver=1",
  },
  {
    title: "Sell",
    icon: "https://psinv.net/assets/img/units-mobile-icons/rent.svg?ver=1",
  },
  {
    title: "Commercial",
    icon: "https://psinv.net/assets/img/units-mobile-icons/community-image.svg?ver=1",
  },
  {
    title: "Community Search",
    icon: "https://psinv.net/assets/img/units-mobile-icons/community-search.svg?ver=1",
  },
  {
    title: "Property Listing",
    icon: "https://psinv.net/assets/img/units-mobile-icons/list-your-property.svg?ver=1",
  },
  {
    title: "Mortgage",
    icon: "https://psinv.net/assets/img/units-mobile-icons/mortgage-icon.svg?ver=1",
  },
  {
    title: "Developer",
    icon: "https://psinv.net/assets/img/units-mobile-icons/developer.svg?ver=1",
  },
  {
    title: "Build your Home",
    icon: "https://psinv.net/assets/img/units-mobile-icons/build-your-home.svg?ver=1",
  },
];
function Categories() {
  return (
    <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Grid
        container
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        maxWidth={"xl"}
        //   sx={{ flexWrap: "wrap" }} // Add flexWrap property to wrap items
      >
        {categories.map((category: CategoryType, key: any) => {
          return (
            <Grid
              item
              md={3}
              key={key}
              p={4}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CustomEasingParallax>
                <Card elevation={10} sx={{ borderRadius: 5, width: 200 }}>
                  <CardContent>
                    <Grid
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <Box
                        src={category.icon}
                        alt={category.title}
                        component={"img"}
                        width={100}
                        height={100}
                      />
                      <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                          mt: 1,
                          height: 40,
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                          }}
                          component={"h1"}
                          variant="subtitle1"
                        >
                          {category.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </CustomEasingParallax>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Categories;
