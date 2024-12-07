class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
   this.vida = 3; // Número de vidas iniciales
this.imagen = imagenPersonaje;
  }

  dibujar() {
     image(this.imagen, this.posX, this.posY, 60, 125);
  }

  teclaPresionada(keyCode) {
    // Mover el personaje dependiendo de la tecla presionada
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha()
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverDerecha() {
    this.posX += 10; // Mover hacia la derecha
  }

  moverIzquierda() {
    this.posX -= 10; // Mover hacia la izquierda
  }
  
   moverAbajo() {
    this.posY += 10; // Mover hacia abajo
   }
   
   moverArriba() {
    this.posY -= 10; // Mover hacia arriba
      
  }

  estaVivo() {
    // Verificar si el personaje está vivo
    return this.vida > 0;
  }
  
  perderVida() {
    this.vida -= 1; // Reducir la vida del personaje
  }

  estaMuerto() {
    return this.vida <= 0; // Si la vida es 0 o menor, el personaje ha muerto
  }
  

 

 haChocadoVehiculo(vehiculo) {
  // Definir las hitboxes del personaje
  let personajeIzquierda = this.posX;
  let personajeDerecha = this.posX + 10; // Ancho del personaje
  let personajeArriba = this.posY;
  let personajeAbajo = this.posY + 10; // Altura del personaje

  // Definir las hitboxes del vehículo
  let vehiculoIzquierda = vehiculo.posX;
  let vehiculoDerecha = vehiculo.posX + 130; // Ancho del vehículo
  let vehiculoArriba = vehiculo.posY;
  let vehiculoAbajo = vehiculo.posY + 100; // Altura del vehículo

  // Comprobar superposición en ambos ejes
  let colisionX = personajeIzquierda < vehiculoDerecha && personajeDerecha > vehiculoIzquierda;
  let colisionY = personajeArriba < vehiculoAbajo && personajeAbajo > vehiculoArriba;

  return colisionX && colisionY; // Hay colisión si ambos ejes se solapan
}

}

 
