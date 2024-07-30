const prompt = require("prompt-sync")();
const Personagem = require("./Personagens/personagem");
const Mario = require("./Personagens/mario");
const Luigi = require("./luigi");
const Bowser = require("./bowser");
const Goomba = require("./Personagens/goomba");
const PrincesaPeach = require("./Personagens/princesa_Peach");
const Luigi = require("./luigi");
const fase02 = require("./Fases/fase02");
const fase03 = require("./Fases/fase03");
const faseFinal = require("./Fases/faseFinal");

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

  personagem.treinar();

  console.log(" ");
  console.log("Após mais um tempo andando, encontramos duas trilhas diferentes. Aparentemente teremos que escolher entre os dois caminhos.");
  console.log("O primeiro caminho é composto por uma estrada de pedra, bem iluminado, porém, estamos sentindo um cheiro estranho e muito forte!");
  console.log("O segundo caminho é formado por uma estrada de areia, com muitas flores, algumas borboletas e com um otimo cheiro!");
  console.log(" ");

  const escolhaCaminho = +prompt("O que você me diz? Qual caminho você escolhe - (1/2)")

  while(escolhaCaminho != 1 && escolhaCaminho != 2){
    if (escolhaCaminho == 1) {

      const resultadoFase3 = fase03(personagem)

      if (resultadoFase3) {

        personagem.treinar();

        console.log("Você realmente ficou muito forte!")
        console.log("Agora que entramos nos castelo vamos procurar o Bowser e resgatar a princesa Peach!");
  
        //Última escolha

        console.log(" ");
        console.log("Agora que entramos, teremos que subir até o topo do castelo!");
        console.log(" ");
        console.log("Noosa, achei que já enfrentariamos o Bowser, mas aparentemente teremos que fazer mais uma escolha!");
        console.log(" ");
        console.log("A nossa frente podemos seguir por duas escadas.");
        console.log("A 1ª da esquerda leva para a torre Oeste, enquanto a 2ª da direito leva para a torre Leste.");
        
        const escolhaFinal = +prompt("O que você me diz? Qual caminho você escolhe - (1/2)")

        while(escolhaFinal != 1 && escolhaFinal != 2){
          if (escolhaFinal == 1) {
            console.log("Parece que você escolheu o caminha da esquerda, espero que tenha sido uma boa escolha!");
            console.log("Estou sentindo que você está ficando mais forte, mas pera... você também está perdendo vida!");
            personagem.faseFinalEsquerda();
            console.log("Parece que você escolheu o caminha da esquerda, espero que tenha sido uma boa escolha!");
            
          } else if (escolhaFinal == 2) {
            console.log("Parece que você escolheu o caminha da direita, espero que tenha sido uma boa escolha!");
            console.log("Estou sentindo algo diferente em você, pera... você também está ganhando mais vida!");
            personagem.faseFinalDireita();
            console.log("Que ótimo, espero que isso lhe ajude!");

          } else {
            console.log("Aparentemente você não está escolhendo nenhum dos dois caminhos!");
          }
        }

        console.log("Agora vamos enfrentar o Bowser");

        const resultadoFinal = faseFinal(personagem)

        if (resultadoFinal) {
            
          console.log("MEUS PARABÉNSSSSSS!!!!! Você conseguiu... alguém finalmente derrotou o Bowser!!");
          console.log("Fico super feliz por você que se mostrou um grande guerreiro e conseguiu resgatar a princesa Peach.");
          console.log("Agradeço pelo comprometimento que você teve e lhe desejo sorte no futuro!");
          console.log("Saiba que se quiser, pode recomeçar o jogo e enfrentar novamente essa batalha!");

          console.log(" ");
          console.log("Fim de jogo!");

        } else {
          console.log("Game Over!");
        }

      } else {
        console.log("Game Over!");
      }
      
    } else if (escolhaCaminho == 2) {
      const resultadoFase2 = fase02(personagem)

      if (resultadoFase2) {
        
        personagem.treinar();

        console.log("Meus Parabéns! Você conseguiu vencer o Bullet Bill, um dos adversários mais fortes desse mundo!");

        const resultadoFase3 = fase03(personagem)

        if (resultadoFase3) {

          personagem.treinar();

          console.log("Você realmente ficou muito forte!")
          console.log("Agora que entramos nos castelo vamos procurar o Bowser e resgatar a princesa Peach!");

          const resultadoFinal = faseFinal(personagem)

          if (resultadoFinal) {
            
            console.log("MEUS PARABÉNSSSSSS!!!!! Você conseguiu... alguém finalmente derrotou o Bowser!!");
            console.log("Fico super feliz por você que se mostrou um grande guerreiro e conseguiu resgatar a princesa Peach.");
            console.log("Agradeço pelo comprometimento que você teve e lhe desejo sorte no futuro!");
            console.log("Saiba que se quiser, pode recomeçar o jogo e enfrentar novamente essa batalha!");

            console.log(" ");
            console.log("Fim de jogo!");

          } else {
            console.log("Game Over!");
          }
            
        } else {
          console.log("Game Over!");
        }

      } else {
        console.log("Game Over!");
      }
    } else {
      console.log("Aparentemente você não está escolhendo nenhum dos dois caminhos!");
    }
  }
} else {
  console.log("Game Over!");
}
