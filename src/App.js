// src/App.js

import React, { useState } from "react";
import useDataLoader from "./Hooks/useDataLoader";
import { handleDropdownChange as handleDropdownChangeUtil } from "./Utils/utils";
import "./App.css";
import CanvasContainer from "./Components/CanvasContainer";
import InfoPanelContainer from "./Components/InfoPanelContainer";
import ConfigurationContainer from "./Components/ConfigurationContainer";

function App() {
  const dataMapping = useDataLoader();

  const [selectedItems, setSelectedItems] = useState({
    screen: null,
    media: null,
    mount: null,
    receptacle: null,
    orientation: "horizontal",
    installationType: "niche",
  });

  const [shapes, setShapes] = useState([]);
  const [screenLabel, setScreenLabel] = useState("");
  const [showNiche, setShowNiche] = useState(true);
  const [nicheGap, setNicheGap] = useState(1.5);
  const [floorDistance, setFloorDistance] = useState(50);
  const [nicheDepthVar, setNicheDepthVar] = useState(0.5);
  const [mediaPlayerDepth, setMediaPlayerDepth] = useState(1.5);
  const [mountDepth, setMountDepth] = useState(1);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenSize, setScreenSize] = useState(0);

  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 600,
    height: 500,
  });

  const handleOrientationChange = (orientation) => {
    setSelectedItems({ ...selectedItems, orientation });
    setCanvasDimensions(
      orientation === "vertical"
        ? { width: 500, height: 600 }
        : { width: 600, height: 500 }
    );
  };

  if (!dataMapping) return <div className="loading">Loading...</div>;

  return (
    <div className="app-container">
      <div className="title">SignCast Media</div>
      <div className="main-grid">
        <CanvasContainer
          dataMapping={dataMapping}
          canvasDimensions={canvasDimensions}
          screenLabel={screenLabel}
          selectedItems={selectedItems}
          showNiche={showNiche}
          nicheGap={nicheGap}
          setNicheGap={setNicheGap}
          floorDistance={floorDistance}
          screenDepth={0}
          mediaPlayerDepth={mediaPlayerDepth}
          mountDepth={mountDepth}
          nicheDepthVar={nicheDepthVar}
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          screenSize={screenSize}
        />
        <InfoPanelContainer
          dataMapping={dataMapping}
          selectedItems={selectedItems}
          nicheDepth={nicheDepthVar}
          nicheGap={nicheGap}
          mediaPlayerDepth={mediaPlayerDepth}
          mountDepth={mountDepth}
          nicheDepthVar={nicheDepthVar}
        />
        <ConfigurationContainer
          dataMapping={dataMapping}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          setShapes={setShapes}
          handleDropdownChange={(type, value) =>
            handleDropdownChangeUtil(
              type,
              value,
              dataMapping,
              selectedItems,
              setSelectedItems,
              setShapes,
              setScreenLabel,
              setMediaPlayerDepth,
              setMountDepth,
              setScreenWidth,
              setScreenHeight,
              setScreenSize
            )
          }
          setOrientation={handleOrientationChange}
          setInstallationType={(type) => {
            setSelectedItems({ ...selectedItems, installationType: type });
            setShowNiche(type === "niche");
          }}
          floorDistance={floorDistance}
          setFloorDistance={setFloorDistance}
          nicheDepthVar={nicheDepthVar}
          setNicheDepthVar={setNicheDepthVar}
          nicheGap={nicheGap}
          setNicheGap={setNicheGap}
          setShowNiche={setShowNiche}
          screenSize={screenSize}
        />
      </div>
    </div>
  );
}

export default App;
