var generator = new Simple1DNoise();
var x = 1, xDis = 0;
var textOut = document.getElementById("output");
var y, yDis;

setInterval(loopydoo, 1000/30);

function loopydoo(){
    x+=0.5;

    y = generator.getVal(x);
    textOut.innerHTML = y;


yDis = y*100;

var c=document.getElementById("Canvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(xDis,250);
ctx.lineTo(xDis + 10,yDis);
ctx.stroke();

xDis +=10;
}