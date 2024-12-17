const drawFloorLine = (context, width, height) => {
  context.strokeStyle = "#000";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(0, height - 50);
  context.lineTo(width, height - 50);
  context.stroke();

  context.fillStyle = "#000";
  context.font = "16px Arial";
  context.fillText("Floor", 40, height - 60);
};

export default drawFloorLine;
