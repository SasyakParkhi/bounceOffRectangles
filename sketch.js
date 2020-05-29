var fixedRect, movingRect, rect, randomrect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  rect = createSprite(400, 800,80,30);
  rect.shapeColor = "green";
  rect.debug = true;
 
  randomrect = createSprite(200, 800,80,30);
  randomrect.shapeColor = "green";
  randomrect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect.velocityX = -5;
  randomrect.velocityX =+5;
}

function draw() {
  background(0,0,0);  
  bounceOff(rect, randomrect);
 bounceOff(fixedRect, movingRect);
  drawSprites();
}

function bounceOff(rect1, rect2){
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2) {
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1);
}
if (rect1.y - rect2.y < rect2.height/2 + rect1.height/2
  && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
    rect1.velocityY = rect1.velocityY * (-1);
    rect2.velocityY = rect2.velocityY * (-1);
}
}