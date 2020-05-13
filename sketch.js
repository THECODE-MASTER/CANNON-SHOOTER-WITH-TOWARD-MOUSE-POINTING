// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;



// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
canvas = createCanvas(800,400);
engine = Engine.create();
world = engine.world;
Ground1 = new Ground(400,380,840,50);
cannon1=new CanonBall(400,0)
tank = new Tanker(100,350,100);
hello = new ShootBall(140,320,100,10);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background("black");
Engine.update(engine);
hello.display();
tank.display();
Ground1.display();
cannon1.display();
console.log("y");
}


function keyReleased() {
    // Call the shoot method for the cannon.
}