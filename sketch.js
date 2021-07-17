const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(300,50,50,50);   
    box2=new Box(290,200,60,60); 
    box3=new Box(460,50,40,40);   
    box4=new Box(480,200,60,60); 
    box5=new Box(690,200,50,50);   
    box6=new Box(680,50,70,70); 
    



    
    ground1=new Ground(600,560,1600,10); 

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();




    ground1.display();
}

