class Dustbin{
    constructor(x,y,width,height){
        var options = {
            restitution:0,
            friction:0,
            density:10,
            isStatic:true
        }
   this.body = Bodies.rectangle(x,y,width,height);
   this.width=width;
   this.height=height;
   this.image=loadImage("dustbingreen.png")
   World.add(world, this.body) 
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
}
}