
var canvas = document.getElementById("Canvas"),
    ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight;

var character = {
    x: scrWidth/2,
    y: scrHeight/2,
    r: 10,
    Vx: 1,
    Vy: 1
};

var obstacle = {
    x: scrWidth/2 + 50,
    y: scrHeight/2 + 50,
    r: 20,
    Vx: 0,
    Vy: 0
};

var rebounder = {
    x: -50,
    y: -50,
    r: 10,
    Draw: false
};

var score = 0;

var point = {};

canvas.width = scrWidth;
canvas.height = scrHeight;
canvas.style.backgroundColor = 'rgb(0,0,0)';

setInterval(threads, 1000/60);

function threads(){
    draw();
    collisionSensor();
}

function draw(){
    ctx.clearRect(0,0,scrWidth,scrHeight);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(250,60,90)';
    ctx.lineWidth = 2;
    ctx.arc(character.x,character.y,character.r,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();

    character.x+=character.Vx;
    character.y+=character.Vy;

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(90,60,250)';
    ctx.lineWidth = 2;
    ctx.arc(obstacle.x,obstacle.y,obstacle.r,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();

    if(rebounder.Draw){
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(200,200,200)';
        ctx.lineWidth = 1;
        ctx.arc(rebounder.x,rebounder.y,rebounder.r,0,Math.PI*2,false);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.fillStyle = 'rgb(255,255,0)';
    ctx.font="10px Georgia";
    ctx.fillText("Score: " + score,scrWidth - 50,10);

    obstacle.x+=obstacle.Vx;
    obstacle.y+=obstacle.Vy;

}

function collisionSensor(){
    var dx = (character.x + character.r) - (rebounder.x + character.r);
    var dy = (character.y + character.r) - (rebounder.y + character.r);
    var distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < character.r + rebounder.r){
        canvas.style.backgroundColor = 'rgb(255,0,0)';
        character.Vx = -character.Vx;
        character.Vy = -character.Vy;
    } else {
        canvas.style.backgroundColor = 'rgb(0,0,0)';
    }

    if(character.x + character.r >= scrWidth || character.x - character.r <= 0){
        character.Vx = -character.Vx
    }

    if(character.y >= scrHeight - character.r || character.y - character.r <= 0){
        character.Vy = -character.Vy
    }
}

function Rebounder(event){
    rebounder.x = event.clientX,
    rebounder.y = event.clientY;

    rebounder.Draw = true;
}
