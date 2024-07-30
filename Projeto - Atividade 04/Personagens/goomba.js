const Personagem = require("./personagem");

class Goomba extends Personagem{
  
  //Construtor

  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa);
  }
  
}

module.exports = Goomba;