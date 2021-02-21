class hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      rect(this.x,this.y);
    }
  };
  