function setup() {
  createCanvas(400, 400);
}

let start = 0;
let inc = 0.01;

function draw() {
  background(0);
  noFill();
  stroke(255);
  beginShape();
  let off = start;

  for (let x = 0; x < width; x++) {
    let y = height / 2 + sin(off) * height / 2;
    let n = noise(y) * 10;
    vertex(x, y + n);
    off += inc;
  }
  endShape();
  start += inc;
  // noLoop();
}
