var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById("Canvas").width = w
document.getElementById("Canvas").height = h
var context;
alert(w + " " + h);

  context= Canvas.getContext('2d');


  context.beginPath();
  context.fillStyle="#FF0000";
  context.rect(0,0,w,h);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#FF00FF";
  context.rect(0,0,w/2,h/2);
  context.closePath();
  context.fill();