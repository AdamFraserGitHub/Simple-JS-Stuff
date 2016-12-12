var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
	n = 6,
	sigmaTheta,
	difX, dif;

sigmaTheta = n*(180-360/n); //∑θ=n(180-360/n)

difX = Math.sin((sigmaTheta/n - 90)/180 * Math.PI) * 30;
difY = Math.cos((sigmaTheta/n - 90)/180 * Math.PI) * 30;

ctx.beginPath();
ctx.strokeStyle = 'rgb(255,0,0)'
ctx.moveTo(50, 50);
ctx.lineTo(80, 50);
ctx.lineTo(80 + difX, 50 + difY);
ctx.lineTo(80, 50 + 2*difY);
ctx.lineTo();
ctx.stroke();