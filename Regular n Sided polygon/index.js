var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    output = document.getElementById("textBox"),
    numberOfSides = 2,
    size = 100,
    Xcenter = 1.25*size,
    Ycenter = 1.25*size;
 
setInterval(draw,1000/3);

function draw(){
    ctx.clearRect(0,0,800,800);

    ctx.beginPath();
    ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
 
    for (var i = 1; i <= numberOfSides;i += 1) {
       ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
 
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // if (numberOfSides < 10){
        numberOfSides+=1;
    // }

    output.innerHTML = numberOfSides - 1;
}