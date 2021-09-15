  var mouseEvent="empty";
var last_position_of_X,last_position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line= 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_X=e.clientX - canvas.offsetLeft;
current_Y=e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of X and Y coordinates =") ;
console.log("X = " + last_position_of_X + "Y = " + last_position_of_Y)  ;
ctx.moveTo(last_position_of_X , last_position_of_Y);

console.log("current position of X and Y coordinates = ");
console.log("X = " + current_X + "Y = " + current_Y);
ctx.lineTo(current_X , current_Y);
ctx.stroke();
}
last_position_of_X=current_X;
last_position_of_Y=current_Y;
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}