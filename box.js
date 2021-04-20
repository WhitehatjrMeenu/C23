class Box
{

    constructor(x,y,w,h)
    {

        var options= { restitution : 1.0,density :4, friction : 0.3}
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w= w;
        this.h=h;

    }

    display()
    {
        var pos = this.body.position;
        var angle=this.body.angle;


        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS)
        rotate(angle);
        rectMode(CENTER);
        fill("yellow")
        rect(0,0,this.w,this.h);
        pop();


    }
}
