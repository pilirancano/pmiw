class EstadoJuego {
  constructor() {
    this.estado = "instrucciones"; // Estado inicial
  }

mostrarEtapa (objJuego){
  if (this.estado === "instrucciones") {
    this.mostrarInstrucciones();
  } else if (this.estado === "jugando") {
    objJuego.dibujar(this);
  } else if (this.estado === "ganar") {
    this.mostrarGanar();
  } else if (this.estado === "perder") {
    this.mostrarPerder();
  }
}

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado; // Cambiar al nuevo estado
  }
  
  percibirTecla (keyCode, juego){
    if (this.estado === "jugando"){
    juego.teclaPresionada(keyCode, this);
    }
    else if (this.estado === "instrucciones"){
      if (keyCode=== 32){
        juego.iniciar ();
      this.estado = "jugando";
    }
    
    }
    else if (this.estado=== "ganar"){
      console.log ("1");
      if (keyCode === 82 || keyCode ===114){
        console.log ("2");
      juego.iniciar ();
      this.estado = "jugando";}
    }
  }

  mostrarInstrucciones() {
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Presiona ESPACIO para empezar", width / 2, height / 2);
  }

  mostrarGanar() {
    fill(0, 255, 0);  // Color verde para el mensaje de ganar
    textAlign(CENTER);
    textSize(20);
    text("¡Ganaste! Presiona R para reiniciar.", width / 2, height / 2);
  }

  mostrarPerder() {
    // Mostrar mensaje de fin de juego
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255, 0, 0);
      text("Juego Terminado", width / 2, height / 2);
      this.dibujarBotonReinicio();
  }
   dibujarBotonReinicio() {
  fill(255, 255, 0);
  rect(width / 2 - 75, height / 2 + 30, 150, 40);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Reiniciar Juego", width / 2, height / 2 + 50);
}

  mostrar() {
    if (this.estado === "instrucciones") {
      this.mostrarInstrucciones();
    } else if (this.estado === "jugando") {
      // Aquí iría la lógica para el juego cuando se está jugando
    } else if (this.estado === "ganar") {
      this.mostrarGanar();
    } else if (this.estado === "perder") {
      this.mostrarPerder();
    }
  }
}
