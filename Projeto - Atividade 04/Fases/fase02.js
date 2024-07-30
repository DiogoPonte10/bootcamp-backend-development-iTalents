const BulletBill = require("../Personagens/bulletBill");
const prompt = require("prompt-sync")();

function lutar(){
  const bulletBill = new BulletBill("Bullet Bill", 15, 15, 2);

  while(personagem.vida > 1 && bulletBill.vida > 1) {  
    bulletBill.defender(personagem.atacar())
    personagem.defender(bulletBill.atacar())
    console.log(`A vida do ${personagem.nome} é ${personagem.vida}!`);
    console.log(`A vida do Bullet Bill é ${bulletBill.vida}!`);
    console.log(" ");
  }

  if (personagem.vida < 1) {
    console.log("Bullet Bill Venceu!");
    return false;
  } else {
    console.log("Você venceu!")
    return true;
  }
}

module.exports = (personagem) => {

  let luta = false;

  console.log(" ");
  console.log("Parabéns! Parece que você está ficando bom nisso. Continue assim e você terá um futuro prmissor!");
  console.log("Continue nesse caminho e você conseguirá salvar a princesa Peach!");
  console.log(" ");

  lutar(personagem);
  luta = lutar(personagem);

  if (luta) {
    personagem.restaura();
    console.log(" ");
    console.log("WOOOOOW!! VOCÊ REALMENTE GANHOU DO BULLET BILL?");
    console.log("Que incrivel. Eu sabia que você conseguiria. Você tem se esforçado bastante e vai conseguir salvar a princesa Peach!");
    console.log(`Novamente parabéns ${personagem.nome}!`)
    console.log("Você está ficando ainda mais forte!")
    return true;
  } else {
    console.log(`Você foi derrotado, ${personagem.nome}!`)
    return false;
  }
}