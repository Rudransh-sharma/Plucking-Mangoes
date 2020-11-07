
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy , mango1 , mango2 , mango3 , mango4 , mango5
function preload()
{
mangoImg = loadImage()	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1 = new Mangoes(200,200,40,20)
    tree = createSprite(400,200,90,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  
  mango1.display();
  
  
  
  
  
  drawSprites();
 
}



