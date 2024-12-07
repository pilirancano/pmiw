///Pilar Rancaño Luchetti y Delfina Pinto Guzman   
           //120360/1            //119111/8
// Comisión 4
let imagenes = [];
let textos = [];
let estadoActual = 0;
let altopantalla = 480;
let anchopantalla = 640;
let sonidoBoton;


let botonesTexto = [
  ["Iniciar"],  
  ["Siguiente"],  
  ["Siguiente"],  
  ["Siguiente"],  
  ["Permanecer en la tienda", "Ir a la ciudad"], 
  ["Siguiente"],  
  ["Siguiente"], 
  ["Te resignas y \nmudas a un geriátrico", "Vas en busca de una cura"], 
  ["Siguiente"],  
  ["Siguiente"],  
  ["Siguiente"],
  ["Siguiente"],  
  ["Ir a la guerra y le ofreces tu ayuda", "Que no se involucre"],  
  ["Siguiente"],  
  ["Siguiente"],  
  ["Siguiente"],  
  ["Siguiente"], 
  ["Siguiente"],  
  ["Siguiente"],  
  ["Reiniciar"], 
];


let cambiodeEstado = [
  [1],      
  [2],    
  [3],
  [4],
  [5, 6],      
  [7],       
  [7],    
  [9, 8],       
  [10], 
  [19],      
  [11],   
  [12],      
  [13, 14],       
  [15],       
  [16],    
  [17],      
  [18],    
  [19],      
  [19],  
  [0], 
];

function preload() {
  
  for (let i = 0; i < 20; i++) {
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
  let imagenActual = imagenes[estado];
  let textoActual = textos[estado];

  image(imagenActual, 0, 0, anchopantalla, altopantalla);

  fill(0, 0, 200);
  textAlign(CENTER);
  textSize(20);
  let textoX = anchopantalla / 100; 
  let textoY = altopantalla - 200; 
  let anchoTexto = 600; 
  text(textoActual, textoX, textoY, anchoTexto);  

  let botones = botonesTexto[estado];
  if (botones) {
    for (let i = 0; i < botones.length; i++) {
      let x, y;

      
      if (estado === 0) { 
        x = anchopantalla / 2 - 95;
        y = altopantalla / 3; 
      } else if (estado === 19) { 
        x = anchopantalla / 2 - 95;
        y = altopantalla / 3; 
      } else { 
        x = anchopantalla / 2 - 200 + (i * 250);
        y = altopantalla - 100;
      }
      
      dibujarBoton(x, y, botones[i], i);
    }
  }
}
