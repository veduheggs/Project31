class Division{
    constructor(x,y){
        this.x=x
        this.y=y
        var options={
            friction:0.4,
            density: 0.6,
            restitution:0.4,
            isStatic:true
        }
        this.body= Bodies.rectangle(this.x,this.y,10,300,options)
        World.add(world,this.body)
           
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill(255)
        rect(0,0,10,300)
    
        pop()
    }
    }