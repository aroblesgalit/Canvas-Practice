$(document).ready(function () {
    // Grab the canvas
    const canvas = $("canvas")[0];
    // Set height and width of canvas to winsow's dimensions
    canvas.width = $("body").width();
    canvas.height = $("body").height();

    // Context
    const c = canvas.getContext("2d");

    // Rectangles
    // c.fillStyle = "rgba(255, 0, 0, 0.5)";
    // c.fillRect(100, 100, 100, 100);
    // c.fillStyle = "rgba(0, 0, 255, 0.5)";
    // c.fillRect(200, 200, 200, 100);
    // c.fillStyle = "rgba(0, 255, 0, 0.5)";
    // c.fillRect(300, 300, 100, 200);

    // Line
    // c.beginPath();
    // c.moveTo(50, 300);
    // c.lineTo(300, 100);
    // c.lineTo(400, 400);
    // c.lineTo(50, 300);
    // c.strokeStyle = "#fa34a3";
    // c.stroke();

    // Arc / Circle
    // c.beginPath();
    // c.arc(300, 300, 30, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue";
    // c.stroke();

    // for (let i = 0; i < 10; i++) {
    //     const x = Math.random() * window.innerWidth;
    //     const y = Math.random() * window.innerHeight;
    //     c.beginPath();
    //     c.arc(x, y, 30, 0, Math.PI * 2, false);
    //     c.strokeStyle = "blue";
    //     c.stroke();
    // }

    const mouse = {
        x: undefined,
        y: undefined
    }

    const maxRadius = 40;
    const minRadius = 10;

    // Colors array
    const colorArray = [
        "#a5dff9", 
        "#ef5285", 
        "#60c5ba", 
        "#feee7d"
    ];

    $(window).mousemove(function(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    // Create a Circle object
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function () {
            // Create a circle
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // c.strokeStyle = "blue";
            // c.stroke();
            c.fillStyle = this.color;
            c.fill();
            // c.fillStyle = circleFills[Math.floor(Math.random() * circleFills.length)];
        }

        this.update = function () {
            // When the x-coor + radius is greater than the innerWidth or the x-coor - radius is less than 0
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                // then update the sign of the dx --- reverse the velocity
                this.dx = -this.dx;
            }

            // When the y-coor + radius is greater than the innerHeight or the y-coor - radius is less than 0
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                // then update the sign of the dy --- reverse the velocity
                this.dy = -this.dy;
            }

            // Increment x by dx
            this.x += this.dx;
            this.y += this.dy;

            // Interactivity
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50
                && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > minRadius) {
                this.radius -= 1;
            }

            this.draw();
        }
    }

    const circleArray = [];

    for (let i = 0; i < 100; i++) {
        let radius = 30;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
   
    function animate() {
        // Animate by using requestAnimationFrame function and passing in the animate function
        requestAnimationFrame(animate);
        // Clear the canvas each time
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
        
    };

    // Run animate
    animate();
})