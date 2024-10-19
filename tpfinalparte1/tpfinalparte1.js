///Pilar Rancaño Luchetti y Delfina Pinto Guzman   
           //120360/1            //119111/8
// Comisión 4

// Arreglos y variables
let imagenes = [];        
let textos = [];          
let estadoActual = 0;    
let altopantalla = 480;   
let anchopantalla = 640;
let sonidoBoton;


let pantallas = {
  0: { texto: 0, imagen: 0, botones: ["Siguiente"] },       
  1: { texto: 1, imagen: 1, botones: ["Siguiente"] },  
  2: { texto: 2, imagen: 2, botones: ["Siguiente"] },       
  3: { texto: 3, imagen: 3, botones:["Permanecer en la tienda", "Ir a la ciudad"] },
  4: { texto: 4, imagen: 4, botones: ["Siguiente"] },       
  5: { texto: 5, imagen: 5, botones: ["Siguiente"] }, 
  6: { texto: 6, imagen: 6, botones: ["Te resignas y \nmudas a un geriatrico", "Vas en busca de una cura"] },     
  7: { texto: 7, imagen: 7, botones: ["Siguiente"] } ,      
  8: { texto: 8, imagen: 8, botones: ["Reiniciar"] },       
  9: { texto: 9, imagen: 9, botones:  ["Siguiente"] },
  10: { texto: 10, imagen: 10, botones: ["Siguiente"] },       
  11: { texto: 11, imagen: 11, botones: ["Ir a la guerra y le ofreces tu ayuda", "Que no se involucre"] },      
  12: { texto: 12, imagen: 12, botones: ["Siguiente"] },       
  13: { texto: 13, imagen: 13, botones: ["Siguiente"] } ,
  14: { texto: 14, imagen: 14, botones: ["Siguiente"] },       
  15: { texto: 15, imagen: 15, botones: ["Siguiente"] } ,   
  16: { texto: 16, imagen: 16, botones: ["Reiniciar"] } ,   
  17: { texto: 17, imagen: 17, botones: ["Reiniciar"] } ,     
};
// Arreglo para cambiar de estado
let cambiodeEstado = [
  [1],      
  [2],    
  [3],       
  [4,5],      
  [6],       
  [6],    
  [8,7],       
  [9] , 
   [0],      
  [10],   
  [11],      
  [12,13],       
  [14],       
  [15],    
  [16],      
  [17] ,    
  [0],      
  [0] ,     
];
function preload() {
  // Cargar las imágenes, textos y sonido del boton
  for (let i = 0; i < 18; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg");
  } 
  textos = loadStrings("data/textos.txt");
  sonidoBoton = loadSound('data/sonido.mp3');
}

function setup() {
  createCanvas(anchopantalla, altopantalla);
}

function draw() {
  background(200);  
  manejarEstado(estadoActual);  
}

function mousePressed() {
  let opciones = cambiodeEstado[estadoActual];  
  
  if (opciones.length > 1) {
    detectarBoton(opciones);  
  } else {
    sonidoBoton.play();  
    estadoActual = opciones[0];  
  }
}

function manejarEstado(estado) {
  let imagenActual = imagenes[pantallas[estado].imagen];
  let textoActual = textos[pantallas[estado].texto];
  
  image(imagenActual, 0, 0, anchopantalla, altopantalla);
  
  fill(0,0,200);
  textAlign(CENTER);
  textSize(20);
  let textoX = anchopantalla / 100; 
  let textoY = altopantalla - 200; 
  let anchoTexto = 600; 
  text(textoActual, textoX, textoY, anchoTexto);  

  let botones = pantallas[estado].botones;
  
  if (botones.length > 1) {
    dibujarBoton(anchopantalla / 2 - 200, altopantalla - 100, botones[0]);  
    dibujarBoton(anchopantalla / 2 + 50, altopantalla - 100, botones[1]);   
  } else {
    dibujarBoton(anchopantalla / 2 - 75, altopantalla - 100, botones[0]);  
  }
}
