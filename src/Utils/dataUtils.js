import Papa from "papaparse";

export const convertCsvToJson = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
    }

    const csvText = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true, // Use the first row as headers
        skipEmptyLines: true, // Skip any empty lines
        dynamicTyping: true, // Automatically convert values to their appropriate types
        complete: (results) => resolve(results.data),
        error: (error) => reject(error),
      });
    });
  } catch (error) {
    console.error(`Error fetching or parsing CSV:`, error);
    return [];
  }
};
