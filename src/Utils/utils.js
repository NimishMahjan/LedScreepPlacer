// utils.js
export const handleDropdownChange = (
  type,
  selectedValue,
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
) => {
  const selectedData = dataMapping[type].find(
    (item) =>
      item["MFG. PART"] === selectedValue ||
      item["Screen MFR"] === selectedValue
  );

  if (selectedData) {
    setSelectedItems((prev) => ({
      ...prev,
      [type]: selectedValue,
    }));

    // Update the screen label if the type is 'screen'
    if (type === "screen" && setScreenLabel) {
      setScreenLabel(selectedValue);
      setScreenWidth(parseFloat(selectedData.Width || 0));
      setScreenHeight(parseFloat(selectedData.Height || 0));
      const size = parseFloat(selectedData["Screen Size"] || 0);
      setScreenSize(size);
    }

    // Set media player depth
    if (type === "media" && setMediaPlayerDepth) {
      const mediaDepth = parseFloat(selectedData["Depth (in)"] || 0);
      setMediaPlayerDepth(mediaDepth);
    }

    // Set mount depth
    if (type === "mount" && setMountDepth) {
      const mountDepth = parseFloat(selectedData["Depth (in)"] || 0);
      setMountDepth(mountDepth);
    }

    setShapes((prevShapes) => {
      const filteredShapes = prevShapes.filter((shape) => shape.label !== type);

      const defaultDimensions = { width: 50, height: 50 };
      const width =
        parseFloat(selectedData["Width (in)"] || selectedData["Width"]) ||
        defaultDimensions.width;
      const height =
        parseFloat(selectedData["Height (in)"] || selectedData["Height"]) ||
        defaultDimensions.height;

      const newShape = {
        label: type,
        shapeWidth: width * 5,
        shapeHeight: height * 5,
      };

      return [...filteredShapes, newShape];
    });
  }
};
