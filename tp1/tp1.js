// Pilar Rancaño Luchetti ///// Comision 4 (antes 2)//// Legajo:120360/1
// https://youtu.be/c9CEma8bLBQ
let imagen ;
let tam;
let cant;
let tam2;
let colores;
let colores2;
function preload(){
imagen= loadImage('data/F_42.png');  
}


function setup() {
createCanvas(800,400);
image(imagen);
tam=40;
cant=20;
tam2=17;
colores= color (255);
colores2= color (0);

}


function draw() {
  image(imagen,0,0);
   grilla (0,0);
   circulos (0,0);
 

}
function keyPressed(){
    if ((key==='-') && (cant  <= 60) && (tam2 <=90) ) {
    cant++;

    tam= width/cant;
    tam2=width/(cant*2);
    
  } else if ((key==='+') && (cant  <= 60) && (tam2 <=90) ) {
    cant--;
    tam= width/cant;
    tam2=width/(cant*2);
    
  }
  if  (key==='c') {
    colores2= color (random(255), random(255), random(255));
  }
   if (key==='r') {
    cant = 20;
    tam2 = 17;
    tam= 40;
    colores= color (255);
    colores2= color (0);
  }
}

function calcularColor(x, y) {
   let colorX = map(x, 0, 400, 0, 255);
   let colorY = map(y, 0, 800, 0, 255);
  return color(colorX, 255, colorY); 
}

function mouseDragged() {
  colores = calcularColor(mouseX, mouseY); 
}

  
  
