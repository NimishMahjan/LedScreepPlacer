import React from "react";
import { Typography, Box } from "@mui/material";
import DimensionsCard from "./DimensionsCard";

const NotesCard = ({ dimensions = [] }) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Notes
      </Typography>
      <Typography variant="body2" gutterBottom>
        Install recessed receptacle box with:
      </Typography>
      <Typography variant="body2">2x Terminated Power Outlets</Typography>
      <Typography variant="body2" gutterBottom>
        1x Terminated Data CAT5 Ethernet Outlet
      </Typography>

      {Array.isArray(dimensions) && dimensions.length > 0 ? (
        <Box sx={{ marginTop: 2 }}>
          <DimensionsCard
            title="Receptacle Dimensions"
            dimensions={dimensions}
          />
        </Box>
      ) : (
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          No notes available
        </Typography>
      )}
    </Box>
  );
};

export default NotesCard;
