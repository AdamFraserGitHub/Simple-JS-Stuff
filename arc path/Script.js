var context
var x,y;
x = 50;
y = 600;
var str;

function start() {

  context= Canvas.getContext('2d');
  setInterval(draw,50);
}

function draw(){
  context.clearRect(0,0, 600,600);
  document.getElementById("Canvas").style.backgroundColor = 'rgb(0, 0, 0)';

  context.beginPath();
  context.lineWidth = 6;
  context.strokeStyle = 'rgb(0,0,255)';
  context.arc(300,600,250,Math.PI*1.5,Math.PI*2,true);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle="#FF00FF";
  context.arc(150,425,10,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  x += 0;
  y -= 0;

}
