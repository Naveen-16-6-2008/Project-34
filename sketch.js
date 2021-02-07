const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundimg;

function preload() {
//preload the images here
backgroundimg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1200, 700);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
	ground1 = new Ground(350,500,800,10);
  hero = new Hero(250,100,100);
  fly1 = new Fly(hero.body,{x:250,y:100});

  block1 = new Block(500,475,40,40);
  block2 = new Block(500,435,40,40);
  block3 = new Block(500,395,40,40);
  block4 = new Block(500,355,40,40);
  block5 = new Block(500,315,40,40);
  block6 = new Block(500,275,40,40);
  block7 = new Block(500,235,40,40);

  block8 = new Block(550,475,40,40);
  block9 = new Block(550,435,40,40);
  block10 = new Block(550,395,40,40);
  block11 = new Block(550,355,40,40);
  block12 = new Block(550,315,40,40);
  block13 = new Block(550,275,40,40);

  block14 = new Block(600,475,40,40);
  block15 = new Block(600,435,40,40);
  block16 = new Block(600,394,40,40);
  block17 = new Block(600,355,40,40);
  block18 = new Block(600,315,40,40);
  block19 = new Block(600,275,40,40);
  block20 = new Block(600,235,40,40);
  block21 = new Block(600,195,40,40);

  block22 = new Block(650,475,40,40);
  block23 = new Block(650,435,40,40);
  block24 = new Block(650,395,40,40);
  block25 = new Block(650,355,40,40);
  block26 = new Block(650,315,40,40);

  monster = new Monster(800,300,10,20);

  Engine.run(engine);

}

function draw() {
  background(backgroundimg);
ground1.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();

block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
hero.display();
fly1.display();
monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

