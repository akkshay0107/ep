var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.velocityY = 0;
  movingRect.velocityY = -12;
  rC = '#'+ Math.floor(Math.random()*16777215).toString(16);
}

function draw() {
  background(0,0,0);
  if(movingRect.isTouching(fixedRect)){
    movingRect.shapeColor = rC
  }
  else{movingRect.shapecolor = "green"}
  collide(movingRect,fixedRect);
  drawSprites();
}
