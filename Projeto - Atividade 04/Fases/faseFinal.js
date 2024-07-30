const prompt = require("prompt-sync")();
const Bowser = require("../Personagens/bowser");

function lutar(){
  const bowser = new Bowser("Bowser", 40, 10, 6);

  while(personagem.vida > 1 && bowser.vida > 1) {  
    bowser.defender(personagem.atacar())
    personagem.defender(bowser.atacar())
    console.log(`A vida do ${personagem.nome} é ${personagem.vida}!`);
    console.log(`A vida do Bowser é ${bowser.vida}!`);
    console.log(" ");
  }

  if (personagem.vida < 1) {
    console.log("Bowser Venceu!");
    return false;
  } else {
    console.log("Você venceu!")
    return true;
  }
}

module.exports = (personagem) => {

  let luta = false;

  console.log("Parece que você conseguiu chegar até aqui!! - Bowser");
  console.log("Quero ver se você tem coragem mesmo, venha me enfrentar! - Bowser");


  lutar(personagem);
  luta = lutar(personagem);

  if (luta) {
    personagem.restaura();
    console.log(" ");    
    console.log(`Parabéns ${personagem.nome}! Você ganhou a última batalha!`);
    return true;
  } else {
    console.log(`Você foi derrotado, ${personagem.nome}!`)
    return false;
  }
}