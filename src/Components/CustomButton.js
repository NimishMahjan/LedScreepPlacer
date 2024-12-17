import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  type,
  variant,
  color,
  fullWidth = true,
  onClick,
  children,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
