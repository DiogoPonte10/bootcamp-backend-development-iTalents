const Koopa = require("../Personagens/koopa");
const prompt = require("prompt-sync")();

function lutar(){
  const koopa = new Koopa("Koopa", 20, 2, 7);

  while(personagem.vida > 1 && koopa.vida > 1) {  
    koopa.defender(personagem.atacar())
    personagem.defender(koopa.atacar())
    console.log(`A vida do ${personagem.nome} é ${personagem.vida}!`);
    console.log(`A vida do Koopa é ${koopa.vida}!`);
    console.log(" ");
  }

  if (personagem.vida < 1) {
    console.log("Koopa Venceu!");
    return false;
  } else {
    console.log("Você venceu!")
    return true;
  }
}

module.exports = (personagem) => {

  let luta = false;

  console.log(" ");
  console.log("Parece que finalmente chegamos no castelo do Bowser. Mas perai... parece que o chefe dos seus guardar está chegando!");
  console.log(" ");
  console.log("Teremos mais uma batalha para enfrentar. Espero que consiga ganhar, ouvi falar que os Koopas tem uma defesa incrivel por causa dos seus cascos!");
  console.log("Cuidaddo e boa sorte.");
  console.log(" ");

  lutar(personagem);
  luta = lutar(personagem);

  if (luta) {
    personagem.restaura();
    console.log("Nossa, você realmente conseguiu!");
    console.log("Como conseguiu derrotar o Koopa?");
    console.log(" ");
    console.log("Espero que não tenha sido muito dificil pra você. Meus parabéns por conseguir derrota-lo!");
    console.log(`Novamente parabéns ${personagem.nome}! Você ganhou a última batalha antes de enfrentar o Bowser!`)
    return true;
  } else {
    console.log(`Você foi derrotado, ${personagem.nome}!`)
    return false;
  }
}