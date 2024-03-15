import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Parallax } from "react-scroll-parallax";
import { Waypoint } from "react-waypoint";
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

  const [playing, setPlaying] = useState(false);

  const handleEnterViewport = function () {
    setPlaying(true);
  };
  const handleExitViewport = function () {
    setPlaying(false);
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
  }, []); // Empty dependency array ensures the effect runs only once after initial mount

  useEffect(() => {
    if (window != undefined) {
      setVideoUrl(getVideoUrl());
    }
  }, [hasWindow]);
  const VideoRender = (
    <ReactPlayer
      url={videoUrl}
      pip={true}
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
          display: { md: "block", xs: "none" },
          width: "100%",
        }}
      >
        {VideoRender}
      </Grid>
      <Grid
        sx={{
          display: { md: "none", xs: "block" },
          height: 700,
          width: "100%",
        }}
        dangerouslySetInnerHTML={{
          __html: ` <video
        loop="true"
        muted="true"
        autoplay="true"
        playsinline="true"
        
      ><source src="${videoUrl}" type="video/mp4" ></video>`,
        }}
      />
    </Grid>
  );
}

export default CustomVideo;
