import React from "react";
import Configuration from "../Components/Configuration";

const ConfigurationContainer = ({
  dataMapping,
  selectedItems,
  setSelectedItems,
  setShapes,
  handleDropdownChange,
  setOrientation,
  setInstallationType,
  floorDistance,
  setFloorDistance,
  nicheDepthVar,
  setNicheDepthVar,
  screenWidth,
  screenHeight,
  nicheGap,
  setNicheGap,
  setShowNiche,
}) => (
  <div className="configuration-panel">
    <Configuration
      dataMapping={dataMapping}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      setShapes={setShapes}
      screenWidth={screenWidth}
      screenHeight={screenHeight}
      handleDropdownChange={handleDropdownChange}
      setOrientation={setOrientation}
      setInstallationType={setInstallationType}
      floorDistance={floorDistance}
      setFloorDistance={setFloorDistance}
      nicheDepthVar={nicheDepthVar}
      setNicheDepthVar={setNicheDepthVar}
      nicheGap={nicheGap}
      setNicheGap={setNicheGap}
    />
  </div>
);

export default ConfigurationContainer;
