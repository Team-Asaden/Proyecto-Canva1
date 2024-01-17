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