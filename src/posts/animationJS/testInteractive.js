// https://bretcameron.medium.com/create-interactive-visuals-with-javascript-and-html5-canvas-5f466d0b26de
const cvs = document.getElementById("canvas");
const c = cvs.getContext('2d');


cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

window.addEventListener('resize', function () {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
});

let mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', function (e) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('click',function (e) {
    circ.changeColor();
});

class circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.colors = ["white", "blue", "red", "yellow"];
        this.colorId = 0;
    };

    draw = () => {
        // this is where we control the shape's appearance
        c.beginPath();
        c.arc(this.x, this.y, 40, 0, 2 * Math.PI);
        c.strokeStyle = this.colors[this.colorId];
        c.stroke();
        this.update();
    };

    update = () => {
        // this is where we control movement and interactivity
        this.x = mouse.x;
        this.y = mouse.y;
    };

    changeColor = () => {
        this.colorId = (this.colorId + 1) % this.colors.length;
    }
};

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circ.draw();
    /* this is where we call our animation methods, such as
    Shape.draw() */
};
var circ = new circle(0,0);
animate();