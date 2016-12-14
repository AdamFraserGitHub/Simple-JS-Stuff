var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    n = 10,
    radius = 200,
    centerX = 1.25*radius, centerX = 1.25*radius,
    xArray = [], yArray = [];

var startPointX = Math.random() * (2*radius - radius) + radius,
    startPointY = Math.random() * (2*radius - radius) + radius;

ctx.beginPath();
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.lineWidth = 1;

ctx.moveTo (startPointX +  radius * Math.cos(0), startPointY +  radius *  Math.sin(0));          
 
for (var i = 1; i <= n - 1; i++) {
     centerX = Math.random() * (2*radius - radius) + radius;
     centerY = Math.random() * (2*radius - radius) + radius;

     xArray[i] = centerX + radius * Math.cos(i * 2 * Math.PI / n);
     yArray[i] = centerY + radius * Math.sin(i * 2 * Math.PI / n);

     ctx.lineTo (xArray[i], yArray[i]);
}

for (var i = 1; i <= n; i++){
    ctx.moveTo(xArray[i],yArray[i]);
    ctx.lineTo(xArray[i + 2],yArray[i + 2]);
}

ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(xArray[n-1],yArray[n-1]);
ctx.lineTo (startPointX + radius * Math.cos(n * 2 * Math.PI / n), startPointY + radius * Math.sin(n * 2 * Math.PI / n));
ctx.strokeStyle = 'rgb(255,0,0)'
ctx.stroke();
ctx.closePath();