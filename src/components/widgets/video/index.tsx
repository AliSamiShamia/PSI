import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Parallax } from "react-scroll-parallax";
import { BigPlayButton, ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css";

function CustomVideo() {
  const [videoUrl, setVideoUrl] = useState("");
  const [hasWindow, setHasWindow] = useState(false);
  const getVideoUrl = () => {
    // Example: If the screen width is less than 600px, use one video, otherwise use another
    return window.innerWidth < 600
      ? process.env.baseURL + "background-video-1_wqi4w2.mp4"
      : process.env.Video_URL + "background-video-2_fjplb0.mp4";
  };
  const handleResize = () => {
    setVideoUrl(getVideoUrl());
  };
  useEffect(() => {
    // Initial setup
    setVideoUrl(getVideoUrl());

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [videoUrl]); // Empty dependency array ensures the effect runs only once after initial mount

  useEffect(() => {
    if (typeof window !== undefined) {
      setHasWindow(true);
    }
  }, [window]); // Empty dependency array ensures the effect runs only once after initial mount

  const VideoRender = (
    <Grid position={"relative"} width={"100%"} sx={{ height: "auto" }}>
      {hasWindow && (
        <Grid sx={{ display: { md: "flex", xs: "none" } }}>
          <ReactPlayer
            playing={true}
            loop
            // muted
            volume={0.2}
            width={"100%"}
            height={"100%"}
            url={videoUrl}
          />
        </Grid>
      )}
    </Grid>
  );

  return (
    <Grid
      sx={{
        position: "relative",
        overflowX: "hidden",
        background: `url('/static/images/dots.png')`,
      }}
    >
      <Grid
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#00000055",
          zIndex: 10,
        }}
      ></Grid>
      <Grid sx={{ display: { md: "block", xs: "none" } }}>
        <Parallax scale={[1.1, 0.9]}>{VideoRender}</Parallax>
      </Grid>
      <Grid sx={{ display: { md: "none", xs: "block" }, height: 500 }}>
        {VideoRender}
      </Grid>
    </Grid>
  );
}

export default CustomVideo;
