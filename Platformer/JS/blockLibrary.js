var blockType = [];

//normal block
blockType[0] = {
	x:	'placeholder',
	y:	'placeholder',
	width:	50,	
	height:	15,
	color:	'rgb(255,0,145)',
	
	checkBoundry: function() {
        if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y){
			charictar.x = this.x + this.width;
		}
		if (this.y <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			// charictar.y = this.y - charictar.height;
			charictar.vY = 0;
			yBoundryActive[0] = true;
		} else {
			yBoundryActive[0] = false;
		}

    }
};

//bounce block
blockType[1] = {
	x:	'placeholder',
	y:	'placeholder',
	width:	50,	
	height:	15, 
	color: 'rgb(255,255,0)',

	checkBoundry: function() {
		if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y){
			charictar.x = this.x + this.width;
		}
		if (this.y <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			// charictar.y = this.y - charictar.height;
			charictar.vY = 0;
			yBoundryActive[1] = true;
			charictar.jumpHeight = 12;
		} else {
			yBoundryActive[1] = false;
			charictar.jumpHeight = 6;
		}
	}
}