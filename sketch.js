var house1, house2, house3, house4, house5, house6, house7;
var h1, h2, h3, bg, road, r1, r2, p1, p2, p3;
var police, c1, c2;
var a1, person1;


function preload(){
  h1 = loadImage("house1.png");
  h2 = loadImage("house2.png");
  h3 = loadImage("house3.png");
  bg = loadImage("grass.jpeg");
  r1 = loadImage("road.jpeg");
  r2 = loadImage("r2.png");
  p1 = loadImage("policeback.png");
  p2 = loadImage("policefront.png");
  p3 = loadImage("policeside.png");
  c1 = loadImage("cloud.png");
  c2 = loadImage("cloud2.png");
  a1 = loadAnimation("person1.png", "person1c.png", "person1b.png");
}

function setup (){
  createCanvas(displayWidth, displayHeight);

  house1 = createSprite(200, 570);
  house1.addImage(h1);

  house4 = createSprite(820, 570);
  house4.addImage(h1);

  // house2 = createSprite(800, 300);
  // house2.addImage(h2);

  house3 = createSprite(1285, 570);
  house3.addImage(h3);
  house3.scale = 0.7;

  road = createSprite(1440, 668);
  road.addImage(r2);
  //road.scale = 0.12;

  police = createSprite(100, 600);
  police.addImage(p2);
  police.scale = 0.5;

  
  
}

function draw(){
  background(bg)

  if(keyDown("UP_ARROW")){
    police.addImage(p1);
    police.y = police.y - 2;
  }

  if(keyDown("DOWN_ARROW")){
    police.addImage(p2);
    police.y = police.y + 2;
  }

  if(keyDown("LEFT_ARROW")){
    police.addImage(p1);
    police.x = police.x - 2;
  }

  if(keyDown("RIGHT_ARROW")){
    police.addImage(p3);
    police.x = police.x + 2;
  }

  if(frameCount%50 === 0){
    cloud = createSprite(1800, 200);
    cloud.addImage(c1);
    cloud.velocityX = -4;
    cloud.scale = 0.65;
    cloud.y = random(50, 300);
  }

  if(frameCount%300 === 0){
    cloud2 = createSprite(1800, 200);
    cloud2.addImage(c2);
    cloud2.velocityX = -6;
    cloud2.scale = 0.35;
    cloud2.y = random(50, 300);
  }

  if(frameCount === 20){
    person1 = createSprite(30, 580);
    person1.addAnimation("personWalking", a1);
    person1.velocityX = 3;
    person1.scale = 0.7;
    
  }

  drawSprites();
}

// function spawnCloud(){
//   if(frameCount === 20){
//     cloud = createSprite(1800, 200);
//     cloud.addImage(c1);
//   }
// }