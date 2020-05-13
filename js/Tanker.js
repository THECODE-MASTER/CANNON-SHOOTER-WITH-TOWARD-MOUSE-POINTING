class Tanker {
  constructor(x, y, radius) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;
     
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
     ellipse(this.body.position.x,this.body.position.y,this.radius);
    };
}
