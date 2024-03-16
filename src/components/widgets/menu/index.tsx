import { Button, Divider, Grid, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Colors } from "@/components/constant";

interface MenuInterface {
  page: any;
  active: string;
  keys: number;
  hide?: boolean;
}
const jumpToRelevantDiv = (id: string) => {
  const relevantDiv = document.getElementById(id);
  if (relevantDiv) {
    // Calculate the target position by subtracting 100 pixels from the current position
    const targetPosition = relevantDiv.getBoundingClientRect().top - 150;
    // Scroll to the calculated target position with smooth behavior
    window.scrollBy({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
function CustomMenu({ page, active, keys, hide }: MenuInterface) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return page?.subMenu ? (
    <>
      <Button
        className={page.title == active && !hide ? "border" : ""}
        onClick={(event) => {
          handleOpenNavMenu(event);
        }}
        // color={"primary"}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          mr: 1,
          width: 1,
          textTransform: "capitalize",
          color: Colors.primary,
          fontWeight: "bold",
          fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
        }}
      >
        {page.title}
      </Button>
      <Menu
        id={keys + "-menu"}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {page?.menu?.map((menuItem: any, key1: number) => {
          return (
            <MenuItem
              color={Colors.primary}
              key={key1}
              sx={{}}
              onClick={() => {
                jumpToRelevantDiv(page.title);

              }}
            >
              {menuItem.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  ) : (
    <Button
      className={page.title == active ? "border" : ""}
      onClick={() => {
        jumpToRelevantDiv(page.title);
      }}
      size="large"
      sx={{
        display: "block",
        mr: 1,
        color: page.title == active ? Colors.secondary : Colors.primary,
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 18,
        width: 1,
      }}
    >
      {page.title}
    </Button>
  );
}

export default CustomMenu;
