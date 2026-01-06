let squares = [];

function gapOfOne(n, x, y, s) {
  const squares = [];
  for (let i = 0; i < n; i++) {
    squares.push({ x, y, s });
    x += s + s * (i+1);
  }
  return squares;
}

function noGap(n, x, y, s) {
  const squares = [];
  for (let i = 0; i < n; i++) {
    squares.push({ x, y, s });
    x += s;
  }
  return squares;
}

function createSquares(n, x, y, s) {
  const squares = [];
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      squares.push(...noGap(i, x, y, s));
    } else {
      squares.push(...gapOfOne(i, x, y, s));
    }
    y += 15;
  }
  return squares;
}

function drawSquare(x, y, s) {
  square(x, y, s);
}

function setup() {
  createCanvas(400, 400);
  squares = createSquares(40, 10, 10, 10);
}

function draw() {
  background(0);
  squares.forEach((sq) => drawSquare(sq.x, sq.y, sq.s));
}
