var x = 0,y,
    velX,speed,deltaV,
    keys = [],
    canvas,
    ctx;


function canvasLoad(){
  ctx = Canvas.getContext("2d");
  canvas = document.getElementById('Canvas')
}


//listens for key press
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
//means key can be pressed more than once
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
//refeshes function update();
window.addEventListener("load",function(){
    update();
});


function update(){
  ctx.fillStyle = 'rgb(255,0,0)';
  ctx.fillRect(0,0,5,10);

  if(keys[39]){
    alert("it worked!");
  }

  requestAnimationFrame(update);
}
