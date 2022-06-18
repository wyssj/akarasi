var c = document.getElementById("blochSphere");
ctx = c.getContext("2d");
ctx.strokeStyle = 'white';
ctx.beginPath();
ctx.arc(c.width - c.width/2, c.height - c.height/2, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.moveTo(c.width/2, c.width/2);
ctx.lineTo(c.width/2 + 100, c.width/2);
ctx.stroke();
ctx.moveTo(c.width/2, c.width/2);
ctx.lineTo(c.width/2, c.width/2 - 100);
ctx.stroke();

const canvas = document.getElementById('bloch');
ctx = canvas.getContext('2d');

canvas.width = 100;
canvas.height = 100;

ctx.clearRect(0, 0, 100, 100);

ctx.beginPath();
ctx.arc(50, 50, 45, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(50, 50, 45, 20, 0, 0, Math.PI);
ctx.stroke();

ctx.save();
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.ellipse(50, 50, 45, 20, 0, Math.PI, 2 * Math.PI);
ctx.stroke();
ctx.restore();

ctx.beginPath();
ctx.ellipse(50, 50, 20, 45, 0, Math.PI / 2, 3 * Math.PI / 2);
ctx.stroke();

ctx.save();
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.ellipse(50, 50, 20, 45, 0, 3 * Math.PI / 2, Math.PI / 2);
ctx.stroke();
ctx.restore();

ctx.beginPath();
ctx.arc(50, 50, 3, 0, Math.PI * 2);
ctx.fill();

ctx.save();

ctx.lineWidth = 3;

ctx.strokeStyle = 'rgba(0, 0, 255, 0.3)';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 5);
ctx.stroke();

ctx.strokeStyle = 'rgba(0, 0, 255, 0.9)';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 35);
ctx.stroke();

ctx.restore();

ctx.save();

ctx.lineWidth = 1.5;

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(80, 48);
ctx.stroke();

ctx.beginPath();
ctx.arc(80, 48, 2, 0, Math.PI * 2);
ctx.fill();

ctx.restore();