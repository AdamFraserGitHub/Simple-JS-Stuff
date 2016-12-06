var charictar, ground,
    ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight,
    keyPress = [],
    Score = 0,
	Gravity = 1,
	gameStart = false,
	yBoundryActive = [];

	//charictar properties
	charictar = {
		width:	10,
		height:	10,
		x:	scrWidth /6,
		y:	scrHeight /2 -10 , //10 = charictar.height
		color:	'rgb(255,225,25)',
		speed:	6,
		jumpHeight:	6,
		vX:	0,
		vY:	0
	};

	blockType[0].x = scrWidth/4 - 50;
	blockType[0].y = scrHeight/2 - 15;

	blockType[1].x = scrWidth/4 * 2 -50
	blockType[1].y = scrHeight/2 - 15;


	//ground properties
	ground = {
		height: scrHeight /2,
		width: 2,
		color: 'rgb(0,0,0)',
	};

	setInterval(timer,	1000/30); 
	
	function timer(){
		dynamicDeclerations();
		draw();
		controller();
		boundryChecker();
		physics();
	}

	function dynamicDeclerations(){

		//updates scrWidth + scrHeight variables so game scale can change dynamicly
		scrWidth = window.innerWidth;
    	scrHeight = window.innerHeight;
		
		//reasigns canvas size
		canvas.width = scrWidth
		canvas.height = scrHeight
	}

	function draw(){

		//clears the screen so last frame doesnt stay
		ctx.clearRect(0,0,	scrWidth,scrHeight);

		//Draw BG
		canvas.style.backgroundColor = 'rgb(255,255,255)';

		//Draw charictar
		ctx.fillStyle = charictar.color;
		ctx.fillRect(charictar.x,charictar.y,	charictar.width,charictar.height);

		//Draw ground
		ctx.fillStyle = ground.color;
		ctx.fillRect(0,ground.height,	scrWidth,ground.width);

		//Draw normal block
		ctx.fillStyle = blockType[0].color;
		ctx.fillRect(blockType[0].x,blockType[0].y,    blockType[0].width,blockType[0].height);

		//Draw bounce block
		ctx.fillStyle = blockType[1].color;
		ctx.fillRect(blockType[1].x,blockType[1].y,    blockType[1].width,blockType[1].height);

		//debug panel
		ctx.fillStyle = 'rgb(0,0,0)';
  		ctx.font = "10px serif";
  		ctx.fillText(charictar.vY, scrWidth - 100, 10);
		ctx.fillText(charictar.y,	scrWidth - 100, 20);
		ctx.fillText("scrHeight: " + scrHeight/2,	scrWidth - 100, 30);
	}


	function controller(){
		//left
		if (keyPress[37]){
			charictar.x -= charictar.speed;
		}

		//right
		if (keyPress[39]){
			charictar.x += charictar.speed;
		}

		//up
		if (keyPress[38] && charictar.y == ground.height - charictar.height){
			charictar.vY = -charictar.jumpHeight;
			gameStart = true;	
		} else if (keyPress[38] && yBoundryActive[0] == true){
			charictar.vY = -charictar.jumpHeight;
		} else if (keyPress[38] && yBoundryActive[1] == true){
			charictar.vY = -charictar.jumpHeight;
		}

	}


	function boundryChecker(){

		blockType[0].checkBoundry();
		blockType[1].checkBoundry();		
	}


	function physics(){

		if (charictar.y <= ground.height - charictar.height){
			charictar.y += charictar.vY;
		}

		if (charictar.vY != 0){
			charictar.vY += Gravity;
		} 

		if (charictar.y == ground.height -charictar.height){
			charictar.vY = 0;
		} else if (charictar.vY == 0 && gameStart == true && charictar.y < (scrHeight/2 + charictar.y)){
			charictar.vY += Gravity;
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
	keyPress[38] = false;
}
