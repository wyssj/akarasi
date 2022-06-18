window.onload = function() {
    var c = document.getElementById("canvas1");
    let ctx = c.getContext("2d");

    ctx.strokeStyle = 'white';
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 10);
    ctx.stroke();

    var c = document.getElementById("canvas2");
    ctx = c.getContext("2d");
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

    var c = document.getElementById("canvas3");
    ctx = c.getContext("2d");
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
}