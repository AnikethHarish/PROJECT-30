class Block extends BaseClass {
  constructor(x, y){
    super(x,y,33,44);
    this.image = loadImage("block.png");
    this.visibility=255;
  }
   display(){
     if(this.body.speed<3){
      super.display();
     }
     else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,33,44);
      pop();
      
     }
    }
  }