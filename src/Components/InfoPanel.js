import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import DimensionsCard from "./DimensionsCard";
import NotesCard from "./NotesCard";
import ProjectInfoCard from "./ProjectInfoCard";

const InfoPanel = ({
  selectedItems,
  dataMapping,
  nicheGap,
  mediaPlayerDepth,
  mountDepth,
  nicheDepthVar,
}) => {
  // Extract selected screen data
  const selectedScreen = dataMapping?.screen?.find(
    (item) => item["Screen MFR"] === selectedItems.screen
  );

  const screenWidth = selectedScreen
    ? parseFloat(selectedScreen.Width) || 0
    : 0;
  const screenHeight = selectedScreen
    ? parseFloat(selectedScreen.Height) || 0
    : 0;
  const screenDepth = selectedScreen
    ? parseFloat(selectedScreen.Depth) || 0
    : 0;
  const nicheDepth =
    screenDepth + Math.max(mediaPlayerDepth, mountDepth) + nicheDepthVar;
  // Screen dimensions
  const screenDimensions = [
    {
      label: "Height",
      value: `${selectedScreen?.Height || 0}"`,
    },
    {
      label: "Width",
      value: `${selectedScreen?.Width || 0}"`,
    },
    {
      label: "Depth",
      value: `${selectedScreen?.Depth || 0}"`,
    },
  ];

  // Niche dimensions

  const nicheWidth = screenWidth + nicheGap;
  const nicheHeight = screenHeight + nicheGap;

  const nicheDimensions = [
    {
      label: "Niche Height",
      value: `${nicheHeight || 0}"`,
    },
    {
      label: "Niche Width",
      value: `${nicheWidth || 0}"`,
    },
    {
      label: "Niche Depth",
      value: `${nicheDepth || 0}"`,
    },
  ];

  // Extract selected receptacle box data
  const selectedReceptacle = dataMapping?.receptacle?.find(
    (item) => item["MFG. PART"] === selectedItems.receptacle
  );

  // Receptacle dimensions
  const receptacleDimensions = [
    {
      label: "Height",
      value: `${selectedReceptacle?.["Height (in)"] || 0}"`,
    },
    {
      label: "Width",
      value: `${selectedReceptacle?.["Width (in)"] || 0}"`,
    },
    {
      label: "Depth",
      value: `${selectedReceptacle?.["Depth (in)"] || 0}"`,
    },
  ];

  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      {/* Niche and Screen Dimensions Cards */}
      <Grid item xs={12} md={6}>
        <Card style={{ height: "100%" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <DimensionsCard
                  title="Screen Dimensions"
                  dimensions={screenDimensions}
                />
              </Grid>
              <Grid item xs={12}>
                <DimensionsCard
                  title="Niche Dimensions"
                  dimensions={nicheDimensions}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Notes Card for Receptacle Dimensions */}
      <Grid item xs={12} md={6}>
        <Card style={{ height: "100%" }}>
          <CardContent>
            <NotesCard dimensions={receptacleDimensions} />
          </CardContent>
        </Card>
      </Grid>

      {/* Project Info Card */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <ProjectInfoCard
              selectedScreen={selectedScreen}
              orientation={selectedItems.orientation}
              installationType={selectedItems.installationType}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoPanel;
