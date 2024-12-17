import React from "react";
import CustomButton from "./CustomButton";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = ({ isFormValid }) => {
  const downloadPDF = () => {
    const input = document.body; // Target the entire body to capture the whole page

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm (portrait mode)
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let pdf = new jsPDF("p", "mm", "a4");
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      // Add new pages if needed
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
      disabled={!isFormValid} // Disable button if form is not valid
    >
      Download PDF
    </CustomButton>
  );
};

export default DownloadButton;
