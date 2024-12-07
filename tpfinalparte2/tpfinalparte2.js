//Comisión 4, prof: Leonardo Garay, tpfinalparte2 recu (videojuego)
// Delfina Pinto y Pilar Rancaño
// link al video: https://youtu.be/6jLFRwzCo5A

let estadoJuego; // Estados: instrucciones, jugando, ganar, perder
let musicaFondo;
let imagenVehiculo, imagenCarretera, imagenPersonaje;


function preload() {
  // Cargar sonidos
 musicaFondo = loadSound('data/fondo.mp3');
 
  
  // cargar imagenes
  imagenVehiculo = loadImage("data/autito.png");
  imagenCarretera = loadImage ("data/ruta.jpg");
  imagenPersonaje = loadImage ("data/sophie.png");
  imgInstrucciones = loadImage('data/instrucciones.jpg');
  imgGanar = loadImage('data/ganaste.jpg');
  imgPerder = loadImage('data/perdiste.png');
  imgCreditos = loadImage('data/creditos.jpg');
  
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego;
  estadoJuego = new EstadoJuego (objJuego);
  

}

function draw() {
  background(200);
  
  estadoJuego.mostrarEtapa (objJuego);
  
  image(imagenCarretera);  
  image(imagenVehiculo);     
  image (imagenPersonaje); 
  
}

function keyPressed() {
  estadoJuego.percibirTecla (keyCode, objJuego);
  
}

function mousePressed(){
  estadoJuego.pasarClick (mouseX, mouseY) ;
}
