class Hero{
    constructor(x,y,r)
    {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("Superhero-01.png");
                World.add(world,this.body);
    }
    display()
    {
        
        var heropos=this.body.position;
        push()
        translate(heropos.x,heropos.y);
        strokeWeight(3);
     
        imageMode(CENTER);
     
        image(this.image, 0, 0, 350,150);
        pop()
    }
}   
    