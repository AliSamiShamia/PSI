import React from "react";

import dynamic from "next/dynamic";
import { LogoInterface } from "@/components/types";
import { Box } from "@mui/material";
const Button = dynamic(() =>
  import("@mui/material/Button").then((module) => module)
);
const Image = dynamic(() => import("next/image").then((module) => module));

function Logo({ onClick, active, height, width, name }: LogoInterface) {
  return (
    <Box
      component={"img"}
      src={
        name == "white"
          ? "/static/images/logo-white.png"
          : "/static/images/logo.png"
      }
      alt={"Diabafrica logo"}
      width={width}
      height={height}
    />
  );
}

export default Logo;
