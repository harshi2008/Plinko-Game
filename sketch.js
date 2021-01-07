const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var ground1;
var base1, base2, base3, base4;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  base1 = createSprite(8, 400, 15, 800);
  base1.shapeColor = "darkblue";
  base2 = createSprite(472, 400, 15, 800);
  base2.shapeColor = "darkblue";
  base3 = createSprite(250, 8, 480, 14);
  base3.shapeColor = "darkblue";
  base4 = createSprite(250, 792, 480, 15);
  base4.shapeColor = "darkblue";

  ground1 = new Ground(240, 775, 460, 20);
}

  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight = 300; 

function draw() {
  background("black"); 
  rectMode(CENTER); 
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  
  ground1.display();
  //plinkos[k].display();
  
  drawSprites();
}

for(var i = 0; i<=this.width; i = i+80){
 divisions.push(new Division(i, this.height-divisionHeight/2, 10, divisionHeight));
}

for(var i = 0; i<divisions.length; i++){
  divisions[i].display();
 }
 
 for(var k = 40; k<=this.radius; k=k+50){
   plinkos.push(new Plinko(k, 75, 20));
 }

 for(var k = 15; k<=this.radius-10; k= k+50){
   plinkos.push(new Plinko(k, 175, 20));
 }

 for(var k = 0; k<plinkos.length; k++){
  plinkos[k].display();
 }

//if(frameCount%60===0){
  //particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
//}

for(var j = 0; j<particles.length; j++){
  particles[j].display();
}

