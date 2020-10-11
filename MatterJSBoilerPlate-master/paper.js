class Paper {

constructor(x,y,radius){
    var options={
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2,

        }

        this.body = Matter.Bodies.circle(x,y, radius, [options]);
       this.radius = radius;
       // this.body.shapeColor("Black");
        this.image=loadImage("paper.png");
        //image(this.image,100,350,50,50);
        World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      image(this.image,pos.x,pos.y,this.radius,this.radius);
     ellipse(pos.x,pos.y,this.radius);
    }
    addPic(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      image(this.image,pos.x,pos.y,this.radius,this.radius);
      
      
      }
}