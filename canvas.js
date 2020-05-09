$(document).ready(function() {
    // Grab the canvas
    const canvas = $("canvas")[0];
    // Set height and width of canvas to winsow's dimensions
    canvas.width = $("body").width();
    canvas.height = $("body").height();

    // Context
    const c = canvas.getContext("2d");
    
    // Rectangles
    c.fillStyle = "rgba(255, 0, 0, 0.5)";
    c.fillRect(100, 100, 100, 100);
    c.fillStyle = "rgba(0, 0, 255, 0.5)";
    c.fillRect(200, 200, 200, 100);
    c.fillStyle = "rgba(0, 255, 0, 0.5)";
    c.fillRect(300, 300, 100, 200);

    // Line
    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 400);
    c.lineTo(50, 300);
    c.strokeStyle = "#fa34a3";
    c.stroke();

    // Arc / Circle
    // c.beginPath();
    // c.arc(300, 300, 30, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue";
    // c.stroke();

    for (let i = 0; i < 10; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }
})