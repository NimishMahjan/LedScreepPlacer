import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const DimensionsCard = ({ title, dimensions = [] }) => {
  return (
    <Card className="dimensions-card">
      <CardContent>
        <Typography variant="h8" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        {Array.isArray(dimensions) && dimensions.length > 0 ? (
          dimensions.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              mb={1}
            >
              <Typography variant="body2" fontWeight="bold">
                {item.label}
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No dimensions available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DimensionsCard;
