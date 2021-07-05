class Hammer {
	constructor(x,y,width,height)
}
var options = {
	'density' : 2,
	'friction' : 1.0,
	'resituition': 0.5
};
this.body = Bodies.rectangle(x,y,width,height);
this.width = width;
this.height= height;

World.add(world.this.body);


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



