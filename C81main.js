canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

color = "aqua";
width = 2;
radius = 50;


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(200, 200, radius, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", moused);

function moused(e){
color = document.getElementById("canvas_color").value;
width_of_line = document.getElementById("paint_width").value;
radius = document.getElementById("paint_radius").value;


mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;
console.log("X = " + mouse_x + "Y = " + mouse_y);

circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y){

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(mouse_x, mouse_y, 50, 0, 2*Math.PI);
ctx.stroke();
}

function Clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}