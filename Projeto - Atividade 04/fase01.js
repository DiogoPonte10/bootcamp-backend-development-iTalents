const prompt = require("prompt-sync")();
const Goomba = require("../Personagens/goomba");

function lutar(){
  const goomba = new Goomba("Goomba", 10, 6, 4);

  while(personagem.vida > 1 && goomba.vida > 1) {  
    goomba.defender(personagem.atacar())
    personagem.defender(goomba.atacar())
    console.log(`A vida do ${personagem.nome} é ${personagem.vida}!`);
    console.log(`A vida do Goomba é ${goomba.vida}!`);
    console.log(" ");
  }

  if (personagem.vida < 1) {
    console.log("Goomba Venceu!");
    return false;
  } else {
    console.log("Você venceu!")
    return true;
  }
}

module.exports = (personagem) => {

  let luta = false;

  console.log(" ");
  console.log("Opa! Estamos caminhando a um tempo e parece que estamos avistando um goomba! Parece que seremos obrigados a enfrentar o nosso primeiro desafio!");
  console.log(" ");

  lutar(personagem);
  luta = lutar(personagem);

  if (luta) {
    personagem.restaura();
    console.log(`Parabéns ${personagem.nome}! Você ganhou a batalha!`)
    console.log(`Agora podemos prosseguir com a nossa busca pela princesa!`)
    return true;
  } else {
    console.log(`Você foi derrotado, ${personagem.nome}!`)
    return false;
  }
}