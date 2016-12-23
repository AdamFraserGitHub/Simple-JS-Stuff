var canvas = document.getElementById("Canvas"), ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth, scrHeight = window.innerHeight;

var square0 = {
    width:1/5, // 1/5 scrWidth
    height:1/2.5, // 1/5 scrHeight
    xCenter:1/2, // 1/2 scrWidth
    yCenter:1/2 // 1/2 scrHeight
};

var square1 = {
    width:1/10, // 1/10 scrWidth
    height:1/5, // 1/10 scrHeight
    xCenter:1/2, // 1/2 scrWidth
    yCenter:1/2 // 1/2 scrHeight
};

canvas.width = scrWidth;
canvas.height = scrHeight;

canvas.style.backgroundColor = 'rgb(0,0,0)';

setInterval(timer, 1000/30);

function timer(){
    render();
}

function render() {
    ctx.clearRect(0, 0,  scrWidth, scrHeight);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,255,0)';
    ctx.fillStyle = 'rgba(0,255,255,0.2)';
    ctx.lineWidth = 1;
    
    ctx.moveTo(square0.xCenter * scrWidth - square0.width * scrWidth, square0.yCenter * scrHeight - square0.height * scrHeight); //top left Vertex
    ctx.lineTo(square0.xCenter * scrWidth + square0.width * scrWidth, square0.yCenter * scrHeight - square0.height * scrHeight); //top right Vertex
    ctx.lineTo(square0.xCenter * scrWidth + square0.width * scrWidth, square0.yCenter * scrHeight + square0.height * scrHeight); //bottom right Vertex
    ctx.lineTo(square0.xCenter * scrWidth - square0.width * scrWidth, square0.yCenter * scrHeight + square0.height * scrHeight); //bottom left Vertex
    ctx.lineTo(square0.xCenter * scrWidth - square0.width * scrWidth, square0.yCenter * scrHeight - square0.height * scrHeight); //top left Vertex (close)

    
    ctx.moveTo(square1.xCenter * scrWidth - square1.width * scrWidth, square1.yCenter * scrHeight - square1.height * scrHeight); //top left Vertex
    ctx.lineTo(square1.xCenter * scrWidth + square1.width * scrWidth, square1.yCenter * scrHeight - square1.height * scrHeight); //top right Vertex
    ctx.lineTo(square1.xCenter * scrWidth + square1.width * scrWidth, square1.yCenter * scrHeight + square1.height * scrHeight); //bottom right Vertex
    ctx.lineTo(square1.xCenter * scrWidth - square1.width * scrWidth, square1.yCenter * scrHeight + square1.height * scrHeight); //bottom left Vertex
    ctx.lineTo(square1.xCenter * scrWidth - square1.width * scrWidth, square1.yCenter * scrHeight - square1.height * scrHeight); //top left Vertex (close)

    ctx.moveTo(square0.xCenter * scrWidth - square0.width * scrWidth, square0.yCenter * scrHeight - square0.height * scrHeight); //top left Vertex
    ctx.lineTo(square1.xCenter * scrWidth - square1.width * scrWidth, square1.yCenter * scrHeight - square1.height * scrHeight); //top left Vertex (close)

    ctx.moveTo(square0.xCenter * scrWidth + square0.width * scrWidth, square0.yCenter * scrHeight - square0.height * scrHeight); //top right Vertex
    ctx.lineTo(square1.xCenter * scrWidth + square1.width * scrWidth, square1.yCenter * scrHeight - square1.height * scrHeight); //top right Vertex

    ctx.moveTo(square0.xCenter * scrWidth + square0.width * scrWidth, square0.yCenter * scrHeight + square0.height * scrHeight); //bottom right Vertex
    ctx.lineTo(square1.xCenter * scrWidth + square1.width * scrWidth, square1.yCenter * scrHeight + square1.height * scrHeight); //bottom right Vertex

    ctx.moveTo(square0.xCenter * scrWidth - square0.width * scrWidth, square0.yCenter * scrHeight + square0.height * scrHeight); //bottom left Vertex
    ctx.lineTo(square1.xCenter * scrWidth - square1.width * scrWidth, square1.yCenter * scrHeight + square1.height * scrHeight); //bottom left Vertex

    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

function scrResized() {
    scrWidth = window.innerWidth;
    scrHeight = window.innerHeight;
    canvas.width = scrWidth;
    canvas.height = scrHeight;
}
