class Rain{
    constructor(x, y,r) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':0.1
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.r = 5;
        World.add(world, this.body);

      }
     updateY(){
         if(this.body.position.y>height){
             Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
         }
     }
      ShowRain(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        //var maxDrops=100;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}