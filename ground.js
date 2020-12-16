class Ground
{
 constructor()
 {
    var option = 
    {
     isStatic:true
    }
  
   this.ground= Bodies.rectangle(200,350,400,30,option);
   World.add(world,this.ground)
 }
  display()
  {
    
    var grond=this.ground.position;
    rectMode(CENTER)
    fill ("black")
    rect(grond.x,grond.y,400,30);

  }
}