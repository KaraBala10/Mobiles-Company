var circle = document.getElementById("circle");
var Up = document.getElementById("up");
var Down = document.getElementById("down");

var rotateValue = circle.style.transform;
var rotateSum;
Up.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform= rotateSum
    rotateValue = rotateSum;
}
down.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform= rotateSum
    rotateValue = rotateSum;
}