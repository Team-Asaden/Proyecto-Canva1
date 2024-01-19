var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");


let x=0;
let y = 0;
let px = 0;
let py = 0;



const draw_p1 = () =>{
    // ctx.moveTo(120,25);
    // ctx.fillStyle = '200 0 0'
    // ctx.fillRect(x, y, w, h);
    var nave = new Image();
    nave.src = "/imagenes/nave-espacial.png";
    nave.onload = () => {
        ctx.drawImage(nave,px,py,20,20,x,y,20,20)
        console.log("Mov")
    }
   }
const del_p1 = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
draw_p1();
flag = 0;
window.onkeydown = function(event) {
    var num = event.keyCode;
    event.preventDefault();
    if (num == 87) { // 'W'
     y -= 10;
    } else if (num == 83) { // 'S'
     y += 10;
    } else if (num == 65) { // 'A'
      x -= 10;
    } else if (num == 68) { // 'D'
      x += 10;
    }
    del_p1();
    draw_p1();
  }
function draw() {

    if (canvas.getContext) {
  
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  }