// ctx = Canvas.getContext('2d');
var context,h,w,y,deltY;

function start() {
  context = Canvas.getContext('2d');
  y = 0;
  deltY = 1;
  setInterval(sensor, 50);
  setInterval(drawCandy, 5);
  setInterval(drawCharictar, 5);
  resiz();
}

  function sensor(){
    window.onresize = resiz;
  }

  function resiz() {
    w = window.innerWidth;
    h = window.innerHeight;

    // y = y + 10;

    context.canvas.width = w-20;
    context.canvas.height = h-20;

    context.beginPath();
    context.fillStyle='rgb(255,0,150)';
    context.rect(0,0,w-20,h-20);
    context.closePath();
    context.fill();
  }

  function drawCandy(){

    context.clearRect(0,0,w,h);
    document.getElementById("Canvas").style.backgroundColor = 'rgb(255,0,150)';

    context.beginPath();
    context.rect(w * 0.25 - 20, y, 10, 20)
    context.fillStyle = 'rgb(0,255,255)';
    context.closePath();
    context.fill();

    context.beginPath();
    context.rect(w * 0.75 - 20, y, 10, 20)
    context.fillStyle = 'rgb(255,255,0)';
    context.closePath();
    context.fill();

    context.beginPath();
    context.rect(w * 0.5 - 20, y, 10, 20)
    context.fillStyle = 'rgb(255,255,255)';
    context.closePath();
    context.fill();

    y+=deltY;
    if (y > h) {y = 0; deltY = Math.floor((Math.random() * 5) + 1);}
  }

  function drawCharictar() {
    context.beginPath();
    context.strokeStyle = 'rgb(0,0,0)';
  }
