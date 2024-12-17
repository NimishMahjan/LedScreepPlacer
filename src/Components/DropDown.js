import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const DropDown = ({
  data,
  valueField,
  labelField,
  onChange,
  value,
  heading,
}) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      size="small" // Reduces the overall size of the dropdown
      style={{ marginBottom: "10px" }} // Reduce margin for compactness
    >
      {heading && (
        <InputLabel style={{ fontSize: "0.9rem" }}>{heading}</InputLabel>
      )}
      <Select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        label={heading}
        style={{ fontSize: "0.7rem", padding: "0px 0px" }} // Smaller font and padding
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <MenuItem
              key={index}
              value={item[valueField]}
              style={{ fontSize: "0.7rem" }}
            >
              {item[labelField]}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled style={{ fontSize: "0.7rem" }}>
            No options available
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default DropDown;
