  
  var context;
  var x1, x2, x3, x4, x5, x6;
  var y1, y2, y3, y4, y5, y6; 

function start() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   document.getElementById("Canvas").width = w
//   document.getElementById("Canvas").height = h

  context= Canvas.getContext('2d');
  setInterval(draw,60);


}

function draw() {
    context.clearRect(0,0, 1080,720);
    document.getElementById("Canvas").style.backgroundColor = 'rgb(0, 0, 0)';

    x1 = Math.floor((Math.random() * 560) + 20);
    x2 = Math.floor((Math.random() * 560) + 20);
    x3 = Math.floor((Math.random() * 560) + 20);
    x4 = Math.floor((Math.random() * 560) + 20);
    x5 = Math.floor((Math.random() * 560) + 20);
    x6 = Math.floor((Math.random() * 560) + 20);

    y1 = Math.floor((Math.random() * 560) + 20);
    y2 = Math.floor((Math.random() * 560) + 20);
    y3 = Math.floor((Math.random() * 560) + 20);
    y4 = Math.floor((Math.random() * 560) + 20);
    y5 = Math.floor((Math.random() * 560) + 20);
    y6 = Math.floor((Math.random() * 560) + 20);


  context.beginPath();
  context.fillStyle="#FF0000";
  context.arc(x1,y1,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#00FF00";
  context.arc(x1,y1,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#0000FF";
  context.arc(x1,y1,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#FFFF00";
  context.arc(x1,y1,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#FF00FF";
  context.arc(x1,y1,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#00FFFF";
  context.arc(,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();
}
