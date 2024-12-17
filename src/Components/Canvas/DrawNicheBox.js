const drawNicheBox = (
  context,
  tvX,
  tvY,
  tvWidth,
  tvHeight,
  orientation,
  nicheGap
) => {
  tvWidth = orientation === "horizontal" ? 300 : 160;
  tvHeight = orientation === "horizontal" ? 160 : 300;
  const padding = nicheGap * 10;
  context.strokeStyle = "#007bff";
  context.lineWidth = 2;
  context.setLineDash([5, 3]);

  // Niche box positioned around the TV with padding
  context.strokeRect(
    tvX - padding,
    tvY - padding,
    tvWidth + 2 * padding,
    tvHeight + 2 * padding
  );

  context.setLineDash([]);

  context.fillStyle = "#007bff"; // Match the stroke color for consistency
  context.font = "16px Arial";
  context.textAlign = "right";
  context.fillText(
    "Niche Box",
    tvX + tvWidth / 2,
    tvY + tvHeight + padding + 20 // Adjust Y-coordinate to place it below the niche box
  );
};

export default drawNicheBox;
