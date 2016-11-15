var context, CanvasVar;

var margin = 10;

var greenPercentText, orangePercentText, redPercentText;
var greenPercentTextDiv, orangePercentTextDiv, redPercentTextDiv;
var widthGreen, widthOrange, widthRed;
var GreenPercent, OrangePercent, RedPercent;

function ScriptCall() {
  context = Canvas.getContext('2d');
  CanvasVar = document.getElementById('Canvas');

  greenPercentText = document.getElementById('greenPercent');
  orangePercentText = document.getElementById('orangePercent');
  redPercentText = document.getElementById('redPercent');

  greenPercentTextDiv = document.getElementById('greenPercentDiv');
  orangePercentTextDiv = document.getElementById('orangePercentDiv');
  redPercentTextDiv = document.getElementById('redPercentDiv');

  context.clearRect(0,0,600,100);
  CanvasVar.style.backgroundColor = 'rgb(0,0,0)';

  //Math
  var GreenPercent = 50;
  var OrangePercent = 12;
  var RedPercent = 38;


  widthGreen = (CanvasVar.width / (1 / (GreenPercent / 100)));
  widthOrange = (CanvasVar.width / (1 / (OrangePercent / 100)));
  widthRed = (CanvasVar.width / (1 / (RedPercent / 100)));

  context.beginPath();
  context.fillStyle = 'rgb(0,255,0)';
  context.rect(0,0,widthGreen,100);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle = 'rgb(255,140,0)';
  context.rect(widthGreen,0,widthOrange,100);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle = 'rgb(255,0,0)';
  context.rect(widthGreen + widthOrange,0,widthRed,100);
  context.closePath();
  context.fill();

  greenPercentTextDiv.style.left = (widthGreen / 2) + margin;
  orangePercentTextDiv.style.left = (widthOrange / 2) + margin + widthGreen;
  redPercentTextDiv.style.left = (widthRed / 2) + margin + widthGreen + widthOrange;

  greenPercentText.innerHTML = GreenPercent + "%"
  orangePercentText.innerHTML = OrangePercent + "%"
  redPercentText.innerHTML = RedPercent + "%"

}
