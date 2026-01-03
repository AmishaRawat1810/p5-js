class Elpse {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(color) {
    noStroke();
    fill(color || 255);
    ellipse(this.x, this.y, this.width, this.height);
  }

  update(newX) {
    this.x = newX;
  }
}

let xoff = 0;
let e1;

function setup() {
  createCanvas(400, 400);
  e1 = new Elpse(width/2,height/2,24,24);
}

function draw() {
  background(0);
  let xPos = map(noise(xoff), 0, 1, 0, width);
  e1.update(xPos);
  e1.draw();
  xoff += 0.002;
  
}
