import React from "react";
import CustomTextField from "./CustomTextField";
import { Card, CardContent, Typography } from "@mui/material";
import DownloadButton from "./DownloadButton";

const CustomCard = ({ title, children }) => {
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" align="center">
          {title}
        </Typography>
        <Typography gutterBottom color="textSecondary" variant="body2">
          Fill up form and click on submit to download pdf
        </Typography>
        <form>
          <CustomTextField
            label="Project Title"
            placeholder="Enter Project Title"
          />
          <CustomTextField label="Drawer" placeholder="Enter Drawer" />
          <CustomTextField
            label="Department"
            placeholder="Enter Department Name"
          />
          <CustomTextField
            label="Screen Size"
            placeholder="Enter Screen Size"
          />
          <CustomTextField label="Date" placeholder="Enter Date (mm/dd/yyyy)" />
          <DownloadButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
