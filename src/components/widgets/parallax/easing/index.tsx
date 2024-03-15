import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

function CustomEasingParallax({ children }: any) {
  return <Parallax translateX={[-100, 0, "easeOutQuint"]}>{children}</Parallax>;
}

export default CustomEasingParallax;
