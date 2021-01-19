/*class Bob{
constructor(x,y,r)
{

    this.body = Bodies.circle(this.x,this.y,this.r)
    this.x = x;
    this.y = y;
    this.r = r;

    World.add(world,this.body)





}

display()
{

    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white")
    fill(20,50,100);
    ellipse(0,0,this.r,this.r)
    pop();//20,50,100
    


}











}*/
class Bob{
    constructor(x,y){
    
    var options = {
        
        density : 1.2,
        restitution : 0.4,
        friction : 0.5,
        //isStatic : true
    }
    
        this.body = Bodies.circle(x,y,50,options);
        this.r = 50;
        this.x = x;
        this.y = y;
       // this.height = height;
        World.add(world,this.body);
    
    
    
    
    
    }
    
    
    
    display(){
    
        
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white")
    fill(20,50,100);
    ellipse(0,0,this.r,this.r)
    pop();
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    



/*class Bob{
    constructor(x,y,r){
    
    var options = {
        
        density : 1.2,
        restitution : 0.2,
        friction : 0.9,
        isStatic:true
    }
    
        this.body = Bodies.circle(this.x,this.y,this.r,options);
       // this.image = loadImage("paper.png");
       this.x = x;
       this.y = y;
        this.r = r;
       // this.height = height;
        World.add(world,this.body);
    
    
    
    
    
    }
    
    
    
    display(){
    
        
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white")
    fill(20,50,100);
    image(this.image,0,0,this.r,this.r)
    
    pop();//20,50,100
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }*/
    
    
    
    
    
    
    
    
    
    