class botones {
  constructor(e){
   this.estado= e; 
  }
  meClickearon(posX,posY){
     let x = width / 2 - 75;
    let y = height / 1.5 + 30;
    let w = 150;
    let h = 40;
   
    if (posX > x && posX < (x + w) && posY > y && posY < (y + h)){
      this.estado.detectarClick();
  }
  }
    dibujarBotonReinicio() {
  fill(255, 255, 0);
  rect(width / 2 - 75, height / 1.5 + 30, 150, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Reiniciar Juego", width / 2, height / 1.5 + 50);
}
}
