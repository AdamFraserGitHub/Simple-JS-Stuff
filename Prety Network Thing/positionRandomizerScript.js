
function positionRandomizer(){
  //gives xa random value to make points jitter across screen but also to give
  //points something to refference
  x[0] = Math.floor((Math.random() * 560) + 20);
  x[1] = Math.floor((Math.random() * 560) + 20);
  x[2] = Math.floor((Math.random() * 560) + 20);
  x[3] = Math.floor((Math.random() * 560) + 20);
  x[4] = Math.floor((Math.random() * 560) + 20);
  x[5] = Math.floor((Math.random() * 560) + 20);

  //gives ya random value to make points jitter across screen but also to give
  //points something to refference
  y[0] = Math.floor((Math.random() * 560) + 20);
  y[1] = Math.floor((Math.random() * 560) + 20);
  y[2] = Math.floor((Math.random() * 560) + 20);
  y[3] = Math.floor((Math.random() * 560) + 20);
  y[4] = Math.floor((Math.random() * 560) + 20);
  y[5] = Math.floor((Math.random() * 560) + 20);
}
