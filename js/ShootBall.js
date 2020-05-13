class ShootBall{
    constructor(x, y, width, height, angle) {
        var options ={
          isStatic : true,
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, angle);
      };
display(angle){
        var angle = angle
        push();
        fill("yellow")
    
        rotate(angle);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
    }


