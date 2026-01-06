let straightLines = [];
let diagonalLines1 = [];
let diagonalLines2 = [];

function createLines(y) {
  const lines = [];
  for (let i = 1; i <= height / y; i++) {
    lines.push({ x1: 0, y1: y * i, x2: width, y2: y * i });
  }
  return lines;
}

function createDiagonal(spacing, reverse, count = 200) {
  const lines = [];
  for (let i = 1; i <= 200; i++) {
    const dz = height - spacing * i;
    if (!reverse) {
      lines.push({ x1: 0, y1: dz, x2: width - dz, y2: height });
    } else {
      lines.push({ x1: dz, y1: height, x2: width, y2: dz });
    }
  }
  return lines;
}

function drawLines(lines, color, weight) {
  push();
  stroke(color);
  strokeWeight(weight);
  lines.forEach((l) => {
    line(l.x1, l.y1, l.x2, l.y2);
  });
  pop();
}

function setup() {
  createCanvas(400, 400);
  straightLines = createLines(5);
  diagonalLines1 = createDiagonal(50);
  diagonalLines2 = createDiagonal(50, true);
}

function draw() {
  background(236, 200);
  drawLines(straightLines, "rgb(56,186,240)", 2);
  drawLines(diagonalLines1, "rgba(255,255,255,0.45)", 7);
  drawLines(diagonalLines2, "rgba(255,255,255,0.45)", 7);
}
