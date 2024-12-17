const drawReceptacle = (context, tvX, tvY, tvWidth, tvHeight) => {
  const receptacleWidth = 80;
  const receptacleHeight = 50;

  // Calculate the bottom bezel of the TV
  const bottomOfTV = tvY + tvHeight;

  // Calculate the midpoint between the center and the bottom bezel of the TV
  const centerY = tvY + tvHeight / 2;
  const receptacleY = (centerY + bottomOfTV) / 2 - receptacleHeight / 2;

  // Center the receptacle horizontally relative to the TV
  const receptacleX = tvX + (tvWidth - receptacleWidth) / 2;

  // Draw the receptacle box
  context.fillStyle = "#fff";
  context.strokeStyle = "#000";
  context.lineWidth = 1.5;
  context.setLineDash([5, 5]);
  context.strokeRect(
    receptacleX,
    receptacleY,
    receptacleWidth,
    receptacleHeight
  );
  context.fillRect(receptacleX, receptacleY, receptacleWidth, receptacleHeight);
  context.setLineDash([]);

  // Label the receptacle box
  context.fillStyle = "#000";
  context.font = "14px Arial";
  context.textAlign = "center";
  context.fillText(
    "Receptacle Box",
    receptacleX + receptacleWidth / 2,
    receptacleY + receptacleHeight / 2 + 5
  );
};

export default drawReceptacle;
