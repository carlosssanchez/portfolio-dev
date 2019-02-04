
// HTML
// <section>
// <div id="canvasesdiv" style="position:relative; width:400px; height:300px">
// <canvas id="layer1"
// style="z-index: 1;
// position:absolute;
// left:0px;
// top:0px;
// " height="300px" width="400">

var layer1;
var layer2;
var layer3;
var ctx1;
var ctx2;
var ctx3;
var x = 400;
var y = 300;
var dx = 2;
var dy = 4;
var WIDTH = 400;
var HEIGHT = 300;
var city = new Image();

function init() {
city.src ="city.png";
layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
layer3 = document.getElementById("layer3");
ctx3 = layer3.getContext("2d");
setInterval(drawAll, 20);
}

ctx1.beginPath();
ctx1.arc(x, y, 10, Math.PI / 2, Math.PI * 3 / 2 , true);
