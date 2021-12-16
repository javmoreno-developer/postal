var exterior=document.getElementById("exterior");


//animacion de mensaje main navideño
var mensaje=document.getElementById("mensaje");

//nieve
document.addEventListener('keyup', (e)=> {
  //console.log("pulsado"+e.code);
  
   if(e.code=="ArrowRight" && exterior.className=="noflipped") {
    exterior.className="flipped";
    exterior.style.transition="transform 0.6s";
    exterior.style.transformStyle ="preserve-3d";
    exterior.style.transform="rotateY(180deg)";
    gsap.to(mensaje, {duration: 6, text: "May the sweet magic of christmas conspire to gladden your heart and fill every desire"})
    vamos();
  } else {
    if(e.code=="ArrowLeft") {
      exterior.className="noflipped";
      exterior.style.transition="transform 0.6s";
      exterior.style.transformStyle ="preserve-3d";
      exterior.style.transform="rotateY(0deg)";
      gsap.to(mensaje, {duration: 1, text: ""})
    }

  }
console.log(e.code);
});



function vamos() {
  
var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var num = 60;
var tamaño = 40;
var elementos = [];

inicio();
nevada();


window.addEventListener("resize", function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

function inicio() {
  for (var i = 0; i < num; i++) {
    elementos[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 10 - 5,
      toY: Math.random() * 5 + 1,
      tamaño: Math.random() * tamaño
    }
  }
}

function nevada() {
  window.requestAnimationFrame(nevada); 
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < num; i++) {
    var e = elementos[i];
    ctx.beginPath();
    cristal(e.x, e.y, e.tamaño);
    ctx.fill();
    ctx.stroke();
    e.x = e.x + e.toX;
    e.y = e.y + e.toY;
    if (e.x > w) { e.x = 0;}
    if (e.x < 0) { e.x = w;}
    if (e.y > h) { e.y = 0;}
  }
  //timer = setTimeout(nevada,10);
}

function cristal(cx, cy, long) {
  ctx.fillStyle = "white";
  ctx.lineWidth = long / 20;
  ctx.arc(cx, cy, long / 15, 0, 2 * Math.PI);
  for (i = 0; i < 6; i++) {
    ctx.strokeStyle = "white";
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + long / 2 * Math.sin(i * 60 / 180 * Math.PI),
               cy + long / 2 * Math.cos(i * 60 / 180 * Math.PI));
  }
}
}

function inicio() {
  swal({
      title: "Para mover la tarjeta usa las flechas del teclado",
      //text: "Coincide la letra con el dni",
      icon: "info",
      button: "Aceptar",
    }); 
}

window.onload=inicio();


