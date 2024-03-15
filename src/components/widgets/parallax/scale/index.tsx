import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

function CustomScaleParallax({ children }: any) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Parallax scale={[0.8, 1]}>{children}</Parallax>;
}

export default CustomScaleParallax;
