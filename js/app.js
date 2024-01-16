var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

context.fillRect(5, 5, 145, 145);
context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(40, 55, 145, 145);
context.fillStyle = "rgba(255, 0, 0, 0.2)";
context.fillRect(75, 105, 145, 145);

// context.beginPath();
// context.strokeStyle = "rgb(0, 0, 0)"; 
// context.arc(123, 93, 70, 0, 1.5 * Math.PI, true);
// context.stroke();

// context.beginPath();
// context.fillStyle = "rgb(0, 0, 0)";
// context.arc(123, 93, 70, 0, 1.2 * Math.PI, true);
// context.fill();

// context.lineWidth = 20;
// context.beginPath();
// context.moveTo(5, 50);
// context.bezierCurveTo(30, 30, 130, 530, 200, 100);
// context.stroke();