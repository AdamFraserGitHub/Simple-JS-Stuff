var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
	n = 6,
	length = 40,
	color = 'rgb(255,0,255)',
	thickness = 3,
	fill = false,
	sigmaTheta,
	deltaX = [], deltaY = [],
	lineArray = [];


sigmaTheta = n*(180-360/n); //∑θ=n(180-360/n)

setInterval(draw, 1000/20);

function draw(){
for (var i = 0; i < n; i++){
	deltaX[i] = Math.sin((sigmaTheta/n - 90)/180 * Math.PI) * Math.random() * (80 - 30) + 30;
	deltaY[i] = Math.cos((sigmaTheta/n - 90)/180 * Math.PI) * Math.random() * (80 - 30) + 30;
}

lineArray[0] = [];
lineArray[1] = [];

lineArray[0][0] = 10 + deltaX[0];
lineArray[0][1] = 10 + length + deltaX[1];
lineArray[0][2] = 10 + length + 2*deltaX[2];
lineArray[0][3] = 10 + length + deltaX[3];
lineArray[0][4] = 10 + deltaX[4];
lineArray[0][5] = 10;
lineArray[0][6] = 10 + deltaX[0];

lineArray[1][0] = 10;
lineArray[1][1] = 10;
lineArray[1][2] = 10 + deltaY[0];
lineArray[1][3] = 10 + 2*deltaY[1];
lineArray[1][4] = 10 + 2*deltaY[2];
lineArray[1][5] = 10 + deltaY[3];
lineArray[1][6] = 10;


ctx.clearRect(0,0,800,800);

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = thickness;
ctx.moveTo(lineArray[0][0], lineArray[1][0]);
ctx.lineTo(lineArray[0][1], lineArray[1][1]);
ctx.lineTo(lineArray[0][2], lineArray[1][2]);
ctx.lineTo(lineArray[0][3], lineArray[1][3]);
ctx.lineTo(lineArray[0][4], lineArray[1][4]);
ctx.lineTo(lineArray[0][5], lineArray[1][5]);
ctx.lineTo(lineArray[0][6], lineArray[1][6]);
ctx.stroke();
}



