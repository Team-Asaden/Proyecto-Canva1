var canva = document.getElementById("canva-1");
var ctx = canva.getContext("2d");


let x=400,y=200,w=50,h=50;
ctx.fillStyle = "blue";
ctx.strokeStyle = "green";
ctx.fillRect(x,y,w,h);

const azul = () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,w,h);
    console.log(ctx.fillStyle)
}

const rojo = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(x,y,w,h);
}
const verde = () => {

    ctx.fillStyle = "green";
    ctx.fillRect(x,y,w,h);
}
const arriba = () => {
    y = y -35;
    ctx.fillRect(x,y,w,h);
    ctx.clearRect(x,y+50,w,h);
}
const abajo  = () => {
    y = y +35;
    ctx.fillRect(x,y,w,h)
    ctx.clearRect(x,y-50,w,h);
}
const izquierda = () => {
    x = x - 35;
    ctx.fillRect(x,y,w,h)
    ctx.clearRect(x+50,y,w,h);
}
const derecha = () => {
    x = x + 35;
    ctx.fillRect(x,y,w,h)
    ctx.clearRect(x-50,y,w,h);
}



document.getElementById('blue').addEventListener('click',azul);
document.getElementById('red').addEventListener('click',rojo);
document.getElementById('green').addEventListener('click',verde);

document.getElementById('top').addEventListener("click",arriba)
document.getElementById('bottom').addEventListener("click",abajo)
document.getElementById('left').addEventListener("click",izquierda)
document.getElementById('right').addEventListener("click",derecha)
