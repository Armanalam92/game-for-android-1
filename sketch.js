var player,player_img;
var ground,ground_img,ground1,ground2,ground3,ground4;
var tree,tree_img,tree1, tree2;
var cloud1,cloud2,cloud_img;
var sun,sun_img;

function preload() {
   player_img = loadImage("player.png");
   ground_img = loadImage("running-platform.png");
   tree_img = loadImage("tree.png");
   cloud_img = loadImage("cloud.png");
   sun_img = loadImage("sun.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  cloud1 = createSprite(width/4, height/6);
  cloud1.addImage(cloud_img);

  cloud2 = createSprite(width/1.3, height/6);
  cloud2.addImage(cloud_img);
 
  sun = createSprite(width/1.2,height/5);
  sun.addImage(sun_img);
  sun.scale = 0.5;

  tree = createSprite(width/6, height/1.7);
  tree.addImage(tree_img);
  tree.scale = 0.5;

  tree1 = createSprite(width/1.7, height/1.7);
  tree1.addImage(tree_img);
  tree1.scale = 0.5;

  tree2 = createSprite(width/1, height/1.7);
  tree2.addImage(tree_img);
  tree2.scale = 0.5;

  ground = createSprite(width/4, height/1.2);
  ground.addImage(ground_img);

  ground1 = createSprite(width/3, height/1.2);
  ground1.addImage(ground_img);

  ground2 = createSprite(width/2, height/1.2);
  ground2.addImage(ground_img);

  ground3 = createSprite(width/1.5, height/1.2);
  ground3.addImage(ground_img);

  ground4 = createSprite(width/1.2, height/1.2);
  ground4.addImage(ground_img);

  player = createSprite(width/4, height/1.6);
  player.addImage(player_img);
  player.scale = 0.5;
}

function draw() {
  background("aqua");

 player.collide(ground);
 player.collide(ground1);
 player.collide(ground2);
 player.collide(ground3);
 player.collide(ground4);


 ground1.setCollider("rectangle",0 ,0 ,0 , 10);
 ground1.debug = true;


 ground2.setCollider("rectangle",0 ,0 ,0 , 10);
 ground2.debug = true;

 ground3.setCollider("rectangle",0 ,0 ,0 , 10);
 ground3.debug = true;

 ground4.setCollider("rectangle",0 ,0 ,0 , 10);
 ground4.debug = true;

 ground.setCollider("rectangle",0 ,0 ,0 , 10);
 ground.debug = true;


 if(keyDown("right")) {
    player.x = player.x +5;
 }

 player.velocityY = player.velocityY +5;

  drawSprites();
}

function right() {
  player.velocityX = player.velocityX + 5;
}

function leftMove() {
  player.velocityX = player.velocityX - 5;
}

function stop() {
  player.velocityX = player.velocityX = 0;
}