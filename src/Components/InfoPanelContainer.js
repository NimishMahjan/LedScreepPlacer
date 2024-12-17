// src/Components/InfoPanelContainer.js
import React from "react";
import InfoPanel from "../Components/InfoPanel";

const InfoPanelContainer = ({
  dataMapping,
  selectedItems,
  nicheDepth,
  nicheGap,
  mediaPlayerDepth,
  mountDepth,
  nicheDepthVar,
}) => (
  <div className="info-panel">
    <InfoPanel
      dataMapping={dataMapping}
      selectedItems={selectedItems}
      nicheDepth={nicheDepth}
      mediaPlayerDepth={mediaPlayerDepth}
      mountDepth={mountDepth}
      nicheGap={nicheGap}
      nicheDepthVar={nicheDepthVar}
    />
  </div>
);

export default InfoPanelContainer;
