import React from "react";
import CustomButton from "./CustomButton";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = () => {
  const downloadPDF = () => {
    // Target the entire body to capture the whole page
    const input = document.body;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Calculate dimensions based on the canvas size
      const imgWidth = 210; // A4 width in mm (portrait mode)
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let pdf = new jsPDF("p", "mm", "a4");
      let position = 0;

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      // If the image height exceeds the first page, add new pages
      if (imgHeight > pageHeight) {
        while (position + pageHeight < imgHeight) {
          position += pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, -position, imgWidth, imgHeight);
        }
      }

      pdf.save("installation-diagram.pdf");
    });
  };

  return (
    <CustomButton
      type="button"
      variant="contained"
      color="primary"
      onClick={downloadPDF}
    >
      Download PDF
    </CustomButton>
  );
};

export default DownloadButton;
