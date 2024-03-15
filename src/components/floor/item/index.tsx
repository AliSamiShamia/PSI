import { Colors } from "@/components/constant";
import { FloorType } from "@/components/types";
import { Box, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function FloorItem({ title, thumb }: FloorType) {
  return (
    <Paper className="card" sx={{ mx: 1, my: 1, borderRadius: 4, py: 2 }}>
      <CardContent sx={{ p: 0, paddingBottom: "0 !important" }}>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Grid
            component={"img"}
            alt={title}
            src={process.env.baseURL + "floors/" + thumb}
            sx={{
              height: { md: 600, xs: 300 },
              width: "100%",
              borderRadius: 2,
            }}
          />
          <Grid display={"flex"} flexDirection={"column"} gap={1} p={2}>
            <Typography variant="h6" fontWeight={"bold"}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

export default FloorItem;
