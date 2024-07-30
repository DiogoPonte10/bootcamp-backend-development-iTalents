const Personagem = require("./personagem");

class BulletBill extends Personagem{
  
  //Construtor

  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa);
  }
  
  //Metodos de ação

  atacar(){
    const probAtaquePerdido = Math.floor(Math.random()*10) + 1

    if (probAtaquePerdido > 7) {
      return 0;
    } else {
      return Math.floor(Math.random() * this.forca);      
    }
  }
}

module.exports = BulletBill;