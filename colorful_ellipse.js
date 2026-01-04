class Elpse {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.dx = random(-1, 1);
    this.dy = random(-2, 2);

    this.size = random(10, 30);
    this.c = color(random(255), random(255), random(255), 150);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  draw() {
    noStroke();
    fill(this.c);
    circle(this.x, this.y, this.size);
  }
}

let ellipses = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    ellipses.push(new Elpse());
  }
}

function draw() {
  background(255);

  ellipses.forEach((e) => {
    e.update();
    e.draw();
  });
}
