const moves = {
  0: [4, 0], //right
  1: [-4, 0], //left
  2: [0, 4], //up
  3: [0, -4], //down
};

const offset = 0;

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    stroke(0);
    strokeWeight(2);
    point(this.x, this.y);
  }
  step() {
    let dir = floor(random(4));
    const [dx, dy] = moves[dir];
    this.x += dx;
    this.y += dy;
  }
  wrap() {
    if (this.x === width - 2 && this.x < 0) this.x = 0;
    if (this.y === height - 2 && this.y < 0) this.y = 0;
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
  background(220);
}

function draw() {
  walker.show();
  walker.step();
  walker.wrap();
}
