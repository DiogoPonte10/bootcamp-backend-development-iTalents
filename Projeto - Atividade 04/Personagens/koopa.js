const Personagem = require("./personagem");

class Koopa extends Personagem{

  //Construtor

  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa)
  }

  //Metodo de ação

  defender(golpe){

    const probDefesaFortificada = Math.floor(Math.random()*10) + 1
        
    if (probDefesaFortificada > 7) {
      golpe *= 2;
        if (this.defesa < golpe) {
          return this.vida -= golpe;
      } else {
        return Math.floor(Math.random() * this.forca);      
      }     
    }
  }  
}

module.exports = Bowser;