const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, box1, box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1= new Box(100,100,40,40);
    box2= new Box(80,70,40,40);
    ground= new Ground(200,390,400,20);



   
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box1);
    console.log(box2)
   
   box1.display();
   box2.display();
   ground.display();

 
}