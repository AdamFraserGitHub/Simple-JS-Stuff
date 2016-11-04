var context;
var x=50;
var y=50;
var dx=4;
var dy=4;
var dxtemp = 4;
var dytemp = 5;

function init()
{
  context= Canvas.getContext('2d');
  setInterval(draw,10);
}

function draw()
{
  context.clearRect(0,0, 600,600);

  context.beginPath();
  context.fillStyle="#FF0000";
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  // Boundary Logic
if( x<20 || x>580) dx=-dx, dxtemp=dx * Math.floor((Math.random() * 2) + 1);;
if( y<20 || y>580) dy=-dy, dytemp=dy * Math.floor((Math.random() * 2) + 1);;
x+=dxtemp; 
y+=dytemp;
}
