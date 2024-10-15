function cargarimagen(imag, x, y, ancho, alto) {
  image(imag, x, y, ancho, alto); 
}

function mostrarTexto(texto) {
 fill(255);
    textAlign(CENTER);
    textSize(20); 
    let textoX = anchopantalla / 100; 
    let textoY = altopantalla - 200; 
    let anchoTexto = 600;  
  text(texto, textoX, textoY, anchoTexto);
}
