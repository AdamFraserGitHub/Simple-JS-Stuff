var charictar, ground,
    ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("canvas"),
    scrWidth = window.innerWidth - 20,
    scrHeight = window.innerHeight - 20,
    keyPress = [],
    Score = 0;

	document.getElementById("Canvas").width = scrWidth
	document.getElementById("Canvas").height = scrHeight

	//charictar properties
	charictar = {
		width: 10,
		height: 10,
		x: 50,
		y: scrHeight /2 -10 , //10 = charictar.height
		color: 'rgb(255,0,0)',
		speed: 2.5
	};

	//ground properties
	ground = {
		height: scrHeight /2,
		width: 2,
		color: 'rgb(0,0,0)',
	};

	setInterval(timer,	1000/60); 
	
	function timer(){
		draw();
		controller();
	}


	function draw(){
		ctx.clearRect(0,0,	scrWidth,scrHeight);

		//Draw charictar
		ctx.fillStyle = charictar.color;
		ctx.fillRect(charictar.x,charictar.y,	charictar.width,charictar.height);

		//Draw ground
		ctx.fillStyle = ground.color;
		ctx.fillRect(0,ground.height,	scrWidth,ground.width);
	}


	function controller(){
		//left
		if (keyPress[37]){
			charictar.x -= charictar.speed;
		}

		//right
		if(keyPress[39]){
			charictar.x += charictar.speed;
		}
	}


//handles key presses
//presses key
document.body.addEventListener("keydown", function(e) {
	keyPress[e.keyCode] = true;
});

//stops pressing key
document.body.addEventListener("keyup", function(e) {
	keyPress[e.keyCode] = false;
});

function keyPressOff(){
	keyPress[39] = false;
	keyPress[37] = false;
}
