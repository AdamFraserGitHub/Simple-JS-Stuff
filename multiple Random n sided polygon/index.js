var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    n = 6,
    radius = 50,
    centerX = [], centerY = [],
    xArray = [], yArray = [],
    movt = 0;

setInterval(draw,1000/10)

function draw(){

// ctx.clearRect(0,0,800,800);

var regularCenterX = Math.random() * (2*radius - radius) + radius,
    regularCenterY = Math.random() * (2*radius - radius) + radius;

ctx.beginPath();
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.lineWidth = 1;

ctx.moveTo (regularCenterX +  radius * Math.cos(0), regularCenterY +  radius *  Math.sin(0) + movt);          
 
for (var i = 1; i <= n - 1; i++) {
     centerX[i] = Math.random() * (2*radius - radius) + radius;
     centerY[i] = Math.random() * (2*radius - radius) + radius;

     xArray[i] = centerX[i] + radius * Math.cos(i * 2 * Math.PI / n);
     yArray[i] = centerY[i] + radius * Math.sin(i * 2 * Math.PI / n);

     ctx.lineTo (xArray[i], yArray[i] + movt);
}

ctx.moveTo(xArray[n-1],yArray[n-1] + movt);
ctx.lineTo (regularCenterX + radius * Math.cos(n * 2 * Math.PI / n), regularCenterY + radius * Math.sin(n * 2 * Math.PI / n) + movt);

ctx.moveTo(regularCenterX +  radius * Math.cos(0), regularCenterY +  radius *  Math.sin(0) + movt);
ctx.lineTo(xArray[4],yArray[4] + movt);

ctx.moveTo(xArray[1],yArray[1] + movt);
ctx.lineTo(xArray[3],yArray[3] + movt);

ctx.moveTo(xArray[2],yArray[2] + movt);
ctx.lineTo(xArray[5],yArray[5] + movt);

ctx.moveTo(xArray[1],yArray[1] + movt);
ctx.lineTo(xArray[4],yArray[4] + movt);

ctx.moveTo(xArray[1],yArray[1] + movt);
ctx.lineTo(xArray[5],yArray[5] + movt);

ctx.moveTo(xArray[2],yArray[2] + movt);
ctx.lineTo(regularCenterX +  radius * Math.cos(0), regularCenterY +  radius *  Math.sin(0) + movt);

ctx.stroke();
ctx.closePath();

ctx.beginPath();

ctx.arc(regularCenterX, regularCenterX + movt, 5, 0, Math.PI*2, false);

ctx.fillStyle = 'rgb(255,0,255)'
ctx.fill();
ctx.closePath()

movt+=3*radius;
}
