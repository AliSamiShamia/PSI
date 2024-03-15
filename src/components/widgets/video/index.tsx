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
      ? process.env.Video_URL + "background-video-1_wqi4w2.mp4"
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
  }, [hasWindow]); // Empty dependency array ensures the effect runs only once after initial mount

  const VideoRender = (
    <Grid>
      {
        <Grid>
          <ReactPlayer
            url={videoUrl}
            pip={true}
            // controls
            muted
            width={"100%"}
            height={"100%"}
            playsinline
            config={{
              file: {
                attributes: {
                  preload: "auto",
                },
              },
            }}
            playing
          />
        </Grid>
      }
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
      <Grid sx={{ display: { md: "block", xs: "none" } }}>{VideoRender}</Grid>
      <Grid sx={{ display: { md: "none", xs: "block" }, height: 500 }}>
        {VideoRender}
      </Grid>
    </Grid>
  );
}

export default CustomVideo;
