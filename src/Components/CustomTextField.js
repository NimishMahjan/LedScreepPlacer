import React from "react";
import { TextField, Grid } from "@mui/material";

const CustomTextField = ({
  label,
  placeholder,
  value,
  onChange,
  variant = "outlined",
  fullWidth = true,
  required = true,
}) => {
  return (
    <Grid item xs={2} style={{ marginTop: "2px" }}>
      <TextField
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant={variant}
        fullWidth={fullWidth}
        required={required}
        size="small"
        InputProps={{
          style: {
            fontSize: "0.7rem",
            padding: "0px 0px",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "0.7rem",
          },
        }}
      />
    </Grid>
  );
};

export default CustomTextField;
