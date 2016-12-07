var generator = new Simple1DNoise();
var x = 1;
var y = generator.getVal(x);

var textOut = document.getElementById("output");
textOut.innerHTML = y;