var canva = document.getElementById("canva-1");
var ctx = canva.getContext("2d");


let x=100,y=100,w=100,h=100;
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
    console.log(ctx.fillStyle)
}
const verde = () => {

    ctx.fillStyle = "green";
    ctx.fillRect(x,y,w,h);
    console.log(ctx.fillStyle)
}
const arriba = () => {
    y = y -1;
    ctx.fillRect(x,y,w,h)

}
const abajo  = () => {
    y = y +1;
    ctx.fillRect(x,y,w,h)

}
const izquierda = () => {
    x = x + 1;
    ctx.fillRect(x,y,w,h)

}
const derecha = () => {
    x = x -1;
    ctx.fillRect(x,y,w,h)

}


document.getElementById('blue').addEventListener('click',azul);
document.getElementById('red').addEventListener('click',rojo);
document.getElementById('green').addEventListener('click',verde);

document.getElementById('top').addEventListener("click",arriba)
document.getElementById('bottom').addEventListener("click",abajo)
document.getElementById('left').addEventListener("click",izquierda)
document.getElementById('right').addEventListener("click",derecha)
