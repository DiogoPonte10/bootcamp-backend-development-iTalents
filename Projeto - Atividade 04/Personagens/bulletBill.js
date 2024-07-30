const Personagem = require("./personagem");

class BulletBill extends Personagem{
  
  //Construtor

  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa);
  }
  
}

module.exports = BulletBill;