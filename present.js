
    class Present {
        constructor(x,y) {
          var options = {
            'restitution':0.8
          }
          
          this.body = Bodies.circle(x,y,10,options);
          this.color = color(random(0, 255), random(0, 255), random(0, 255));
          World.add(world, this.body);
        }
        
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push()
          translate(pos.x, pos.y);
          rotate(angle)
          noStroke();
          ellipseMode(RADIUS);
          fill(this.color);
          ellipse(0, 0, 10, 10);
          pop();
        }
      };