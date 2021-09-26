canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "teal";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 55, 0, 2*Math.PI);
ctx.stroke();








canvas.addEventListener("mousedown", drawcircle)
function drawcircle(e){

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("drawcircle")

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();
}

