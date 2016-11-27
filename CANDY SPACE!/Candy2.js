
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 720,
    height = 50,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5,
      speed: 3,
      velX: 0
    };
    keys = [];
    friction = 0.8;
    gravity = 0.3;

canvas.width = width;
canvas.height = height;

function update(){

    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;


    player.x += player.velX;

    if (player.x >= width-player.width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }



  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = 'rgb(100,0,255)';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load",function(){
    update();
});
