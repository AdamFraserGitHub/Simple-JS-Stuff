var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    n = 6,
    radius = 200,
    centerX = [], centerY = [],
    xArray = [], yArray = [];

// setInterval(draw,1000/10)

// function draw(){

ctx.clearRect(0,0,800,800);

var startPointX = Math.random() * (2*radius - radius) + radius,
    startPointY = Math.random() * (2*radius - radius) + radius;

ctx.beginPath();
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.lineWidth = 1;

ctx.moveTo (startPointX +  radius * Math.cos(0), startPointY +  radius *  Math.sin(0));          
 
for (var i = 1; i <= n - 1; i++) {
     centerX[i] = Math.random() * (2*radius - radius) + radius;
     centerY[i] = Math.random() * (2*radius - radius) + radius;

     xArray[i] = centerX + radius * Math.cos(i * 2 * Math.PI / n);
     yArray[i] = centerY + radius * Math.sin(i * 2 * Math.PI / n);

     ctx.arc(centerX,centerY,5,0,Math.PI*2,false);

     ctx.lineTo (xArray[i], yArray[i]);
}

ctx.moveTo(xArray[n-1],yArray[n-1]);
ctx.lineTo (startPointX + radius * Math.cos(n * 2 * Math.PI / n), startPointY + radius * Math.sin(n * 2 * Math.PI / n));

ctx.moveTo(startPointX +  radius * Math.cos(0), startPointY +  radius *  Math.sin(0));
ctx.lineTo(xArray[4],yArray[4]);

ctx.moveTo(xArray[1],yArray[1]);
ctx.lineTo(xArray[3],yArray[3]);

ctx.moveTo(xArray[2],yArray[2]);
ctx.lineTo(xArray[5],yArray[5]);

ctx.moveTo(xArray[1],yArray[1]);
ctx.lineTo(xArray[4],yArray[4]);

ctx.moveTo(xArray[1],yArray[1]);
ctx.lineTo(xArray[5],yArray[5]);

ctx.moveTo(xArray[2],yArray[2]);
ctx.lineTo(startPointX +  radius * Math.cos(0), startPointY +  radius *  Math.sin(0));

ctx.stroke();
ctx.closePath();

// }

// ctx.beginPath();
// ctx.fillStyle = 'rgb(255,0,0)'

for (var i = 1; i <= n - 1; i++) {
    // ctx.arc(centerX[i],centerY[i],5,0,Math.PI*2,false);
    alert("centerX[" + i + "]: " + centerX[i] + "\n" + "centerY[" + i + "]: " + centerY[i]);
}

// ctx.closePath();
// ctx.fill();
