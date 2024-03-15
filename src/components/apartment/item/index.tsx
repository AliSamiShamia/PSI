import { ApartmentType } from "@/components/types";
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import StraightenIcon from "@mui/icons-material/Straighten";
function AppartmentItem({
  id,
  title,
  description,
  details,
  thumb,
  floor,
  gallery,
}: ApartmentType) {
  return (
    <Paper className="card" sx={{ mx: 1 }}>
      <CardContent sx={{ p: 0 }}>
        <Box
          component={"img"}
          alt={title}
          src={process.env.baseURL + "apartments/" + thumb}
          sx={{ height: 230, width: "100%", borderRadius: 2 }}
        />
        <Grid display={"flex"} flexDirection={"column"} gap={1} p={2}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant="subtitle2" fontWeight={"500"}>
            {description.split(" ", 8)}
          </Typography>
          <Grid
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <HotelIcon color="primary" />
              <Typography fontWeight={"500"} variant="subtitle1">
                Beds: {details.bed}
              </Typography>
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <BathtubIcon color="primary" />
              <Typography fontWeight={"500"} variant="subtitle1">
                Baths: {details.bath}
              </Typography>
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <StraightenIcon color="primary" />
              <Typography fontWeight={"500"} variant="subtitle1">
                Sq Ft: {details.area}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

export default AppartmentItem;
