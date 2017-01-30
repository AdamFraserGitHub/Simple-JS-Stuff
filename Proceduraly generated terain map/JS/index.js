
var canvas = document.getElementById("Canvas"),
    ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight;

canvas.width = scrWidth;
canvas.height = scrHeight;
// canvas.style.backgroundColor = 'rgb(255,255,255)';

var nDevisions = 100000,
    dxBiomeCenter = [], dyBiomeCenter = [], distBiomeCenter = [],
    nCenters = 100,
    biomeTags = [],
    biomeCenters = []; //array of n centers

    biomeTags[0] = 'rgb(0,255,0)';
    biomeTags[1] = 'rgb(255,0,0)';
    biomeTags[2] = 'rgb(0,0,255)';
    biomeTags[3] = 'rgb(255,255,255)';

for (var i = 0; i < nCenters; i++){
    biomeCenters[i] = []; //[x][0]=xPos [x][1]=yPos [x][2]=BiomeTag
    biomeCenters[i][0] = Math.floor((Math.random() * 2*scrWidth));
    biomeCenters[i][1] = Math.floor((Math.random() * 2*scrHeight));
    biomeCenters[i][2] = Math.floor((Math.random() * biomeTags.length));
}

// for (var i = 0; i < nCenters; i++){
//     ctx.beginPath();
//     ctx.fillStyle = biomeTags[biomeCenters[i][2]];
//     ctx.arc(biomeCenters[i][0],biomeCenters[i][1],3,0,Math.PI*2,false);
//     ctx.fill();
//     ctx.closePath();
// }


var devisionWidth = Math.round(scrWidth/Math.sqrt(nDevisions)), devisionHeight = Math.round(scrHeight/Math.sqrt(nDevisions)),
    xDevisionStart = 0, yDevisionStart = 0;
    

for (var i = 0; i < 2*nDevisions; i++){

    //find closest center
    for (var j = 0; j < nCenters; j++){
        dxBiomeCenter[j] = (xDevisionStart + 1/2*devisionWidth) - biomeCenters[j][0];
        dyBiomeCenter[j] = (yDevisionStart + 1/2*devisionHeight) - biomeCenters[j][1];
        distBiomeCenter[j] = Math.sqrt(dyBiomeCenter[j]*dyBiomeCenter[j] + dxBiomeCenter[j]*dxBiomeCenter[j]);
    }

    var closestDist = distBiomeCenter[0],
        closestIndex = 0;

    for (var j = 1; j < nCenters; j++){
        if (distBiomeCenter[j] < closestDist) {
            closestDist = distBiomeCenter[j]
            closestIndex = j;
            // ctx.fillStyle = biomeCenters[j][2];
        }
    }

    ctx.beginPath();
    ctx.fillStyle = biomeTags[biomeCenters[closestIndex][2]];
    ctx.rect(xDevisionStart,yDevisionStart,devisionWidth,devisionHeight);
    ctx.fill();
    ctx.closePath();

    if(xDevisionStart + devisionWidth >= scrWidth){
        xDevisionStart = -devisionWidth;
        yDevisionStart+=devisionHeight;
    }

    xDevisionStart+=devisionWidth;
}



