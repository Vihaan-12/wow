class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':3,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, 50, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0, 0, 50);
      pop();
    }
  };