import React, { lazy, useEffect, useState, Suspense } from "react";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const CustomMenu = dynamic(() =>
  import("../../widgets/menu").then((module) => module)
);
const Box = lazy(() => import("@mui/material/Box"));
const Button = lazy(() => import("@mui/material/Button"));
const Container = lazy(() => import("@mui/material/Container"));
const AppBar = lazy(() => import("@mui/material/AppBar"));
const Drawer = lazy(() => import("@mui/material/Drawer"));
const Grid = lazy(() => import("@mui/material/Grid"));
const IconButton = lazy(() => import("@mui/material/IconButton"));
const List = lazy(() => import("@mui/material/List"));
const ListItem = lazy(() => import("@mui/material/ListItem"));
const Toolbar = lazy(() => import("@mui/material/Toolbar"));
const Zoom = lazy(() => import("@mui/material/Zoom"));
const MenuIcon = lazy(() => import("@mui/icons-material/Menu"));
import PropTypes from "prop-types";
import Spinner from "@/components/widgets/spinner";
import Logo from "@/components/widgets/logo";

interface PageInterface {
  title: string;
  url: string;
}
interface HeaderInterface {
  active: string;
  pages: PageInterface[];
}



function ResponsiveAppBar({ active, pages }: HeaderInterface) {
  const router = useRouter();

  const [stickyClass, setStickyClass] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event: any) => {
    setOpen(true);
  };

  useEffect(() => {
    window?.addEventListener("scroll", stickNavbar);

    return () => {
      window?.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  return (
    <AppBar
      id={"appBar"}
      sx={{
        backgroundColor: {
          md: "transparent",
          sm: "#ffffff55",
          xs: "#ffffff55",
        },
      }}
      elevation={0}
      enableColorOnDark
    >
      <Container maxWidth={stickyClass ? false : "xl"} disableGutters>
        <Toolbar
          variant="dense"
          sx={{
            p: 2,
            borderRadius: { md: stickyClass ? 0 : 5 },
            justifyContent: "space-between",
            overflowX: "auto",
            background: stickyClass ? "white" : "transparent",
          }}
        >
          <Grid
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo
              name={"dark"}
              onClick={() => {
                router.push("/", undefined, { shallow: true });
              }}
              active={active}
              width={!stickyClass ? 250 : 150}
              height={!stickyClass ? 124 : 70}
            />
          </Grid>
          <Grid
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo
              name={"dark"}
              onClick={() => {
                router.push("/", undefined, { shallow: true });
              }}
              active={active}
              width={120}
              height={50}
            />
          </Grid>

          <Grid
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu-appbar"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon sx={{ fontSize: 40 }} color={"primary"} />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            >
              <List>
                {pages.map((page: any, key: number) => (
                  <ListItem key={key} disablePadding>
                    <CustomMenu page={page} keys={key} active={active} hide />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Grid>

          <Grid
            sx={{
              flexGrow: 0.9,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page: any, key: number) => (
              <Grid key={key}>
                <CustomMenu page={page} keys={key} active={active} />
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
ResponsiveAppBar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ResponsiveAppBar;
