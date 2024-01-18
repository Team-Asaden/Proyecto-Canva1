// WebGL
var gl;
gl.viewport(0, 0, canva.width, canva.height);

function start() {
  var canva = document.getElementById("glcanvas");
  console.log("hola")
  gl = initWebGL(canva); // Inicializar el contexto GL

  // Solo continuar si WebGL esta disponible y trabajando

  if (gl) {
    
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Establecer el color base en negro, totalmente opaco
    gl.enable(gl.DEPTH_TEST); // Habilitar prueba de profundidad
    gl.depthFunc(gl.LEQUAL); // Objetos cercanos opacan objetos lejanos
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Limpiar el buffer de color asi como el de profundidad
  }
}

function initWebGL(canvas) {
  gl = null;

  try {
    // Tratar de tomar el contexto estandar. Si falla, retornar al experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {}

  // Si no tenemos ningun contexto GL, date por vencido ahora
  if (!gl) {
    alert("Imposible inicializar WebGL. Tu navegador puede no soportarlo.");
    gl = null;
  }

  return gl;
}




// function drawface() {
//     const canvas = document.getElementById("canva-face");
//     if (canvas.getContext) {
//       const ctx = canvas.getContext("2d");
  
//       ctx.beginPath();
//       ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//       ctx.moveTo(110, 75);
//       ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
//       ctx.moveTo(65, 65);
//       ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
//       ctx.moveTo(95, 65);
//       ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
//       ctx.stroke();
//     }
// }
  