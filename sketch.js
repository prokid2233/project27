
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var roof 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	constructor(body1,body2, offsetX, offsetY)
 {
	 this.offsetX=offsetX
	 this.offsetY=offsetY
	 var options={
		 bodyA:body1,
		 bodyB:body2,
		 pointB:{x:this.offsetX, y:this.offsetY}
	 }
	 //console.log(options);
	 this.rope=Constraint.create(options)
     World.add(world,this.rope)
 }

	bobObject1=new Bob(200,400);
	bobObject2=new Bob(200,410);
	bobObject3=new Bob(200,420);
	bobObject4=new Bob(200,430);
	bobObject5=new Bob(200,440);
	roof=new Roof(400,420);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



