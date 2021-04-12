class paper
{

    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            densitiy:1.2


        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);

    }
    display()
    {

        var paperpos=this.position;

        push()
        translate(paperpose.x, paperpose.y);
        eliipseMode(RADIUS);
        strokeWieght(3);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        pop()
    
        
    }
}