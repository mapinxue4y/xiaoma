const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}
//build modol
function Ball(x,y,vX,vY,color,size){
  this.x=x;
  this.y=y;
  this.vX=vX;
  this.vY=vY;
  this.color=color;
  this.size=size;
}
Ball.prototype.draw=function(){
  ctx.beginPath();
  ctx.fillStyle=this.color;
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
  ctx.fill(); 
}
Ball.prototype.update=function()
{
  if((this.x+this.size)>=width){
    this.vX=-(this.vX);
  }
  if((this.x+this.size)<=0){
    this.vX=-(this.vX);
  }
  if((this.y+this.size)>=height){
    this.vY=-(this.vY);
  }
  if((this.y+this.size)<=0){
    this.vY=-(this.vY);
  }
 this.x+=this.vX;
 this.y+=this.vY; 
}

let balls=[];
while(balls.length<25){
  let size=random(10,20);
  let ball=new Ball(
    random(0+size,width-size),
    random(0+size,height-size),
    random(-7,10),
    random(-7,10),
    randomColor(),
    size
    );
    balls.push(ball);
}

function loop(){
  ctx.fillStyle='rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  for(let i=0;i<balls.length;i++){
    balls[i].draw();
    balls[i].update(); 
  }
  requestAnimationFrame(loop);
}
loop();