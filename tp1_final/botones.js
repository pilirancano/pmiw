function dibujarBoton(x, y, textoBoton) {
  fill(0,0,255);
  rect(x, y, 190, 60);  
  
  fill(255);
  textAlign(CENTER);  
  textSize(12);                
  
  text(textoBoton, x + 95, y + 30); 
}

function detectarBoton(opciones) {
  if (mouseX > anchopantalla / 2 - 200 && mouseX < anchopantalla / 2 - 50 && mouseY > altopantalla - 100 && mouseY < altopantalla - 50) {
    sonidoBoton.play();  
    estadoActual = opciones[0];  
  } 
  else if (mouseX > anchopantalla / 2 + 50 && mouseX < anchopantalla / 2 + 200 && mouseY > altopantalla - 100 && mouseY < altopantalla - 50) {
    sonidoBoton.play();  
    estadoActual = opciones[1];  
  }
}
