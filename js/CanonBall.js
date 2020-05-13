class CanonBall {
  constructor(x, y) {
    var options = {
      isStatic : false,
      density :   1.5,
      friction : 1.0,
      restitution : 4,
      frictionAir:0.06
      
    }
    this.body = Bodies.rectangle(x, y, 100,100, options);
    this.width = 100;
    this.height = 100;
    this.image = loadImage("assets/canonBall.png")
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
