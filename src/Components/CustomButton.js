import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  type,
  variant,
  color,
  fullWidth = true,
  onClick,
  disabled,
  children,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
