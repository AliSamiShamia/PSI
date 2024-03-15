import { Colors } from "@/components/constant";
import { GalleryType } from "@/components/types";
import { Box, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

function GalleryItem({ thumb }: GalleryType) {
  const [loading, setLoading] = useState(false);
  return (
    <Grid
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      m={1}
    >
      {loading ? (
        <Box
          zIndex={99999}
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#00000077",
            borderRadius: 2,
          }}
        >
          <ClipLoader loading={true} />
        </Box>
      ) : null}
      {thumb ? (
        <Box
          onLoad={() => {
            setLoading(false);
          }}
          onLoadStartCapture={() => {
            setLoading(true);
          }}
          sx={{
            height: 300,
            width: 400,
            borderRadius: 2,
            backgroundImage: `url('${
              process.env.baseURL + "gallery/" + thumb
            }')`,
            backgroundSize: "100% 100%",
          }}
        ></Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            backgroundColor: Colors.light,
            height: { xs: 300, sm: 300 },
            objectFit: "cover",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        />
      )}
    </Grid>
  );
}

export default GalleryItem;
