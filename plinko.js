class Plinko{
    constructor(x,y){
        this.x=x
        this.y=y
        var options={
            friction:0.4,
            density: 0.9,
            restitution:0.4,
            isStatic:true
        }
        this.body= Bodies.circle(this.x,this.y,8,options)
        World.add(world,this.body)
           
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,10,10)
    
        pop()
    }
    }