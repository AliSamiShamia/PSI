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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Vision from "../vision";
import { Parallax } from "react-scroll-parallax";
const items = [
  "Located in Heart of the City",
  "On Main City Road",
  "Parking",
  "100% Power Back-up in Common Area",
];
function LocatedAt() {
  return (
    <Grid
      sx={{
        background: `url('/static/images/dots.png')`,
        py: { md: 10, xs: 2 },
      }}
    >
      <Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={1}
          mt={4}
        >
          <Grid
            container
            maxWidth={"lg"}
            sx={{ flexDirection: { md: "row-reverse", xs: "column-reverse" } }}
          >
            <Grid
              item
              md={6}
              xs={12}
              mt={3}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                display={"flex"}
                px={1}
                maxWidth={450}
                flexDirection={"column"}
              >
                <Typography variant="h6">
                  The Sapphire is a magnificent architectural masterpiece by
                  DAMAC Properties and de GRISOGONO, nestled alongside Sheikh
                  Zayed Road. Inspired by gorgeous yellow sapphires, the
                  development offers a beautifully crafted collection of
                  apartments and penthouses, in addition to full floors.
                </Typography>
              </Grid>
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
              <Parallax scale={[0.7, 1.4]}>
                <Grid>
                  <Box
                    sx={{
                      backgroundImage: `url('${"/static/images/mockup.png"}')`,
                      height: { md: 400, xs: 300 },
                      width: { md: 700, xs: "100%" },
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                </Grid>
              </Parallax>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Vision />
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
              Location Advantages
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
        </Grid>
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
            // alignItems={"center"}
          >
            <Grid display={"flex"} flexDirection={"column"}>
              <Typography fontWeight={"bold"} variant="h6">
                Key Highlights of Project
              </Typography>
              <Grid>
                <List
                  dense
                  sx={{
                    width: "100%",
                  }}
                  component="nav"
                  aria-labelledby="list-subheader"
                >
                  {items.map((item, key) => {
                    return (
                      <ListItem key={key}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                          <CheckCircleIcon sx={{ color: "#b05621" }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
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
                borderRadius: 1,
                borderBottomLeftRadius: { md: 80, xs: 1 },
                backgroundImage: `url('${
                  process.env.baseURL + "architecture/canel.jpg"
                }')`,
                height: 320,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "90%",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LocatedAt;
