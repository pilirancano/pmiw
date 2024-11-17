class Juego {
  constructor(cantidadVehiculos) {
    this.cantidadVehiculos = 6;
    this.vehiculos = []; // Arreglo de vehículos
    this.personaje = null; // El personaje que se mueve
    this.juegoTerminado = false; // Indicar si el juego ha terminado
  }

  iniciar() {
    this.vehiculos= [];
    this.crearPersonaje();
    this.crearVehiculos();
    this.crearPersonaje();
  }


 crearPersonaje() {
    this.personaje = new Personaje(300, 400); 
 }

  crearVehiculos() {
    for (let i = 0; i < this.cantidadVehiculos; i++) {
      let velocidad = random(1, 2.5); // Velocidad aleatoria para cada vehículo
      let posY = 10 + i * 130;     // Distribuir los vehículos a lo largo de la pantalla verticalmente
      let direccion = 'izquierda'; // Alternar dirección entre 'derecha' e 'izquierda'
      // Crear vehículos con posiciones iniciales y dirección aleatoria
      let vehiculo = new Vehiculo((direccion === 'derecha' ? -100 : width + 100), posY, velocidad);
      this.vehiculos.push(vehiculo);  // Agregar vehículo al arreglo
    }
    
  }
verificarColisiones() {
  for (let vehiculo of this.vehiculos) {
    if (vehiculo.colisiona(this.personaje)) {
      this.personaje.perderVida();
      console.log(`Vidas restantes: ${this.personaje.vida}`);
      if (this.personaje.estaMuerto()) {
        this.juegoTerminado = true;
        console.log("¡Juego terminado!");
      }
    }
  }
}



  dibujar(estadoJuego) {
    image(imagenCarretera, 0, 0, width, height);
    
   if (!this.juegoTerminado) {
     
      this.personaje.dibujar(); // Dibujar el personaje

      for (let vehiculo of this.vehiculos) {
        vehiculo.dibujar();
        vehiculo.mover(); // Mover el vehículo
        
         this.verificarColisiones(); // Verificar colisiones después de mover los vehículos
      }

      this.verificarColisiones(); // Verificar si hay colisiones
    } else {
      
      estadoJuego.estado = "perder";
      this.juegoTerminado = false;
    }
    
  }

  teclaPresionada(keyCode, estadoJuego) {
    if (!this.juegoTerminado && this.personaje) {
      this.personaje.teclaPresionada(keyCode); // Mover el personaje
      if (this.personaje.posY <30){
        estadoJuego.cambiarEstado ("ganar");
     
      }
    }
  }

 
}
