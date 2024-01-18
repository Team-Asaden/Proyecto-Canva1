var canva = document.getElementById("canva-1");
var ctx = canva.getContext("2d");


let x=400,y=200,w=50,h=50;
ctx.fillStyle = "blue";
ctx.fillRect(x,y,w,h);

const azul = () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,w,h);
}

const rojo = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(x,y,w,h);
}
const verde = () => {

    ctx.fillStyle = "green";
    ctx.fillRect(x,y,w,h);
}

const draw_p1 = () =>{

    ctx.moveTo(120,25);
    ctx.fillStyle = '200 0 0'
    ctx.fillRect(x, y, w, h);
   
   }
const del_p1 = () =>{
    ctx.clearRect(0, 0, canva.width, canva.height);
}

window.onkeydown = function(event) {
    var num = event.keyCode;
    event.preventDefault();
    if (num == 87) { // 'W'
     y -= 35;
    } else if (num == 83) { // 'S'
     y += 35;
    } else if (num == 65) { // 'A'
      x -= 35;
    } else if (num == 68) { // 'D'
      x += 35;
    }
    del_p1();
    draw_p1();
  }
function draw() {

    if (canva.getContext) {
  
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  }
document.getElementById('blue').addEventListener('click',azul);
document.getElementById('red').addEventListener('click',rojo);
document.getElementById('green').addEventListener('click',verde);


    // const arriba = () => {
    //     y = y -35;
    //     ctx.fillRect(x,y,w,h);
    //     ctx.clearRect(x,y+50,w,h);
    // }
    // const abajo  = () => {
    //     y = y +35;
    //     ctx.fillRect(x,y,w,h)
    //     ctx.clearRect(x,y-50,w,h);
    // }
    // const izquierda = () => {
    //     x = x - 35;
    //     ctx.fillRect(x,y,w,h)
    //     ctx.clearRect(x+50,y,w,h);
    // }
    // const derecha = () => {
    //     x = x + 35;
    //     ctx.fillRect(x,y,w,h)
    //     ctx.clearRect(x-50,y,w,h);
    // }
    
// document.getElementById('top').addEventListener("click",arriba)
// document.getElementById('bottom').addEventListener("click",abajo)
// document.getElementById('left').addEventListener("click",izquierda)
// document.getElementById('right').addEventListener("click",derecha)
