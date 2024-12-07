class EstadoJuego {
  constructor(juego) {
    this.variable =2; 
    this.estado = "instrucciones"; // Estado inicial
    this.juego = juego;
    this.Boton= new botones(this)// mandar la misma clase a botones,
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
  } else if (this.estado==="Creditos"){
    this.mostrarCreditos();
  }
}

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado; // Cambiar al nuevo estado
  }
  
  percibirTecla (keyCode, juego){
   if (this.estado === "perder" || this.estado=== "ganar"){
  if (keyCode === 67) {   
    this.estado="Creditos";
    console.log("creditos");
  }
   }
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
      if (keyCode === 82 || keyCode ===114){
      juego.iniciar ();
      this.estado = "jugando";}
    }
  }

  mostrarInstrucciones() {
    image(imgInstrucciones, 0, 0, width, height);
    fill(255,255,0);
    textAlign(CENTER);
    textSize(18);
    text("Bienvenido!\n Cruza la carretera esquivando los autos antes de que la bruja te alcance!\n Usa las flechas para moverte\n No dejes que te atrape, presiona la barra de espacio para iniciar esta aventura\n Mucha suerte!!", width / 2, height / 2);
  }

  mostrarGanar() {
     image(imgGanar, 0, 0, width, height);
    fill(0, 255, 0);  // Color verde para el mensaje de ganar
    textAlign(CENTER);
    textSize(20);
    text("¡Ganaste! Presiona C para ver los créditos.", width / 2, height / 2);
     musicaFondo.stop();
  }

  mostrarPerder() {
    // Mostrar mensaje de fin de juego
     image(imgPerder, 0, 0, width, height);
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255, 0, 0);
      text("Perdiste! Presiona C para ver los créditos.", width / 2, height / 2);
      musicaFondo.stop();
      
  }
  mostrarCreditos(){
   image(imgCreditos, 0, 0, width, height);
    fill(255,0,0);
   textSize(20);
   textAlign(CENTER, CENTER);
  text("\nComision 4\nProfesor Leonardo Garay\nHecho por Delfina Pinto Guzman y Pilar Rancaño Luchetti", width / 2, height / 2); 
this.Boton.dibujarBotonReinicio();
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

pasarClick(posX,posY){
 this.Boton.meClickearon(posX,posY); 
}
detectarClick() {
  // 
  

  if (this.estado === "Creditos" ) 
     {
      this.estado = "instrucciones";   
    
  }
}
}
