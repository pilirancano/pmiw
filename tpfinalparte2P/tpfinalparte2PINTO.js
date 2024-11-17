//Comisión 4, prof: Leonardo Garay, tpfinalparte2 videojuego
// Delfina Pinto y Pilar Rancaño

let estadoJuego = new EstadoJuego (); // Estados: instrucciones, jugando, ganar, perder
let musicaFondo, sonidoGanar, sonidoPerder;
let imagenAgua, imagenVehiculo, imagenCarretera, imagenPersonaje;

function preload() {
  // Cargar sonidos
 musicaFondo = loadSound('data/funny-bgm-240795.mp3');
  sonidoGanar = loadSound('data/correct.mp3');
  sonidoPerder = loadSound('data/incorrecto-bocina-.mp3');
  
  // cargar imagenes
  imagenAgua = loadImage ("data/agua.jpg");
  imagenVehiculo = loadImage("data/auto.png");
  imagenCarretera = loadImage ("data/carretera.jpg");
  imagenPersonaje = loadImage ("data/personaje.png");
  
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(6);
  musicaFondo.loop();
}

function draw() {
  background(200);
  
  estadoJuego.mostrarEtapa (objJuego);
  
   image(imagenCarretera);  // Dibujar carretera de fondo
  image(imagenAgua);        // Ejemplo de usar la imagen de agua
  image(imagenVehiculo );     // Dibujar vehículo
  image (imagenPersonaje); 
  
}

function keyPressed() {
  estadoJuego.percibirTecla (keyCode, objJuego);
  
}

/*function mostrarInstrucciones() {
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("Presiona ESPACIO para empezar", width / 2, height / 2);
  if (true){ 
    //(keyIsPressed && key === ' ')
    estadoJuego.cambiarEstado ("jugando");
    objJuego.iniciar();
  }
}

function mostrarGanar() {
  fill(0, 255, 0);
  textAlign(CENTER);
  textSize(20);
  text("¡Ganaste! Presiona R para reiniciar.", width / 2, height / 2);
  dibujarBotonReinicio();
}

function mostrarPerder() {
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(20);
  text("Perdiste. Presiona R para reiniciar.", width / 2, height / 2);
  dibujarBotonReinicio();
}
*/


function mousePressed() {
  // Detectar clic en el botón de reinicio 
  console.log ("posicionMouse", mouseX, mouseY);
  if (estadoJuego !== null && (estadoJuego.estado === "ganar" || estadoJuego.estado === "perder")) {
    let x = width / 2 - 75;
    let y = height / 2 + 30;
    let w = 150;
    let h = 40;
   console.log ("posicionBoton", x,y);
    
    if (mouseX > x && mouseX < (x + w) && mouseY > y && mouseY < (y + h)) {
      console.log ("reiniciar");
      estadoJuego.estado = "jugando"; objJuego.iniciar ();  
    }
  }
}
