const canvas = document.getElementById('canvas');


if (canvas.getContext){
const ctx = canvas.getContext('2d');
console.log("canvas soportado");

ctx.fillStyle = 'rgb(200 0 0)'
ctx.fillRect(10, 10, 50, 25);

ctx.fillStyle = 'rgb(0 0 200 / 50%)';
ctx.fillRect(30, 20, 50, 25);

   //borra cierta area
 ctx.clearRect(30, 20, 30, 15);

  //dibuja un borde
ctx.strokeRect(10,10, 70, 35);



} else {
console.log('canvas no soportado');

}



const drawTriangulo = () => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(100, 50);
      ctx.lineTo(0, 25);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.lineTo(100, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.stroke();
    }
  }

  drawTriangulo();




let x = 0;
let y = 0;
let px = 0;
let py = 0;
let width = 20;
let height = 10;

const moveCanvas = document.getElementById('canvasMove');
const cav = moveCanvas.getContext('2d');


const draw_p1 = () =>{

//  cav.moveTo(120,25);
//  cav.fillStyle = '200 0 0'
//  cav.fillRect(x, y, width, height);
let personaje = new Image()
personaje.src = '../assets/Sprout Lands - Sprites - Basic pack/Characters/CharakterSpritesheet.png';
personaje.onload = () => {cav.drawImage(personaje,px,py,40,40,x,y,40,40);}
}
const del_p1 = () =>{
    cav.clearRect(0, 0, canvas.width, canvas.height);
}

draw_p1();
  flag = 0;

const movementP1 = () => {
  if(flag == 0){
      px = 100;
      flag =1;
     }else{
        px = 150;
        flag= 0;
     }
}

window.onkeydown = function(event) {
    var num = event.keyCode;
    event.preventDefault();
    if (num == 87) { // 'W'
     y -= 10;
     py =50;
     movementP1();
    } else if (num == 83) { // 'S'
     y += 10;
    py =0 ;
     movementP1();
     
   
    } else if (num == 65) { // 'A'
      x -= 10;
      py = 100;
      movementP1();
    } else if (num == 68) { // 'D'
      x += 10;
      py = 150;
      movementP1();
    }
    del_p1();
    draw_p1();
  }
  