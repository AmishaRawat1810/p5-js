class Elpse {
  constructor(x, y, width, height, offset) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.offsetX = offset;
    this.offsetY = offset + 1000;
  }

  draw() {
    noStroke();
    fill(0, 155, 0, 70);
    ellipse(this.x, this.y, this.width, this.height);
  }

  update(newX) {
    this.x = map(noise(this.offsetX), 0, 1, 0, width);
    this.y = map(noise(this.offsetY), 0, 1, 0, height);

    this.offsetX += random(0.01, 0.001);
    this.offsetY += random(0.01, 0.001);
  }
}

let ellipses = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    let off = random(1000);
    let s = random(10, 25);
    const e = new Elpse(random(width), random(height), s, s, off);
    ellipses.push(e);
  }
}

function draw() {
  background(255);
  ellipses.forEach((e) => {
    e.update();
    e.draw();
  });
}
