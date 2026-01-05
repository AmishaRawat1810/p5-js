let squares = [];
const maxSpeed = 3;
const maxAngularSpeed = 5;
const colors = ["dodgerblue", "gold", "crimson"];
const startX = 0;
const numOfSquares = 4;
const screen_angle = 0;

function createRandomSquare(y, sqWidth) {
  const color = random(colors);
  const dx = random(1, maxSpeed);
  const angularSpeed = random(1, maxAngularSpeed);
  return { x: startX, y, width: sqWidth, color, dx, angularSpeed };
}

function createSquares(n) {
  const sqWidth = height / n;
  const squares = [];
  for (let i = 0; i < n; i++) {
    const y = i * (sqWidth * 1.1);
    squares.push(createRandomSquare(y, sqWidth));
  }
  return squares;
}

function setup() {
  createCanvas(400, 400);
  squares = createSquares(numOfSquares);
}

function drawSquare(square) {
  push();
  noStroke();
  fill(square.color);
  translate(square.x, square.y);
  translate(square.width / 2, square.width / 2);
  rotate(radians(frameCount * square.angularSpeed));
  translate(-square.width / 2, -square.width / 2);
  const cx = square.width * 0.1;
  rect(0, 0, square.width, square.width, cx);
  pop();
}

function updateSquare(square) {
  square.x += square.dx;
  if (square.x >= width * 1.2) {
    square.x = -square.width * 2;
  }
  square.width--;
}

function draw() {
  background(0);
  squares.forEach((square) => updateSquare(square));
  push();
  translate(width / 2, height / 2);
  rotate(screen_angle);
  translate(-width / 2, -height / 2);
  squares.forEach((square) => drawSquare(square));
  pop();
}
