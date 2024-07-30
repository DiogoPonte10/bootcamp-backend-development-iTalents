const Personagem = require("./personagem");

class Mario extends Personagem {  
  
  //Construtor
  constructor(nome, vida, forca, defesa){
    super(nome, vida, forca, defesa)
  }

  //Getters

  get nome(){
    return this.nome;
  }
  get vida(){
    return this.vida;
  }
  get forca(){
    return this.forca;
  }
  get defesa(){
    return this.defesa;
  }

  //Metodos de ação

  treinar(){
    this.forca += 2;
    this.defesa ++;
  }

  //Metodo caso ganhe uma batalha
  
  restaurar(){
    this.vida = 20;
  }
}

module.exports = Mario;