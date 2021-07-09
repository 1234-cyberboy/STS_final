
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var fish, eel, present, starfish, shark;
var fi, ei, sti, si;
var pos = 0;
var health = 3;
var gs = 0;
var move = false;


function preload()
{
	fi = loadImage("fish-removebg-preview.png");
  ei = loadImage("eel-removebg-preview.png");
  sti = loadImage("starfish-removebg-preview.png");
  si = loadImage("s-removebg-preview.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    gs = 1;

    fish = createSprite(mouseX, mouseY, 100, 150);
    fish.addImage(fi);
    fish.scale = 0.25;
    shark = createSprite(600, 0, 300, 300);
    shark.addImage(si);
    shark.scale = 0.25;
    starfish = createSprite(300, 0, 100, 150);
    starfish.addImage(sti);
    starfish.scale = 0.25;
    eel = createSprite(150, 50, 100, 150);
    eel.addImage(ei);
    eel.scale = 0.25;
    
}






function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);
  background("blue");
  
  drawSprites();
  if(gs === 1){ 
      shark.velocityY = 5;
      starfish.velocityY = 5;
    
      if (shark.y >= 700) {
        shark.y = 0;
      }
      if (starfish.y >= 700) {
        starfish.y = 0;
      }

      fish.x = mouseX;
      fish.y = mouseY;

      if(frameCount % 50 === 0) {
       move = true; 
      }

      if(move === true){
        shark.velocityX = -5;
      }else{
        shark.x = 750;
      }

      if (frameCount % 200 === 0) {
        present = createSprite(150, 50, 10 ,10)
        present.velocityY = 5;
      }

      if(shark && fish.overlap(shark)){
        move = false;
      }

      if(starfish && shark.overlap(starfish)){
        gs = 3;
      } 
    }

    text("health: "+ health, 500,50);

    if(gs === 2)
      text("You Won!!", 400, 350)
    if(gs === 3){
      text("Try Again", 400, 350)
     }
    

    

    if(present && fish.overlap(present)){
        sub();
        present.remove()


     }
     if(health === 0){
       gs = 2;
     }
}






function sub(){
	health = health - 1
  
}
