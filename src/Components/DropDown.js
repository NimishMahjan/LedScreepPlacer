import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// DropDown Component: A reusable dropdown component with customizable fields
const DropDown = ({
  data, // Array of data objects to populate the dropdown options
  valueField, // The key used for the option's value
  labelField, // The key used for the option's label/display text
  onChange, // Function to handle selection changes
  value, // The currently selected value
  heading, // The heading/label for the dropdown
}) => {
  return (
    // FormControl to provide structure and styling for the dropdown
    <FormControl
      fullWidth // Ensures the dropdown takes the full width of its container
      variant="outlined" // Uses the outlined variant for the dropdown
      size="small" // Reduces the overall size of the dropdown
      style={{ marginBottom: "10px" }} // Adds bottom margin for spacing between elements
    >
      {/* Display the heading as the label if provided */}
      {heading && (
        <InputLabel style={{ fontSize: "0.9rem" }}>{heading}</InputLabel>
      )}

      {/* Select component for the dropdown */}
      <Select
        value={value || ""} // Sets the selected value, defaulting to an empty string if none
        onChange={(e) => onChange(e.target.value)} // Handles value change event
        label={heading} // Associates the label with the select
        style={{ fontSize: "0.7rem", padding: "0px 0px" }} // Reduces font size and padding for compactness
      >
        {/* Default disabled option prompting the user to select */}
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>

        {/* Map through the data array to create dropdown options */}
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <MenuItem
              key={index} // Unique key for each option
              value={item[valueField]} // Sets the value for the option
              style={{ fontSize: "0.7rem" }} // Reduces font size for the options
            >
              {item[labelField]} {/* Displays the label for the option*/}
            </MenuItem>
          ))
        ) : (
          // Display a fallback option if the data array is empty
          <MenuItem disabled style={{ fontSize: "0.7rem" }}>
            No options available
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default DropDown;
