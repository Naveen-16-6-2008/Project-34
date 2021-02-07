class Monster{
    constructor(x,y,r)
    {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1.0,
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        this.image = loadImage("Monster-01.png");
                World.add(world,this.body);
    }
    display()
    {
        
        var monsterpos=this.body.position;
        push()
        translate(monsterpos.x,monsterpos.y);
        strokeWeight(3);
     
        imageMode(CENTER);
     
        image(this.image, 0, 0, 150,200);
        pop();
    }
}   
    