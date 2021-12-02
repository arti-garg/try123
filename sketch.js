var bg1,bg,zombie,zombie02,zombie03,zombie1,zombie2,zombie3
var zombie_image1,zombie_image2,zombie_image3
var ballImage,ball,line1
var sun,sun_image;
var shootingPlants , shootingPlant_image;


function preload(){
  bg = loadImage("background.png");
  
  zombie_image1 = loadImage("zombie1.png");
   zombie_image2 = loadImage("zombie2.png");
   zombie_image3 = loadImage("zombie3.png");
  shootingPlant_image = loadImage("plant1.png");
  ballImage = loadImage("ball.png")
  sun_image = loadImage("sun.png");
  
}

function setup() {
  createCanvas(800,400);
  //creating a sprite for background
bg1 = createSprite(0,0, 800, 400);
  bg1.addImage(bg);
  bg1.scale = 1.5;
  
  line1 = createSprite(70,80,10,800);
  line1.shapeColor = ("red");
  
  shootingPlants = createSprite(40,220,20,60);
  shootingPlants.addImage(shootingPlant_image);
  shootingPlants.scale = 0.2;  
  shootingPlants.y = World.mouseY;
  
  zombie = new Group();
  zombie02 = new Group();
  zombie03 = new Group();
  ballGroup = new Group();
  sunGroup = new Group();
  
  score = 0
  
}


function draw() {
  background(0);
   
  var select_zombie = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_zombie == 1) {
zombiecreate1();
    } else if (select_zombie == 2) {
    zombiecreate2();
    }else {
 zombiecreate3();
    }
  }
  
  shootingPlants.y = World.mouseY;
  
   if (keyDown("space")&& frameCount%10===0) {
    createShootingBalls();
    
  }
  
  if(frameCount%1000===0){
   var sun = createSprite(Math.round(random(20, 780)),40,50,50);
  sun.addImage(sun_image);
  sun.velocityY = 3;
  sun.lifetime = 250;
  sun.scale = 0.2;
  sunGroup.add(sun);
  }
  
//    if(ballGroup.isTouching(zombie)){
//      zombie.destroyEach();
//     ballGroup.destroyEach();
//      }
  
  
//   if(ballGroup.isTouching(zombie02)){
//     zombie02.destroyEach();
//     ballGroup.destroyEach();    
    
//      }
  
//   if(ballGroup.isTouching(zombie03)){
//     zombie03.destroyEach();
//     ballGroup.destroyEach();    
    
//      }
  for (var i = 0; i < zombie.length; i++) {
    
      if(zombie.get(i).isTouching(ballGroup)){
      zombie.get(i).remove()
         ballGroup.destroyEach(); 
  
    }
    }
  for (var j = 0; j < zombie02.length; j++) {
    
      if(zombie02.get(j).isTouching(ballGroup)){
      zombie02.get(j).remove()
         ballGroup.destroyEach(); 
  
    }
    }
  for (var k = 0; k < zombie03.length; k++) {
    
      if(zombie03.get(k).isTouching(ballGroup)){
      zombie03.get(k).remove()
 ballGroup.destroyEach();   
    }
    }
  
  drawSprites();
  
 text("score :" ,score, 750,20);
  
}

  
function zombiecreate1() {
  var zombie1 = createSprite(800,Math.round(random(20, 370)), 10, 10);
  zombie1.addImage(zombie_image1);
  zombie1.velocityX = -3;
  zombie1.lifetime = 350;
  zombie1.scale = 0.2;
  zombie.add(zombie1);
}

function zombiecreate2() {
  var zombie2 = createSprite(800,Math.round(random(20, 370)), 10, 10);
  zombie2.addImage(zombie_image2);
  zombie2.velocityX = -2;
  zombie2.lifetime = 350;
  zombie2.scale = 0.3;
  zombie02.add(zombie2);
}

function zombiecreate3() {
  var zombie3= createSprite(800,Math.round(random(20, 370)), 10, 10);
 zombie3.addImage(zombie_image3);
 zombie3.velocityX = -2;
  zombie3.lifetime = 350;
  zombie3.scale = 0.08;
  zombie03.add(zombie3);
}
 
function createShootingBalls() {
  var ball = createSprite(0, 100, 60, 10);
 ball.addImage(ballImage);
  ball.x = 50;
ball.y= shootingPlants.y;
  ball.velocityX = 3;
  ball.lifetime = 300;
  ball.scale = 0.1;
  ballGroup.add(ball);
   
}
