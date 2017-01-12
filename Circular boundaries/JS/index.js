
var canvas = document.getElementById("Canvas"),
    ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight;

var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

canvas.width = scrWidth;
canvas.height = scrHeight;
canvas.style.backgroundColor = 'rgb(0,0,0)';

setInterval(draw, 1000/60);

function draw(){
    ctx.clearRect(0,0,scrWidth,scrHeight);

    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255,0,255)';
    ctx.lineWidth = 1;
    ctx.arc(circle1.x,circle1.y,circle1.radius,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.lineWidth = 1;
    ctx.arc(circle2.x,circle2.y,circle2.radius,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();

    if (distance < circle1.radius + circle2.radius) {
        alert("colision");
    }
}
