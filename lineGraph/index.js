var generator = new Simple1DNoise();
var x = 1, xDis = 0;
var textOut = document.getElementById("output");
var y, yDis, yDisTemp = 250;

setInterval(loopydoo, 1000/60);

function loopydoo(){
    x+=0.5;

    y = generator.getVal(x);
    textOut.innerHTML = y;


yDis = y*75;

var c=document.getElementById("Canvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.moveTo(xDis,yDisTemp);
ctx.lineTo(xDis + 25,250 - yDis);
ctx.closePath();
ctx.stroke();

yDisTemp = 250 - yDis

// if (xDis >= 1000){
//     ctx.clearRect(0,0,1000,500);
//     xDis = 0
// }

if (250 - yDis < 200){
    ctx.beginPath();
    ctx.arc(xDis + 25, 250 - yDis, 5, 0, Math.PI*2, false);
    ctx.fillStyle = 'rgba(255,0,0,0.75)';
    ctx.fill();
}

xDis +=25;

ctx.beginPath();
ctx.strokeStyle = 'rgb(255,0,0)';
ctx.moveTo(0,200);
ctx.lineTo(15000,200);
ctx.closePath();
ctx.stroke();

ctx.font = "20px Arial";
ctx.fillText("200",5,180);
}

//xDis = scale
//yDis = amp