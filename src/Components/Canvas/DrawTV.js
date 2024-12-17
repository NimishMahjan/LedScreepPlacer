const drawTV = (
  context,
  tvX,
  tvY,
  tvWidth,
  tvHeight,
  screenLabel,
  screenWidth,
  screenHeight,
  nicheGap
) => {
  const bezelThickness = 5;
  const padding = nicheGap * 10;

  // Niche box dimensions
  const nicheX = tvX - padding;
  const nicheY = tvY - padding;
  const nicheWidth = tvWidth + 2 * padding;
  const nicheHeight = tvHeight + 2 * padding;
  // Draw the TV bezel
  context.fillStyle = "#222";
  context.fillRect(tvX, tvY, tvWidth, tvHeight);

  // Draw the screen area
  context.fillStyle = "#fff";
  context.fillRect(
    tvX + bezelThickness,
    tvY + bezelThickness,
    tvWidth - 2 * bezelThickness,
    tvHeight - 2 * bezelThickness
  );

  // Draw TV label inside the TV
  context.fillStyle = "#000";
  context.font = "16px Arial";
  context.textAlign = "center";
  context.fillText(screenLabel, tvX + tvWidth / 2, tvY + 30);

  // Draw lines and labels for width and height from the CSV file
  context.strokeStyle = "#000";
  context.lineWidth = 1;
  context.font = "14px Arial";
  context.fillStyle = "#000";

  // --- Draw Width Line Above Niche Box ---
  context.beginPath();
  context.moveTo(nicheX, nicheY - 20);
  context.lineTo(nicheX + nicheWidth, nicheY - 20);
  context.stroke();

  // Arrowheads for width line
  context.beginPath();
  context.moveTo(nicheX, nicheY - 20);
  context.lineTo(nicheX + 5, nicheY - 25);
  context.lineTo(nicheX + 5, nicheY - 15);
  context.closePath();
  context.fill();

  context.beginPath();
  context.moveTo(nicheX + nicheWidth, nicheY - 20);
  context.lineTo(nicheX + nicheWidth - 5, nicheY - 25);
  context.lineTo(nicheX + nicheWidth - 5, nicheY - 15);
  context.closePath();
  context.fill();

  // Label for width
  context.fillText(
    `Width: ${screenWidth}"`,
    nicheX + nicheWidth / 2,
    nicheY - 25
  );

  // --- Draw Height Line to the Right of Niche Box ---
  context.beginPath();
  context.moveTo(nicheX + nicheWidth + 20, nicheY);
  context.lineTo(nicheX + nicheWidth + 20, nicheY + nicheHeight);
  context.stroke();

  // Arrowheads for height line
  context.beginPath();
  context.moveTo(nicheX + nicheWidth + 20, nicheY);
  context.lineTo(nicheX + nicheWidth + 25, nicheY + 5);
  context.lineTo(nicheX + nicheWidth + 15, nicheY + 5);
  context.closePath();
  context.fill();

  context.beginPath();
  context.moveTo(nicheX + nicheWidth + 20, nicheY + nicheHeight);
  context.lineTo(nicheX + nicheWidth + 25, nicheY + nicheHeight - 5);
  context.lineTo(nicheX + nicheWidth + 15, nicheY + nicheHeight - 5);
  context.closePath();
  context.fill();

  // Label for height
  context.textAlign = "left";
  context.fillText(
    `Height: ${screenHeight}"`,
    nicheX + nicheWidth + 30, // Move label 30 pixels to the right
    nicheY + nicheHeight / 2
  );
};

export default drawTV;
