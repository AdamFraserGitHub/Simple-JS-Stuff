
//draws arcs of r=5 at position xa,ya with centre angle of 2π radians or
//360deg = full circle

function points(){
  //point 0
  context.beginPath();
  context.fillStyle="#FF0000";
  context.arc(x[0],y[0],5,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  // //point 1
  // context.beginPath();
  // context.fillStyle="#00FF00";
  // context.arc(x[1],y[1],5,0,Math.PI*2,true);
  // context.closePath();
  // context.fill();
  //
  // //point 2
  // context.beginPath();
  // context.fillStyle="#0000FF";
  // context.arc(x[2],y[2],5,0,Math.PI*2,true);
  // context.closePath();
  // context.fill();
  //
  // //point 3
  // context.beginPath();
  // context.fillStyle="#FFFF00";
  // context.arc(x[3],y[3],5,0,Math.PI*2,true);
  // context.closePath();
  // context.fill();
  //
  // //point 4
  // context.beginPath();
  // context.fillStyle="#FF00FF";
  // context.arc(x[4],y[4],5,0,Math.PI*2,true);
  // context.closePath();
  // context.fill();
  //
  // //point 5
  // context.beginPath();
  // context.fillStyle="#00FFFF";
  // context.arc(x[5],y[5],5,0,Math.PI*2,true);
  // context.closePath();
  // context.fill();
}
