var canvas = document.getElementById("Canvas"), ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth, scrHeight = window.innerHeight;

var innerSquareX, innerSquareY,
    innerSquareWidth, innerSquareHeight;

var cube = [];

    for (var i = 0; i < 6; i++) {
        cube[i] = [];
    }

    cube[0][0] = "test0";
    cube[0][1] = 0;
    cube[0][2] = 1.1;

    // cube[1][0] = ;
    // cube[1][1] = ;
    // cube[1][2] = ;

    // cube[2][0] = ;
    // cube[2][1] = ;
    // cube[2][2] = ;

    // cube[3][0] = ;
    // cube[3][1] = ;
    // cube[3][2] = ;

    // cube[4][0] = ;
    // cube[4][1] = ;
    // cube[4][2] = ;

    cube[5][0] = "test5";
    cube[5][1] = 5;
    cube[5][2] = 6.6;

    alert(cube[5][0] + "\n" + cube[0][2]);

//see root for clarification on what each section of this array means


var vanishingPoint = {
    x: scrWidth/2,
    y: scrHeight/2,
    z: 500
}

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
    ctx.lineWidth = 0.75;

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
