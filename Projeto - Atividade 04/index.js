const prompt = require("prompt-sync")();
const Personagem = require("./Personagens/personagem");
const Mario = require("./Personagens/mario");
const Luigi = require("./luigi");
const Bowser = require("./bowser");
const Goomba = require("./Personagens/goomba");
const PrincesaPeach = require("./Personagens/princesa_Peach");
const Luigi = require("./luigi");
const fase02 = require("./fase02");

var personagem = null;

console.log("MARIO E LUIGI NA BUSCA AO RESGATE DA PRINCESA PEACH - jogo modo texto");
console.log(" ")
console.log("Bem-vindo, novo jogador!")

  //Escolha do Personagem

var escolhaPersonagem = prompt("Escreva com qual personagem você quer jogar: Mário ou Luigi (M/L) ");
while(escolhaPersonagem != 'M' && escolhaPersonagem != 'L'){
  escolhaPersonagem = prompt("Escreva com qual personagem você quer jogar: Mário ou Luigi (M/L) - ");
  if (escolhaPersonagem == 'M') {
    personagem = new Mario("Mário", 20, 2, 0);
  }
  if (escolhaPersonagem == 'L') {
    personagem = new Luigi("Luigi", 20, 0, 2);
  } else {
    console.log("Você não escolheu nenhum dos personagens!");
  }
}

console.log(" ");
console.log(`Então quer dizer que você o ${personagem.nome}! Escolha interessante.`);
console.log("Agora que já escolheu com quem jogará, preciso lhe passar uma informação.");
console.log(" ");
console.log("Este é um jogo de turnos, então cada personagem terá a sua chance de atacar ou defender!");
console.log(" ");
console.log("Para lhe deixar ciente, todos os seus inimigos terão sequências predeterminadas de movimentos, então... Escolha com saberia os seus movimentos!");
console.log(" ");
console.log("Agora que já sabe as informações necessárias, podemos partir para o início do jogo!");
console.log("Estou torcendo por você e espero que se divirta!");
console.log(" ");

  //Início da Fase de Treinamento do personagem

console.log(" ");
console.log("Porém, antes de iniciar a sua aventura, estou vendo que você está entrando na fase de treinamento!");
console.log(`Este é um momento importante para o ${personagem.nome}!`);
console.log("Saiba que seus inimigos estaram a sua espera! Escolha sabiamente!");
console.log(" ");

var escolhaTreinamento = +prompt("Você escolhe: 1 - Treinar / 2 - Finalizar treinamento");
for (let i = 0; i < 6; i++) {
  switch (escolhaTreinamento) {
    case 1:
      personagem.treinar;
      escolhaTreinamento = +prompt("Você escolhe: 1 - Treinar / 2 - Finalizar treinamento");
      break;
    case 2:
      i = 6;
      break;
    default:
      console.log("Opção escolhida inválida!")
      break;
  }
}

  //Fim da Fase de Treinamento e Início Lore do jogo

console.log(" ");
console.log("Finalmente saiu do treinamento! Podemos seguir com a nossa aven....");
console.log(" ");
console.log("SOCORROOOOOO");
console.log(" ");
console.log("Nooooossa que grito foi esse? Alguém está precisando de ajuda! Precisamos ajudo-lo");
console.log(" ");
console.log("Parece que o Bowser está sequestrando a princesa Peach, precisamos ajuda-la!");
console.log(" ");
console.log("Ao chegarmos mais perto de onde a princesa estava, vemos que o Bowser já a levou para o castelo assombrado!");
console.log("Parece que nossa aventura irá verdadeiramente começar. Vamos resgatar a princesa!");

//Inicio das fases

const resultadoFase1 = fase01(personagem);

if (resultadoFase1) {

  console.log(" ");
  console.log("Você ganhou a sua primeira batalha, agora podemos seguir o nosso caminho!");
  console.log(" ");
  console.log("Após mais um tempo andando, encontramos duas trilhas diferentes. Aparentemente teremos que escolher entre os dois caminhos.");
  console.log("O primeiro caminho é composto por uma estrada de pedra, bem iluminado, porém, estamos sentindo um cheiro estranho e muito forte!");
  console.log("O segundo caminho é formado por uma estrada de areia, com muitas flores, algumas borboletas e com um otimo cheiro!");
  console.log(" ");

  const escolhaCaminho = +prompt("O que você me diz? Qual caminho você escolhe - (1/2)")

  if (escolhaCaminho == 1) {
    fase03(personagem)
  } else if (escolhaCaminho == 2) {
    fase02(personagem)
  }

  //fase02
} else {
  console.log("Game Over!");
}
