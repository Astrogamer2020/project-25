
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin;
var ground1;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
keyPressed();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(100,350,50);
	
	ground1=new Ground(400,690,800,20);
	trash1=new Trash();
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");


  drawSprites();
  paper1.addPic();
 ground1.display();
 trash1.addPic();
}

function keyPressed(){
if(keyCode=== UP_ARROW){


	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.28, y:-0.30});

}



}

