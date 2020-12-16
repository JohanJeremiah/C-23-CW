const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World =  Matter.World;
var engine;
var world;

var box;

function setup() 
{
 //create engine
 engine = Engine.create();
 world = engine.world;
 createCanvas(400,400);

box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,50);
ground = new Ground();
 
  
}
function draw() 
{
  background("lightblue");  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
 
}