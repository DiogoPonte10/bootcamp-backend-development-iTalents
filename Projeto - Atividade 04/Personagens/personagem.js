class Personagem {

  //Construtor

  constructor(){
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.defesa = defesa
  }


  //Metodos de ação do personagem

  atacar(){
    return Math.floor(Math.random() * this.forca);
  }

  defender(golpe){
    if (this.defesa < golpe) {
      this.vida -= golpe;      
    }
  }

  treinar(){
    this.forca += 2;
    this.defesa ++;
  }

  //Metodo Fase Final

  faseFinalEsquerda(){
    this.treinar();
    this.vida -= 5;
  }

  faseFinalDireitaa(){
    this.vida += 10;
  }
}

module.exports = Personagem;