var rocket,star,meteor;
var gameover;
var Pontuação,score;

var StarsG,meteorG;
//estados do jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
rocket.loadImage("foquete.png");
meteor.loadImage("meteor.png");
stars.loadImage("stars.png");
path.loadImage("Galaxy.png");
gameOver.loadImage("game-over.png");
}

function setup() {
createCanvas(600,600);
//movendo plano de fundo
path=createSprite(600,600,20,20);
path.addImage(Galaxy.png);
path.velocityY = 4;
// criar foguete
rocket = createSprite(20,400,20,20);
rocket.addImage(foguete.png);
rocket.scale=0.08;
//criação de grupos
StarsG=new Group();
meteorG=new Group();

}


gameOver = createSprite(300,300);
gameOver.addImage(game-over.png);

gameOver.scale = 0.5;

function draw() {
if(gameState===PLAY){

background(0);
textSize(20);
text("Score: " + score,200,50);


score = score + Math.round(getFrameRate()/60);

gameOver.visible = false;
rocket.x = World.mouseX;

edges= createEdgeSprites();
   if(path.y > 400 ){
    path.y = height/2;
   } 

createStars();
createMeteor(); 

drawSprites();
  textSize(20);
  fill(255);
  text("stars: "+ Pontuação,250,100);
  
if(rocket.isTouching(stars)){
stars.destroy();
Pontuação=Pontuação+1;
}

if(meteorG.isTouching(rocket)) {
    
    gameState=END;
}
if(gameState===END){
  
    rocket.destroy();
    StarsG.destroyEach();
    meteorG.destroyEach();

}
}  

 }
 function createStars() {
    if (World.frameCount % 200 == 0) {
    var stars = createSprite(Math.round(random(50, width-50),40, 10, 10));
    stars.addImage(stars);
    stars.scale=0.12;
    stars.velocityY = 3;
    stars.lifetime = 150;
    StarsG.add(stars);
    }
}
function createMeteor() {
if (World.frameCount % 530 == 0) {
var meteor = createSprite(Math.round(random(50, width-50),40, 10, 10));
meteor.addImage(meteor);
meteor.scale=0.1;
meteor.velocityY = 3;
meteor.lifetime = 150;
meteorG.add(meteor);
} 
}

