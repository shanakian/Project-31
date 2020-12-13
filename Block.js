class Block{
    constructor(x,y){
        var options={

            isStatic: true

        }

        this.body = Bodies.circle(x,y,10,options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);

    }

    display(){
    var pos=this.body.position;		

	push();
	translate(pos.x, pos.y);
	strokeWeight(4);
	fill(255,0,255)
	ellipseMode(RADIUS);
	ellipse(0,0,10);
    pop();

    }

}