const Personagem = require("./personagem");

class Bowser extends Personagem{

  //Construtor

  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa)
  }

  // Metodo de ação

  ataqueEspecial(){
    return this.forca * 2;
  }

  atacar(){

    const probAtaqueEspecial = Math.floor(Math.random()*10) + 1

    if (probAtaqueEspecial > 7) {
      this.ataqueEspecial(); 
    } else {
      return Math.floor(Math.random() * this.forca);      
    }
  }
}

module.exports = Bowser;