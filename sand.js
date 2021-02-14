class sand {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':3,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, 10, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(0, 0, 10);
      pop();
    }
  };