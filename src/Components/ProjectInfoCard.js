import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import logo from "../Logo/logo.jpg";

const ProjectInfoCard = ({ selectedScreen, orientation, installationType }) => {
  // Get current date in the format MM/DD/YYYY
  const currentDate = new Date().toLocaleDateString("en-US");

  // Extract screen size from selectedScreen
  const screenSize = selectedScreen
    ? `${selectedScreen.Make || ""} ${selectedScreen["Screen MFR"] || ""}`
    : "N/A";

  // Dynamic description based on orientation and installation type
  const description = `${
    orientation.charAt(0).toUpperCase() + orientation.slice(1)
  } + ${installationType.charAt(0).toUpperCase() + installationType.slice(1)}`;

  return (
    <Card style={{ width: "100%", marginTop: "20px" }}>
      <CardContent>
        {/* Logo and Contact Info */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <img src={logo} alt="SignCast Media" style={{ height: "50px" }} />
          </Box>
          <Box textAlign="right">
            <Typography variant="body2" fontWeight="bold">
              Description:
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>

        {/* Table with Project Information */}
        <Box mt={2} style={{ backgroundColor: "#fff8e1", padding: "10px" }}>
          <Grid container spacing={1}>
            {/* Drawn */}
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="bold">
                Drawn
              </Typography>
              <Typography variant="body2">SignCast</Typography>
            </Grid>

            {/* Dimensions In Inches */}
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="bold">
                Dimensions In Inches
              </Typography>
              <Typography variant="body2">{screenSize}</Typography>
            </Grid>

            {/* Date */}
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="bold">
                Date
              </Typography>
              <Typography variant="body2">{currentDate}</Typography>
            </Grid>

            {/* Sheet */}
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="bold">
                Sheet
              </Typography>
              <Typography variant="body2">1 of 1</Typography>
            </Grid>

            {/* Revision */}
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="bold">
                Revision
              </Typography>
              <Typography variant="body2">00</Typography>
            </Grid>

            {/* Department */}
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="bold">
                Department
              </Typography>
              <Typography variant="body2">Installations</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectInfoCard;
