class Paper{
    constructor(x, y, r) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3
      };
      this.body = Bodies.circle(x, y,r, options);
      this.radius = r;
      this.x = x;
	  this.y = y;
      World.add(world, this.body);
      this.image = loadImage("paper.png")
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('lightyellow')
      imageMode(RADIUS)
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    };
  };
	
	