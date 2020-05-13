// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;



// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
function preload(){
    
}

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
canvas = createCanvas(800,400);
var HE=-10
engine = Engine.create();
world = engine.world;
Ground1 = new Ground(400,380,840,50);
cannon1=new CanonBall(600,0)
tank = new Tanker(100,350,200);
hello = new ShootBall(140,300,200,10,PI/HE);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background("black");
Engine.update(engine);

if(mouseY>=100 && mouseY>=199){
    HE=-40
}
else if(mouseY>=200 && mouseY>=299){
    HE=-25
}
else if(mouseY>=300 && mouseY>=399){
    HE=-15
}
else{
    HE=-10
}
tank.display();

Ground1.display();
cannon1.display();
hello.display(PI/HE);

}


function keyReleased() {
    // Call the shoot method for the cannon.
}