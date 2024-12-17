import React, { useState } from "react";
import CustomTextField from "./CustomTextField";
import { Card, CardContent, Typography } from "@mui/material";
import DownloadButton from "./DownloadButton";

const CustomCard = ({ title }) => {
  // State to track form fields
  const [formData, setFormData] = useState({
    projectTitle: "", // State for Project Title input
    drawer: "", // State for Drawer input
    department: "", // State for Department input
    screenSize: "", // State for Screen Size input
    date: "", // State for Date input
  });

  // Handler to update form data
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value })); // Update specific field with new value
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== "" // Ensure each field is not empty
  );

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      {" "}
      {/* Card component for the form */}
      <CardContent>
        {/* Title of the Card */}
        <Typography gutterBottom variant="h6" align="center">
          {title} {/* Display the title prop */}
        </Typography>

        {/* Subtitle/Instructions */}
        <Typography gutterBottom color="textSecondary" variant="body2">
          Fill up form and click on submit to download PDF
        </Typography>

        {/* Form with CustomTextFields and DownloadButton */}
        <form>
          {/* Project Title Input */}
          <CustomTextField
            label="Project Title"
            placeholder="Enter Project Title"
            value={formData.projectTitle}
            onChange={(e) => handleInputChange("projectTitle", e.target.value)}
          />

          {/* Drawer Input */}
          <CustomTextField
            label="Drawer"
            placeholder="Enter Drawer"
            value={formData.drawer}
            onChange={(e) => handleInputChange("drawer", e.target.value)}
          />

          {/* Department Input */}
          <CustomTextField
            label="Department"
            placeholder="Enter Department Name"
            value={formData.department}
            onChange={(e) => handleInputChange("department", e.target.value)}
          />

          {/* Screen Size Input */}
          <CustomTextField
            label="Screen Size"
            placeholder="Enter Screen Size"
            value={formData.screenSize}
            onChange={(e) => handleInputChange("screenSize", e.target.value)}
          />

          {/* Date Input */}
          <CustomTextField
            label="Date"
            placeholder="Enter Date (mm/dd/yyyy)"
            value={formData.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
          />

          {/* Download Button - Enabled only if form is valid */}
          <DownloadButton isFormValid={isFormValid} />
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
