const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world 
var division=[]
var ground
var plinko=[]
var ball=[]
function setup() {
  createCanvas(500,800);
  engine= Engine.create()
 world=engine.world
ground= new Ground(250,790,5000)

 for(var i=0;i<=width;i=i+80){
division.push(new Division(i,650))
 }

 for(var i=20;i<=width;i=i+50){
  plinko.push(new Plinko(i,75))
   }

   for(var i=45;i<=width-20;i=i+50){
    plinko.push(new Plinko(i,125))
     }

     for(var i=20;i<=width-20;i=i+50){
      plinko.push(new Plinko(i,175))
       }   

       for(var i=45;i<=width-20;i=i+50){
        plinko.push(new Plinko(i,225))
         }

         for(var i=20;i<=width-20;i=i+50){
          plinko.push(new Plinko(i,275))
           }

           for(var i=45;i<=width-20;i=i+50){
            plinko.push(new Plinko(i,325))
             }

             for(var i=20;i<=width-20;i=i+50){
              plinko.push(new Plinko(i,375))
               }

               for(var i=45;i<=width-20;i=i+50){
                plinko.push(new Plinko(i,425))
                 }

                 for(var i=20;i<=width-20;i=i+50){
                  plinko.push(new Plinko(i,475))
                   }
}

function draw() {
  background(0);  
  Engine.update(engine)

  for(var i=0;i<division.length;i++){
    division[i].display()
    }

    for(var i=0;i<plinko.length;i++){
      plinko[i].display()
      }
    ground.display()

    if(frameCount%60==0){
     ball.push(new Ball(random(10,490),0))
    }
         
for(var i=0;i<ball.length;i++){
      ball[i].display()
      }
}
