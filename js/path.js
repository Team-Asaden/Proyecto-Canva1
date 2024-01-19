var canvas = document.getElementById("path");
var ctx = canvas.getContext("2d");


function setFullscreen(){
    var w = window.innerWidth / canvas.width;
    var h = window.innerHeight / canvas.height;
    var scale = Math.min(h, w);

    canvas.style.width = (canvas.width * scale) + 'px';
    canvas.style.height = (canvas.height * scale) + 'px';
    canvas.style.position = 'fixed';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.marginLeft = -(canvas.width * scale) / 2 + 'px';
    canvas.style.marginTop = -(canvas.height * scale) / 2 + 'px';
}


function unsetFullscreen(){
    canvas.style.width = '';
    canvas.style.height = '';
    canvas.style.position = '';
    canvas.style.left = '';
    canvas.style.top = '';
    canvas.style.marginLeft = '';
    canvas.style.marginTop = '';
}

//https://juegoscanvas.blogspot.com/