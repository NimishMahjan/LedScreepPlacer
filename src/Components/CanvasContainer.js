import React from "react";
import Canvas from "../Components/Canvas/Canvas";

const CanvasContainer = ({
  canvasDimensions,
  screenLabel,
  selectedItems,
  showNiche,
  nicheGap,
  setNicheGap,
  floorDistance,
  screenDepth,
  mediaPlayerDepth,
  screenWidth,
  screenHeight,
  mountDepth,
  nicheDepthVar,
  screenSize,
}) => {
  return (
    <div className="canvas-container">
      <Canvas
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        screenLabel={screenLabel}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        showReceptacle={!!selectedItems.receptacle}
        showNiche={showNiche}
        nicheGap={nicheGap}
        setNicheGap={setNicheGap}
        floorDistance={floorDistance}
        orientation={selectedItems.orientation}
        screenDepth={screenDepth}
        mediaPlayerDepth={mediaPlayerDepth}
        mountDepth={mountDepth}
        nicheDepthVar={nicheDepthVar}
        screenSize={screenSize}
      />
    </div>
  );
};

export default CanvasContainer;
