class Vehiculo {
  constructor(posX, posY, velocidad, direccion) {
    this.posX = posX;      
    this.posY = posY;      
    this.velocidad = velocidad; 
    this.direccion = direccion;  
    this.imagen = imagenVehiculo; 
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 130, 100);  // Dibujar el vehículo
  }

  mover() {
    // Mover el vehículo dependiendo de su dirección
    this.posX += this.velocidad; // Mover hacia la derecha
    if (this.posX > width + 100) {
      this.posX = -100; // Reaparecer en el borde izquierdo
    }
  }

 colisiona(personaje) {
  // Definir las hitboxes para el vehículo y el personaje
  let vehiculoIzquierda = this.posX;
  let vehiculoDerecha = this.posX + 130; // Ancho del vehículo
  let vehiculoArriba = this.posY;
  let vehiculoAbajo = this.posY + 50; // Altura del vehículo

  let personajeIzquierda = personaje.posX;
  let personajeDerecha = personaje.posX + 20; // Ancho del personaje
  let personajeArriba = personaje.posY;
  let personajeAbajo = personaje.posY + 20; // Altura del personaje

  // Comprobar superposición en ambos ejes
  let colisionX = vehiculoIzquierda < personajeDerecha && vehiculoDerecha > personajeIzquierda;
  let colisionY = vehiculoArriba < personajeAbajo && vehiculoAbajo > personajeArriba;

  return colisionX && colisionY; // Hay colisión si ambos ejes se solapan
}


}
