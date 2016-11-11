var Context;
var a, b;

function start() {

  Context=Canvas.getContext('2d');
  setInterval(dynamic, 5);
}

function dynamic() {
  a = 0;
  b = Math.PI * 0.5;
  Context.clearRect(0,0, 1280,720);
  document.getElementById("Canvas").style.backgroundColor = 'rgb(0, 0, 0)';

  Context.beginPath();
  Context.arc(Canvas.width / 2 , Canvas.height / 2 ,200,a,b,true);
  Context.lineWidth = 5;
  Context.strokeStyle = 'rgb(0,150,255)';
  Context.stroke();
  Context.closePath();


}
