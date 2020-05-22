const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground;
var dustbin_bottom //,dustbin_left,dustbin_right;


function setup() {

	var canvas = createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper = new Paper(120,590,70);
	
	ground = new Ground(400,690,800,10);

	dustbin_bottom = new Dustbin(590,560,200,120);
  //dustbin_left = new Dustbin(500,635,20,110);
 // dustbin_right = new Dustbin(700,635,20,110);


}


function draw() {

  Engine.update(engine);

  background("blue");

  paper.display();
  ground.display();

  dustbin_bottom.display();
  //dustbin_left.display();
  //dustbin_right.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  }
}



