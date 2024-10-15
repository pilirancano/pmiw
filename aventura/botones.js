function DibujarBotones() {
  fill(0, 0, 255);  
  rect(anchopantalla / 2 - 150, altopantalla - 100, 150, 50);  // Botón izquierda 
  rect(anchopantalla / 2 + 50, altopantalla - 100, 150, 50);   // Botón derecha 
  fill(255);  
  text("Opción A", anchopantalla / 2 - 75, altopantalla - 75);  // texto
  text("Opción B", anchopantalla / 2 + 100, altopantalla - 75); // texto
}

function DibujarBotonSimple() {
  fill(0, 255, 0);  
  rect(anchopantalla / 2 - 75, altopantalla - 100, 150, 50);  // Botón simple
  fill(255);  
  text("Siguiente", anchopantalla / 2, altopantalla - 75);  //texto
}



function detectarBoton(opciones) {
  // Primer botón
  if (mouseX > anchopantalla / 2 - 150 && mouseX < anchopantalla / 2 - 50 && mouseY > altopantalla - 100 && mouseY < altopantalla - 50) {
    estadoActual = opciones[0]; // Opción A
  } 
  // Segundo botón (solo si hay más de una opción)
  else if (opciones.length > 1 && mouseX > anchopantalla / 2 + 50 && mouseX < anchopantalla / 2 + 200 && mouseY > altopantalla - 100 && mouseY < altopantalla - 50) {
    estadoActual = opciones[1]; // Opción B
  }
}
