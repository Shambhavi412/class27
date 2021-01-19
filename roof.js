class Roof{
    constructor(x,y,width,height){
    
        var options={
    isStatic : true,
    friction : 0.3,
    density : 0.5
    
        }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    
    
    
    
    
    
    }
    
    
    display(){
    
        rectMode(CENTER);
        strokeWeight(2)
        stroke("black")
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,10);
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }