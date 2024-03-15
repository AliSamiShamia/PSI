import { ButtonType } from "@/components/types";
import { Button } from "@mui/material";
import React from "react";

function CustomButton({ children, action, color, size, style }: ButtonType) {
  return (
    <Button
      sx={[style, { backgroundColor: color }]}
      size={size ? size : "large"}
      onClick={action}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
