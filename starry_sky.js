function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let x = 0; x < width; x++) {
    stroke(255);
    point(x, random(height));
  }
  noLoop();
}
