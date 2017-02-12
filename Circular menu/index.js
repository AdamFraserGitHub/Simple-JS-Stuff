var canvas = document.getElementById("Canvas"),
    ctx = canvas.getContext("2d");

var r=75, x=100, y=100, devisions = 6, selectedDevision = 1, devisionTheta, sTheta, eTheta;
var x2,y2;

setInterval(draw, 1000/10);

function draw(){
	ctx.clearRect(0,0,5000,50000);
	devisionTheta = Math.PI*(360/devisions/180), 
	
	sTheta = selectedDevision*devisionTheta - Math.PI*(90/180),
	eTheta = selectedDevision*devisionTheta + devisionTheta - Math.PI*(90/180);

	ctx.fillStyle = 'rgba(255,0,0,0.2)';
	ctx.beginPath();
	ctx.arc(x2,y2,r,0,Math.PI*2,false);
	ctx.lineTo(x,y);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = 'rgba(255,0,0,0.4)';
	ctx.beginPath();
	ctx.arc(x,y,r,sTheta,eTheta,false);
	ctx.lineTo(x,y);
	ctx.fill();
	ctx.closePath();
selectedDevision+=1
}

function WhichButton(event){
	x2=event.clientX;
	y2=event.clientY;
}



