import React, { useEffect } from "react";
import DropDown from "./DropDown";
import CustomToggleButton from "./CustomToggleButton";
import CustomCard from "./CustomCard";
import { TextField, Typography, Box } from "@mui/material";

const Configuration = ({
  dataMapping = {}, // Object containing data for dropdowns
  selectedItems = {}, // Object containing selected items for each dropdown
  setSelectedItems, // Function to update selected items
  handleDropdownChange, // Function to handle dropdown changes
  setOrientation, // Function to set screen orientation
  setInstallationType, // Function to set installation type
  floorDistance, // Floor distance value
  setFloorDistance, // Function to update floor distance
  nicheDepthVar, // Niche depth variance value
  setNicheDepthVar, // Function to update niche depth variance
  nicheGap, // Niche gap value
  setNicheGap, // Function to update niche gap
  screenSize, // Screen size in inches
}) => {
  // Set the default niche gap based on the screen size
  useEffect(() => {
    if (screenSize) {
      setNicheGap(screenSize <= 55 ? 1.5 : 2); // 1.5" for screens <= 55", 2" for screens > 55"
    }
  }, [screenSize, setNicheGap]);

  return (
    <Box className="configuration" sx={{ fontSize: "0.9em" }}>
      {/* Section Title */}
      <Typography variant="h6" sx={{ marginBottom: "5px" }}>
        Configuration
      </Typography>

      {/* Dropdown for selecting Screen */}
      <DropDown
        data={dataMapping?.screen || []}
        valueField="Screen MFR"
        labelField="Screen MFR"
        onChange={(value) => handleDropdownChange("screen", value)}
        value={selectedItems.screen || ""}
        heading="Screen"
      />

      {/* Dropdown for selecting Media Player */}
      <DropDown
        data={dataMapping?.media || []}
        valueField="MFG. PART"
        labelField="MFG. PART"
        onChange={(value) => handleDropdownChange("media", value)}
        value={selectedItems.media || ""}
        heading="Media Player"
      />

      {/* Dropdown for selecting Mount */}
      <DropDown
        data={dataMapping?.mount || []}
        valueField="MFG. PART"
        labelField="MFG. PART"
        onChange={(value) => handleDropdownChange("mount", value)}
        value={selectedItems.mount || ""}
        heading="Mount"
      />

      {/* Dropdown for selecting Receptacle Box */}
      <DropDown
        data={dataMapping?.receptacle || []}
        valueField="MFG. PART"
        labelField="MFG. PART"
        onChange={(value) => handleDropdownChange("receptacle", value)}
        value={selectedItems.receptacle || ""}
        heading="Receptacle Box"
      />

      {/* Toggle Buttons for Orientation (Vertical or Horizontal) */}
      <Box sx={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        <CustomToggleButton
          selectedValue={selectedItems.orientation}
          setter={setOrientation}
          values={["vertical", "horizontal"]}
          labels={["Vertical", "Horizontal"]}
        />
      </Box>

      {/* Toggle Buttons for Installation Type (Niche or Flat Wall) */}
      <Box sx={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        <CustomToggleButton
          selectedValue={selectedItems.installationType}
          setter={setInstallationType}
          values={["niche", "flatWall"]}
          labels={["Niche", "Flat Wall"]}
        />
      </Box>

      {/* Input Field for Floor Distance */}
      <TextField
        label="Floor Distance"
        variant="outlined"
        value={floorDistance}
        onChange={(e) => {
          const value = parseFloat(e.target.value);
          setFloorDistance(isNaN(value) ? "" : value);
        }}
        fullWidth
        size="small"
        type="number"
        inputProps={{ min: "0" }}
        sx={{ marginTop: "5px" }}
      />

      {/* Input Field for Niche Depth Variance */}
      <TextField
        label="Niche Depth Var"
        variant="outlined"
        value={nicheDepthVar}
        onChange={(e) => {
          const value = parseFloat(e.target.value);
          setNicheDepthVar(isNaN(value) ? "" : value);
        }}
        fullWidth
        size="small"
        type="number"
        inputProps={{ step: "0.1", min: "0" }}
        sx={{ marginTop: "5px" }}
      />

      {/* Input Field for Niche Gap */}
      <TextField
        label="Niche Gap (inches)"
        variant="outlined"
        value={nicheGap}
        onChange={(e) => {
          const value = parseFloat(e.target.value);
          setNicheGap(isNaN(value) ? "" : value);
        }}
        fullWidth
        size="small"
        type="number"
        inputProps={{ step: "0.1", min: "0" }}
        sx={{ marginTop: "5px" }}
      />

      {/* Custom Card for Additional Description */}
      <Box className="custom-card" sx={{ marginTop: "5px" }}>
        <CustomCard title="Description" />
      </Box>
    </Box>
  );
};

export default Configuration;
