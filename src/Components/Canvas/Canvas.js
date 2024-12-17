import React, { useRef, useEffect } from "react";
import drawTV from "./DrawTV";
import drawReceptacle from "./DrawReceptacle";
import drawNicheBox from "./DrawNicheBox";
import drawFloorLine from "./DrawFloorLine";
import drawAxes from "./DrawAxes";

const Canvas = ({
  width = 600,
  height = 500,
  screenLabel = null,
  showReceptacle = false,
  showNiche = false,
  floorDistance = 50,
  orientation = "horizontal",
  screenSize, // Screen size in inches
  screenDepth, // Default screen depth in inches
  mediaPlayerDepth, // Default media player depth in inches
  mountDepth, // Default mount depth in inches
  depthVariance = 0.5, // Default depth variance in inches
  screenWidth,
  screenHeight,
  nicheGap,
  setNicheGap, // Function to update niche gap
}) => {
  const ref = useRef();

  // Set default niche gap based on screen size
  useEffect(() => {
    if (screenSize) {
      setNicheGap(screenSize <= 55 ? 1.5 : 2);
    }
  }, [screenSize, setNicheGap]);

  // Draw on canvas
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawFloorLine(context, width, height);

    // Set TV dimensions based on orientation
    let tvHeight = 160;
    let tvWidth = 300;

    if (orientation === "vertical") {
      tvHeight = 300;
      tvWidth = 160;
    }

    // Calculate TV position
    const tvX = (width - tvWidth) / 2;
    const floorLineY = height - 50;
    const centerY = (floorLineY - tvHeight) / 2 + tvHeight / 2;
    const tvY = centerY - tvHeight / 2;

    // Draw TV
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

    // Draw axes and pass tvX for floor distance label positioning
    drawAxes(context, width, height, floorDistance, tvHeight, tvX);

    // Draw niche box if enabled
    if (showNiche) {
      drawNicheBox(context, tvX, tvY, tvWidth, tvHeight, orientation, nicheGap);
    }

    // Draw receptacle if enabled
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

  return (
    <div>
      <canvas
        ref={ref}
        width={width}
        height={height}
        style={{ border: "1px solid #ccc", backgroundColor: "#fff" }}
      />
    </div>
  );
};

export default Canvas;
