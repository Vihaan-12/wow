const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, sand1, sand2, sand3, sand4, sand5, rubber, rock

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(500,height,1000,20);

    rubber=new Rubber (100,350);

    sand1=new sand (410,350);
    sand2=new sand (390,350);
    sand3=new sand (420,350);
    sand4=new sand (380,350);
    sand5=new sand (430,350);


    rock = new Rock(800,290,100,100);

    hammer = new Hammer(200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
  
    ground.display();

    rubber.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();

    rock.display();

    hammer.display();
}