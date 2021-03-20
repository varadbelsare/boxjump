var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(100,580,180,20)
block1.shapeColor="red"
block2=createSprite(300,580,180,20)
block2.shapeColor="blue"
ball=createSprite(random(20,750),100,30,30)
ball.shapeColor="white"
//ball.velocityX=4
ball.velocityY=2
block3=createSprite(500,580,180,20)
block3.shapeColor="yellow"
block4=createSprite(700,580,180,20)
block4.shapeColor="green"
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if (ball.isTouching(block1)){
    ball.shapeColor="red"
    ball.bounceOff(block1)
}
if (ball.isTouching(block2)){
    ball.shapeColor="blue"
    ball.bounceOff(block2)
}
if (ball.isTouching(block3)){
    ball.shapeColor="yellow"
    ball.bounceOff(block3)
}
if (ball.isTouching(block4)){
    ball.shapeColor="green"
    ball.bounceOff(block4)
}
 
drawSprites();
    //add condition to check if box touching surface and make it box
}
