var jungleBackground, crocodile;
var scene, player, playerImg,BJImg, GJImg;
function preload(){
jungleBackground= loadImage("images/jungleImage.png");
playerImg= loadImage("images/runner.png");
BJImg= loadAnimation("images/joker.png");
GJImg= loadImage("images/joker2.gif")
}
function setup() {
  createCanvas(displayWidth, displayHeight-100);
  scene= createSprite(400,300,800,1000);
  scene.scale= 6
  scene.addImage("bk", jungleBackground)
  player=createSprite(200,displayHeight-750)
  player.scale=2;
  player.addImage("player", playerImg)
  bombJoker();
  gunJoker();
}

function draw() {
  background(255);  
  player.x= World.mouseX;
  drawSprites();
  scene.velocityY = 3 

    if (scene.y > 400){
      scene.y = scene.height/2;
    }
}
function bombJoker(){
  var joker = createSprite(150,600);
  joker.scale= 1
  joker.addAnimation("joker", BJImg);
}
function gunJoker(){
  var Joker = createSprite(300 ,650);
  Joker.scale= 0.25
  Joker.addImage("jokerlol", GJImg);
}