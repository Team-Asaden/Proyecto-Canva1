var canva = document.getElementById("path");
var ctx = canva.getContext("2d");

let p1 = new Path2D();
p1.rect(0,0,100,150);

let p2 = new Path2D();
p2.rect(0, 0, 100, 75);


let m = new DOMMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;


p1.addPath(p2, m);


ctx.fill(p1);
