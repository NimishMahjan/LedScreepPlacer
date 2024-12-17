import { useState, useEffect } from "react";
import { convertCsvToJson } from "../Utils/dataUtils";

const useDataLoader = () => {
  const [dataMapping, setDataMapping] = useState(null);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const screendata = await convertCsvToJson("/Data/ScreenMFR.csv");
        const mediadata = await convertCsvToJson("/Data/MediaPlayerMFR.csv");
        const mountdata = await convertCsvToJson("/Data/Mounts.csv");
        const receptacledata = await convertCsvToJson(
          "/Data/ReceptacleBox.csv"
        );

        setDataMapping({
          screen: screendata,
          media: mediadata,
          mount: mountdata,
          receptacle: receptacledata,
        });
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadAllData();
  }, []);

  return dataMapping;
};

export default useDataLoader;
