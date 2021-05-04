var rain;
var thunder1,thunder2,thunder3,thunder1Img,thunder2Img,thunder3Img;
var man,manImg;
var drops=[];
var maxDrops = 100;
function preload(){
    //manImg = loadImage("images/Walking Frame/walking_1.png");
    //thunder1Img = loadImage("images/thunderbolt/1.png");
    //thunder2Img = loadImage("images/thunderbolt/2.png");
    //thunder3Img = loadImage("images/thunderbolt/3.png");

}

function setup(){
    createCanvas(800,700);
    
   // man = createSprite(200,100,10,10);
   // man.addImage(manImg);

    if(frameCount%150 === 0){
        for(i=0; i<maxDrops; i++){
            drops.push(new Rain(random(0,400),random(0,400)));
        }
    }
    
}

function draw(){
Engine.update(engine);

background("black");
for(i=0;i<maxDrops; i++){
    drops[i].ShowRain();
    drops[i].updateY();
}

    drawSprite();

    
}   

