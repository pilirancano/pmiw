function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(0, 255, 255); // Color si el mouse está sobre el botón
  } else {
    fill(0, 0, 255); // Color normal del botón
  }
  rect(px, py, pan, pal, pal / 4); // Dibujar el rectángulo del botón
}
function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}
