const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rope;
var engine, world;
var stand;
var a;
var block8,block9,block10,block11,block12;
var block13,block14,block15
var block16;
var polygon;
var circles=[];
function setup() {
  var canvas = createCanvas(1200,700);
  stroke(10);
  engine = Engine.create();
  world = engine.world;
 
  stand  = new Ground(775,550,405,10);
  polygon= new Polygon(100,200,50,50);
  block8 = new Block(330,235,30,30);
  block9 = new Block(360,235,30,30);
  block10= new Block(390,235,30,30);
  block11= new Block(420,235,30,30);
  block12= new Block(450,235,30,30);
  block13= new Block(360,195,30,30);
  block14= new Block(390,195,30,30);
  block15= new Block(420,195,30,30);
  block16= new Block(390,155,30,30);
  rope   = new SlingShot(polygon.body,{x:75,y:220});

 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(90);  
    a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 rope.display();


 block8.display();
 block9.display();
 block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
polygon.display();
 
 stand.display();









 drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
rope.fly();

}


  
  /*for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
/** */ // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);


/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  
/** */ 