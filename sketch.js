
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperobject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperobject = new Paper(300,300,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperobject.display();

}

function keyPressed(){

if(keyCode===ENTER){
	Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:130,y:-145});
}
if(keyCode===RIGHT_ARROW){
	paperobject.body.position.x=paperobject.body.position.x+2;
}

if(keyCode===LEFT_ARROW){
	paperobject.body.position.x=paperobject.body.position.x-2;
}
}

