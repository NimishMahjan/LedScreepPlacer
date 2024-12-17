import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const CustomToggleButton = ({
  selectedValue,
  setter,
  values = [],
  labels = [],
  style,
}) => {
  const handleClick = (value) => {
    // If the current value is clicked, toggle to the other value
    const nextValue =
      selectedValue === value ? values.find((v) => v !== value) : value;
    setter(nextValue);
  };
  return (
    <ButtonGroup fullWidth>
      {values.map((value, index) => (
        <Button
          key={value}
          variant={selectedValue === value ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleClick(value)}
          size="small"
          style={{
            fontWeight: selectedValue === value ? "bold" : "normal",
            fontSize: "0.8rem",
            padding: "4px 8px",
            minWidth: "0",
            ...style,
          }}
        >
          {labels[index]}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CustomToggleButton;
