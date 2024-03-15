import React from "react";
import dynamic from "next/dynamic";
import { Link } from "@mui/material";
import { Colors } from "@/components/constant";
const Logo = dynamic(() => import("@/components/widgets/logo"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const Grid = dynamic(() => import("@mui/material/Grid"));

const links = [
  {
    title: "Collections",
    url: "/collection",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "About Us",
    url: "/who-we-are",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer>
      <Grid
        pt={2}
        sx={{
          py: 3,
          flexDirection: { md: "row", xs: "column" },
          backgroundColor: Colors.white,
        }}
        width={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="subtitle1"
          textTransform={"capitalize"}
          color={Colors.primary}
        >
          © {new Date().getFullYear()}, all rights reserved
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
