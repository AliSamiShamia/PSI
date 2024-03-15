import { Colors } from "@/components/constant";
import { AmenitiesType } from "@/components/types";
import { Box, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function AmenitiesItem({ title, description, thumb }: AmenitiesType) {
  return (
    <Paper
      className="card"
      sx={{ mx: 1, backgroundColor: Colors.secondary, borderRadius: 4, py: 2 }}
    >
      <CardContent sx={{ p: 0, paddingBottom: "0 !important" }}>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box
            sx={{
              width: 70,
              margin: "0 auto",
              background: Colors.light,
              borderRadius: "32% 68% 64% 36% / 39% 58% 42% 61%",
              padding: 5,
            }}
          >
            <Box
              component={"img"}
              alt={title}
              src={process.env.baseURL + "amenities/" + thumb}
              sx={{ height: 70, width: 70, borderRadius: 2 }}
            />
          </Box>
          <Grid display={"flex"} flexDirection={"column"} gap={1} p={2}>
            <Typography variant="h6" fontWeight={"bold"}>
              {title}
            </Typography>

            <Typography variant="subtitle2" fontWeight={"500"}>
              {description.split(" ", 8)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

export default AmenitiesItem;
