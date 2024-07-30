const Personagem = require("./personagem");

class Bowser extends Personagem{

  //Construtor

  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa)
  }
  "Bowser"
  vida = 20;
  forca = 8;
  defesa = 6;

  // Metodo de ação

  ataqueEspecial(){
    return this.forca * 2;
  }  
}

module.exports = Bowser;