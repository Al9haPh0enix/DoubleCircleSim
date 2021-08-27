let radius1 = 200;
let radius2 = 200;

let angle1 = 180;
let angle2 = 180;

function setup() {
  createCanvas(800, 600); 

  background(0);
  beginShape();

}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  stroke(255);
  noFill();

  let x = cos(radians(angle1)) * radius1 / 2;
  let y = sin(radians(angle1)) * radius1 / 2;

  let x2 = (cos(radians(angle2 + angle1)) * radius2 / 2) + x;
  let y2 = (sin(radians(angle2 + angle1)) * radius2 / 2) + y;

  vertex(x2, y2);

  angle1 += 2.5;
  angle2 += 2.5;

  stroke(100);

  if(angle1 > 360 * 1.5){
    endShape();
  }
  stroke(255)

  ellipse(0, 0, radius1);

  line(0, 0, x, y);

  ellipse(x, y, radius2);

  line(x, y, x2, y2);
}