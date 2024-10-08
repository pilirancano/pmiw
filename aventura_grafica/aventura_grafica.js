// variables y arreglos
let imagenes = []; 
let estado;
let textos = [];
let altopantalla = 480;
let anchopantalla= 640;


function preload() {
  // Cargar imagenes y texto
  for (let i = 0; i < 6; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg");
  }
  textos = loadStrings("data/textos.txt");
}

function setup() {
  createCanvas(anchopantalla, altopantalla);
  estado = "inicio";
}

function draw() {
  background(200);
// corroborar estado, dibujar botones, poner imagenes y texto correspondiente
  // Estado Inicio
  if (estado === "inicio") {
    cargarimagen(imagenes[0], 0, 0, anchopantalla, altopantalla); 
    dibujarBoton(50, 50, 100, 50); 
    mostrarTexto(textos[0]); 
 // Primer Estado   
  } else if (estado === "primera") {
    cargarimagen(imagenes[1], 0, 0, anchopantalla, altopantalla);
    dibujarBoton(50, 50, 100, 50); 
    dibujarBoton(50, height - 100, 100, 50);
    mostrarTexto(textos[1]); 
 // Segundo Estado   
  } else if (estado === "segunda") {
    cargarimagen(imagenes[2], 0, 0, anchopantalla, altopantalla);
    dibujarBoton(50, 50, 100, 50); 
    dibujarBoton(50, height - 100, 100, 50);
    mostrarTexto(textos[2]); 
    // Tercer Estado
  } else if (estado === "tercera") {
    cargarimagen(imagenes[3], 0, 0, anchopantalla, altopantalla);
    dibujarBoton(50, 50, 100, 50); 
    dibujarBoton(50, height - 100, 100, 50);
    mostrarTexto(textos[3]); 
   // Cuarto Estado 
  } else if (estado === "cuarta") {
    cargarimagen(imagenes[4], 0, 0, anchopantalla, altopantalla);
    dibujarBoton(50, 50, 100, 50); 
    dibujarBoton(50, height - 100, 100, 50);
    mostrarTexto(textos[4]); 
  // Quinto Estado  
  } else if (estado === "quinta") {
   cargarimagen(imagenes[5], 0, 0, anchopantalla, altopantalla);
    dibujarBoton(50, 50, 100, 50); 
    dibujarBoton(50, height - 100, 100, 50);
    mostrarTexto(textos[5]); 
  }
}

function mousePressed() {
  // Cambiar de estado
  if (estado === "inicio") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "primera";
    }
  } else if (estado === "primera") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "segunda";
    } else if (detectarBoton(50, altopantalla - 100, 100, 50)) {
      estado = "inicio";
    }
  } else if (estado === "segunda") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "tercera";
    } else if (detectarBoton(50, altopantalla - 100, 100, 50)) {
      estado = "primera";
    }
  } else if (estado === "tercera") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "cuarta";
    } else if (detectarBoton(50, altopantalla - 100, 100, 50)) {
      estado = "segunda";
    }
  } else if (estado === "cuarta") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "quinta";
    } else if (detectarBoton(50, altopantalla - 100, 100, 50)) {
      estado = "tercera";
    }
  } else if (estado === "quinta") {
    if (detectarBoton(50, altopantalla - 100, 100, 50)) {
      estado = "cuarta";
    }
  }
}
