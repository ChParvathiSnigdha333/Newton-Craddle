class Bob {
    constructor(x,y,radius) {
        var opt = {
            'restitution':1,
            'density': 0.25,
            'friction' : 1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,opt);

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("violet");
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
} 