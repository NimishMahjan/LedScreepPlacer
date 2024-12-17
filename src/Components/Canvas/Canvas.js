import React, { useRef, useEffect } from "react";
import drawTV from "./DrawTV";
import drawReceptacle from "./DrawReceptacle";
import drawNicheBox from "./DrawNicheBox";
import drawFloorLine from "./DrawFloorLine";
import drawAxes from "./DrawAxes";

const Canvas = ({
  width = 600, // Default canvas width
  height = 500, // Default canvas height
  screenLabel = null, // Label to display on the screen (TV)
  showReceptacle = false, // Flag to determine if the receptacle should be shown
  showNiche = false, // Flag to determine if the niche box should be shown
  floorDistance = 50, // Distance between floor and bottom of the TV
  orientation = "horizontal", // Screen orientation: "horizontal" or "vertical"
  screenSize, // Screen size in inches
  screenDepth, // Default screen depth in inches
  mediaPlayerDepth, // Media player depth in inches
  mountDepth, // Mount depth in inches
  depthVariance = 0.5, // Depth variance in inches
  screenWidth, // Width of the screen
  screenHeight, // Height of the screen
  nicheGap, // Gap between the niche box and screen
  setNicheGap, // Function to update niche gap
}) => {
  // Create a ref to the canvas element
  const ref = useRef();

  // Set default niche gap based on screen size
  useEffect(() => {
    if (screenSize) {
      setNicheGap(screenSize <= 55 ? 1.5 : 2); // 1.5" for screens <= 55", 2" for screens > 55"
    }
  }, [screenSize, setNicheGap]);

  // Draw on canvas when dependencies change
  useEffect(() => {
    const canvas = ref.current; // Get the canvas element
    const context = canvas.getContext("2d"); // Get the 2D rendering context

    // Clear the canvas before redrawing
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the floor line
    drawFloorLine(context, width, height);

    // Set TV dimensions based on orientation
    let tvHeight = 160; // Default TV height for horizontal orientation
    let tvWidth = 300; // Default TV width for horizontal orientation

    if (orientation === "vertical") {
      tvHeight = 300; // TV height for vertical orientation
      tvWidth = 160; // TV width for vertical orientation
    }

    // Calculate TV position
    const tvX = (width - tvWidth) / 2; // Center the TV horizontally
    const floorLineY = height - 50; // Position of the floor line
    const centerY = (floorLineY - tvHeight) / 2 + tvHeight / 2; // Center vertically above the floor line
    const tvY = centerY - tvHeight / 2; // Final Y position for the TV

    // Draw TV with provided parameters
    if (screenLabel) {
      drawTV(
        context,
        tvX,
        tvY,
        tvWidth,
        tvHeight,
        screenLabel,
        screenWidth,
        screenHeight,
        nicheGap
      );
    }

    // Draw axes for floor distance label positioning
    drawAxes(context, width, height, floorDistance, tvHeight, tvX);

    // Draw niche box if the flag is enabled
    if (showNiche) {
      drawNicheBox(context, tvX, tvY, tvWidth, tvHeight, orientation, nicheGap);
    }

    // Draw receptacle if the flag is enabled
    if (showReceptacle) {
      drawReceptacle(context, tvX, tvY, tvWidth, tvHeight);
    }
  }, [
    width,
    height,
    screenLabel,
    showReceptacle,
    showNiche,
    nicheGap,
    floorDistance,
    orientation,
    screenSize,
    screenDepth,
    mediaPlayerDepth,
    mountDepth,
    depthVariance,
    screenWidth,
    screenHeight,
  ]);

  // Return the canvas element wrapped in a div
  return (
    <div>
      <canvas
        ref={ref} // Attach the ref to the canvas element
        width={width} // Set the canvas width
        height={height} // Set the canvas height
        style={{ border: "1px solid #ccc", backgroundColor: "#fff" }} // Add a border and background color
      />
    </div>
  );
};

export default Canvas; // Export the Canvas component as default
