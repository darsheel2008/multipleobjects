
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1,rubber1,hammer1,ground1;

function setup() {
	createCanvas(1200, 400);

  engine = Engine.create();

    world = engine.world;

    hammer1 = new hammer(600,320);
    
    stone1 = new stone(820,100,80,30);

    rubber1 = new rubber(810,200,50);

    ground1 = new ground(600,height,1200,20);
}

function draw() {
  background("white");
  Engine.update(engine);
    hammer1.display();
    stone1.display();
    rubber1.display();
    ground1.display();
 
}



