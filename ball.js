class Ball{
    constructor(x,y){
        this.x=x
        this.y=y
        var options={
            friction:0.4,
            density: 20,
            restitution:0.6,
            
        }
        this.body= Bodies.circle(this.x,this.y,7,options)
        World.add(world,this.body)
        this.r=random(0,255)
       this.g=random(0,255)
       this.b=random(0,255)
           
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill(this.r,this.g,this.b)
        ellipse(0,0,7,7)
    
        pop()
    }
    }