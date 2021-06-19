var jane,edges;

function setup() {
  createCanvas(windowWidth,windowHeight);
 jane = createSprite(70,70,30,30);
 obstacle1 = createSprite(255,315,20,20);
 obstacle1.velocityY = -10;
 obstacle2 = createSprite(680,393,20,20);
 obstacle2.velocityX = 10;
 obstacle3 = createSprite(680,680,20,20);
 obstacle3.velocityX = -10;
 obstacle4 = createSprite(680,536.5,20,20);
 obstacle4.velocityY = -20;
 wall1 = createSprite(170,90,20,150);
 wall2 = createSprite(510,165,700,20);
 wall3 = createSprite(860,540,20,770);
 wall4 = createSprite(250,465,500,20);
 wall5 = createSprite(500,615,20,620);
}

function draw() {
  background("green");
  edges = createEdgeSprites();
  
  if(keyDown(LEFT_ARROW)){
    jane.x = jane.x - 10;
  }
  if(keyDown(RIGHT_ARROW)){
    jane.x = jane.x + 10;
  }
  if(keyDown(UP_ARROW)){
    jane.y = jane.y - 10;
  }
  if(keyDown(DOWN_ARROW)){
    jane.y = jane.y + 10;
  }
 
  if(jane.isTouching(obstacle1) || 
  jane.isTouching(obstacle2) || 
  jane.isTouching(obstacle3) || 
  jane.isTouching(obstacle4)){
    jane.x = 70;
    jane.y = 70;
  }
  if(jane.isTouching(wall1) || 
  jane.isTouching(wall2) || 
  jane.isTouching(wall3) || 
  jane.isTouching(wall4) || 
  jane.isTouching(wall5)){
    jane.x = 70;
    jane.y = 70;
  }

  jane.collide(edges);
  obstacle1.bounceOff(wall2);
  obstacle1.bounceOff(wall4);
  obstacle2.bounceOff(wall3);
  obstacle2.bounceOff(wall5);
  obstacle3.bounceOff(wall3);
  obstacle3.bounceOff(wall5);
  obstacle4.bounceOff(wall2);
  obstacle4.bounceOff(edges)
  textSize(20);
  fill(0);
  text(mouseX+ "," +mouseY,mouseX,mouseY);
  textSize(20);
  fill(0);
  text("END",660,940)
  drawSprites();
}