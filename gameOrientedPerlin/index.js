var generator = new Simple1DNoise(),
    x = 1,y,
    textOut = document.getElementById("output"),
    Threshold = 0.0, //25% of values
    blockValues = [], //[[x],[y]]
    counter = 1;

blockValues[0] = [];
blockValues[1] = [];

for (var i = 0; i < 255; i++){
    x+=0.5;

    y = generator.getVal(x);

    if (y >= Threshold){
        blockValues[0][counter] = x;
        blockValues[1][counter] = y;
        counter++;
    }
}

var ctx = Canvas.getContext("2d"),
    canvas = document.getElementById("Canvas"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight;


for (var i = 1; i < counter; i++){
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.arc((blockValues[0][i]/127.5)*600,blockValues[1][i] * 300,1,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
}

// ctx.beginPath();
// ctx.fillStyle = 'rgb(255,0,0)';
// ctx.arc((blockValues[0][i]/127.5)*600,blockValues[1][i] * 300,1,0,Math.PI*2,false);
// ctx.fill();
// ctx.closePath();

alert(counter);



// alert("x" + "\n" + 
// blockValues[0][1] + "\n" + 
// blockValues[0][2] + "\n" + 
// blockValues[0][3] + "\n \n" + 
// "y" + "\n" + 
// blockValues[1][1] + "\n" + 
// blockValues[1][2] + "\n" + 
// blockValues[1][3]);

