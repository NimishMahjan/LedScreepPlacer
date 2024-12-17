const drawAxes = (context, width, height, floorDistance, tvX) => {
  const floorLineY = height - 50; // Position of the floor line
  const centerX = width / 2;
  const centerY = (floorLineY + 0) / 2; // Midway between the top of the canvas and the floor line

  context.strokeStyle = "#000";
  context.lineWidth = 1;
  context.setLineDash([5, 5]);

  // Draw vertical axis starting from the floor line up to the top of the canvas
  context.beginPath();
  context.moveTo(centerX, floorLineY);
  context.lineTo(centerX, 0);
  context.stroke();

  // Draw horizontal axis at the midway point
  context.beginPath();
  context.moveTo(0, centerY);
  context.lineTo(width, centerY);
  context.stroke();

  context.setLineDash([]);

  // Draw red center dot where the axes intersect
  context.fillStyle = "#f00"; // Red color for visibility
  context.beginPath();
  context.arc(centerX, centerY, 5, 0, 2 * Math.PI);
  context.fill();

  // Label the center dot
  context.fillStyle = "#000";
  context.font = "14px Arial";
  context.textAlign = "center";
  context.fillText("Center", centerX, centerY - 10);

  // Draw dashed vertical line 20 pixels to the left of the TV's left bezel
  const dashedLineX = tvX - 20;

  context.strokeStyle = "#000";
  context.setLineDash([5, 5]); // Dashed line pattern
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(dashedLineX, floorLineY);
  context.lineTo(dashedLineX, centerY);
  context.stroke();

  // Display the floor distance label next to the dashed line
  context.setLineDash([]); // Reset to solid for text
  context.fillStyle = "#000";
  context.font = "14px Arial";
  context.textAlign = "right";
  context.fillText(
    `${floorDistance}"`,
    dashedLineX - 5,
    (floorLineY + centerY) / 2
  );
};

export default drawAxes;
