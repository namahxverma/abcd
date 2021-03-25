class dustbin {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
    this.width = width ; 
    this.height = height;
this.image=loadImage("dustbin image.jpeg");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    imageMode(CENTER);
    fill("green");
    image(this.image,pos.x,pos.y);

  }
}
