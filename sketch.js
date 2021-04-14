var canvas;
var music;
var box;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(700,585,200,20);
block1.shapeColor=rgb(0,0,250);
block2=createSprite(490,585,200,20);
block2.shapeColor=rgb(219, 39, 138);
block3=createSprite(280,585,200,20);
block3.shapeColor=rgb(249, 249, 4);
block4=createSprite(70,585,200,20);
block4.shapeColor=rgb(15, 232, 252);

    //create box sprite and give velocity
   box=createSprite(100,20,20,20)
   box.shapeColor=rgb(255, 255, 255);
   box.velocityX=4;
   box.velocityY=9;


}
function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
Edges=createEdgeSprites();
box.bounceOff(Edges);


    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box)&&box.bounceOff(block1)){
        box.shapeColor=rgb(0,0,250);
        music.play();
    }

    if(block2.isTouching(box)&&box.bounceOff(block2)){
        box.shapeColor=rgb(219, 39, 138);
        music.stop();
    }

    if(block3.isTouching(box)&&box.bounceOff(block3)){
        box.shapeColor=rgb(249, 249, 4);
    }

    if(block4.isTouching(box)&&box.bounceOff(block4)){
        box.shapeColor=rgb(15, 232, 252);
    }

    
drawSprites();
}
