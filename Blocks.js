class Block{
    constructor(x, y, width, height,angle) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height,angle, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        strokeWeight(2)
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle); 
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y);
        
        pop();
      }
};