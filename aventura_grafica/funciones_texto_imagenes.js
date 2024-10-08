function cargarimagen(imag, x, y, ancho, alto) {
  image(imag, x, y, ancho, alto); // Dibujar la imagen en la pantalla
}


function mostrarTexto(texto) {
 fill(255);
    textAlign(CENTER);
    textSize(20); 
    let textoX = anchopantalla / 300; 
    let textoY = altopantalla - 100; 
    let anchoTexto = 600;  
  text(texto, textoX, textoY, anchoTexto);
}
