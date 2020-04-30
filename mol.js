function bounceOff(object1,object2){
  if  (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
 if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}
function collide(object1,object2){
  if  (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (0);
  fixedRect.velocityX = fixedRect.velocityX * (0);
}
 if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (0);
  fixedRect.velocityY = fixedRect.velocityY * (0);
}
}