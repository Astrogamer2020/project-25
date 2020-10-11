class Trash {
   constructor(x,y,width,height) {
   
        this.body = Bodies.rectangle(300,620,20,100);
        this.body = Bodies.rectangle(400,660,200,20);
        this.body = Bodies.rectangle(300,620,20,100);
        this.image=loadImage("dustbin.png");
        World.add(world, this.body);
        World.add(world, this.body);
        World.add(world, this.body);
      }
     
     
      display(){
      
        rectMode(CENTER);
        fill("white");
        rect(680,660,200,20);
      
        rectMode(CENTER);
        fill("white");
        rect(780,620,20,100);
         rectMode(CENTER);
        fill("white");
        rect(580,620,20,100)
      }
addPic(){

image(this.image,620,550,140,140)


}
} 

