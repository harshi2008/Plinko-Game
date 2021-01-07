class Plinko{
    constructor(x,y,radius){
        var options={
           isStatic:true,
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill("lightblue");
        ellipse(this.x, this.y, this.radius);
    }
}