import React, { useEffect } from "react";
import DropDown from "./DropDown";
import CustomToggleButton from "./CustomToggleButton";
import CustomCard from "./CustomCard";
import { TextField, Typography, Box } from "@mui/material";

const Configuration = ({
  dataMapping = {},
  selectedItems = {},
  setSelectedItems,
  handleDropdownChange,
  setOrientation,
  setInstallationType,
  floorDistance,
  setFloorDistance,
  nicheDepthVar,
  setNicheDepthVar,
  nicheGap,
  setNicheGap,
  screenSize,
}) => {
  useEffect(() => {
    if (screenSize) {
      setNicheGap(screenSize <= 55 ? 1.5 : 2);
    }
  }, [screenSize, setNicheGap]);
  return (
    <Box className="configuration" sx={{ fontSize: "0.9em" }}>
      <Typography variant="h6" sx={{ marginBottom: "5px" }}>
        Configuration
      </Typography>

      {/* Dropdowns for Screen, Media Player, Mount, and Receptacle Box */}
      <DropDown
        data={dataMapping?.screen || []}
        valueField="Screen MFR"
        labelField="Screen MFR"
        onChange={(value) => handleDropdownChange("screen", value)}
        value={selectedItems.screen || ""}
        heading="Screen"
      />
      <DropDown
        data={dataMapping?.media || []}
        valueField="MFG. PART"
        labelField="MFG. PART"
        onChange={(value) => handleDropdownChange("media", value)}
        value={selectedItems.media || ""}
        heading="Media Player"
      />
      <DropDown
        data={dataMapping?.mount || []}
        valueField="MFG. PART"
        labelField="MFG. PART"
        onChange={(value) => handleDropdownChange("mount", value)}
        value={selectedItems.mount || ""}
        heading="Mount"
      />
      <DropDown
        data={dataMapping?.receptacle || []}
        valueField="MFG. PART"
        labelField="MFG. PART"
        onChange={(value) => handleDropdownChange("receptacle", value)}
        value={selectedItems.receptacle || ""}
        heading="Receptacle Box"
      />

      {/* Orientation Toggle Buttons */}
      <Box sx={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        <CustomToggleButton
          selectedValue={selectedItems.orientation}
          setter={setOrientation}
          values={["vertical", "horizontal"]}
          labels={["Vertical", "Horizontal"]}
        />
      </Box>

      <Box sx={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        <CustomToggleButton
          selectedValue={selectedItems.installationType}
          setter={setInstallationType}
          values={["niche", "flatWall"]}
          labels={["Niche", "Flat Wall"]}
        />
      </Box>

      {/* Floor Distance Input Field */}
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

      {/* Niche Depth Input Field */}
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

      {/* Niche Gap Input Field */}
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

      {/* Custom Card for Description */}
      <Box className="custom-card" sx={{ marginTop: "5px" }}>
        <CustomCard title="Description" />
      </Box>
    </Box>
  );
};

export default Configuration;
