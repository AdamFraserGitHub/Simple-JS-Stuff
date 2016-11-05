
var context;

function start() {
  //   var w = window.innerWidth;
  //   var h = window.innerHeight;
  //   document.getElementById("Canvas").width = w
  //   document.getElementById("Canvas").height = h

  //refreshes draw() function every 5ms
  setInterval(draw,5);
}

function draw() {
  context.clearRect(0,0, 1080,720);
  document.getElementById("Canvas").style.backgroundColor = 'rgb(0, 0, 0)';

  //calls positionRandomizer function in positionRandomizerScript.js
  positionRandomizer();


    //draws white line from xa,ya to xb,yb (point 'a' to point 'b')
 points();
    context.beginPath();
    context.moveTo(x[0], y[0]);
    context.lineTo(x[1], y[1]);
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 255, 255)';
    context.stroke();
    context.closePath();

  //stroke('color') show dots of only that color? :)



    context.beginPath();
    context.moveTo(x[1], y[1]);
    context.lineTo(x[2], y[2]);
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 255, 255)';
    context.stroke();
    context.closePath();



    context.beginPath();
    context.moveTo(x[2], y[2]);
    context.lineTo(x[3], y[3]);
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 255, 255)';
    context.stroke();
    context.closePath();



    context.beginPath();
    context.moveTo(x[3], y[3]);
    context.lineTo(x[4], y[4]);
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 255, 255)';
    context.stroke();
    context.closePath();



    context.beginPath();
    context.moveTo(x[4], y[4]);
    context.lineTo(x[5], y[5]);
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 255, 255)';
    context.stroke();
    context.closePath();



}
