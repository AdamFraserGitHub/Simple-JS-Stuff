var context;
var x;
var y;
var dx;
var dy;
var Width;
var Height;
var x = 600;
var y = 0;

function start() {
  context = Canvas.getContext('2d');
  setInterval(draw,5);
}

function draw() {
  Width = window.innerWidth - 20;
  Height = window.innerHeight - 20;

  context.canvas.width = Width;
  context.canvas.height = Height;

  context.clearRect(0,0, Width,Height);

  context.fillStyle = 'rgb(255,0,0)';
  context.fillRect(x,y, 5,10);
  context.fillRect(x - 10,y + 50, 5,10);

  y+=5;

  if (y > Height){
    y = -10;
    x = Math.floor((Math.random() * Width) + 1);
  }
}
