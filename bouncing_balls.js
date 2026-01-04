class Circle {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.d = random(5, 15);

    this.dx = random(-1, 1);
    this.dy = random(-2, 2);
    this.c = color(random(255), random(255), random(255));
  }
  draw() {
    noStroke();
    fill(this.c);
    circle(this.x, this.y, this.d);
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= width || this.x < 0) {
      this.dx *= -1;
    }
    if (this.y >= height || this.y < 0) {
      this.dy *= -1;
    }
  }
}

const circles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    const c1 = new Circle();
    circles.push(c1);
  }
}

function draw() {
  background(239);
  circles.forEach((c) => {
    c.update();
    c.draw();
  });
}
