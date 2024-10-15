// Variables
let imagenes = [];        
let estadoActual = 0;     
let textos = [];          
let altopantalla = 480;   
let anchopantalla = 640;

// Arreglo de distintos caminos
let caminos = [
  [1],          
  [2,3],          
  [5],      
  [5],      
  [5],        
  [6,7],  
  [0],
   [0],
];

function preload() {
  for (let i = 0; i < 8; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg"); 
  }
  textos = loadStrings("data/textos.txt");
}

function setup() {
  createCanvas(anchopantalla, altopantalla);
}

function draw() {
  background(200);  
  cargarimagen(imagenes[estadoActual], 0, 0, anchopantalla, altopantalla); 
  mostrarTexto(textos[estadoActual]);  
  
  let opciones = caminos[estadoActual];  
  
  if (opciones.length > 1) {
    DibujarBotones();  //dibujar botones si hay más de una opción
  } else if (opciones.length === 1) {
    DibujarBotonSimple();  //dibujar un solo botón
  }
}

function mousePressed() {
  let opciones = caminos[estadoActual]; 
  
  if (opciones.length > 1) {
    detectarBoton(opciones);  
  } else if (opciones.length === 1) {
    estadoActual = opciones[0];  // Si hay un solo botón, pasamos a la siguiente pantalla
  }
}



 
