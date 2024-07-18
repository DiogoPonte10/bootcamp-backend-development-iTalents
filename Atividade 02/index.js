const prompt = require("prompt-sync")();

let materia = [];
let notas = [];

function capturaNotas() {
  for (let i = 1; i <= numNotas; i++) {
      notas.push(+prompt(`Digita a ${i}ª nota: `));    
  }
  
  var sum = 0;
  
  notas.forEach((nota) => {
    sum += nota;  
  });
  
  let media = sum/numNotas;
  
  return media
}

const numNotas = +prompt("Quantas notas serão avaliadas? ");

var aluno = prompt("Qual o nome do aluno? ");

const numMaterias = +prompt(`Quantas materias o ${aluno} fez? `);

for (let i = 1; i <= numMaterias; i++) {
  materia.push(prompt(`Qual a ${i}ª materia? `));  
}

materia.forEach((item) => {
  console.log(" ")
  console.log(item)
  notaRegular = capturaNotas();
  
  console.log(" ")
  console.log(`O ${aluno} tirou a média ${notaRegular} em ${item}`);
  
  console.log(" ")
  if (notaRegular < 7) {
    console.log(`O ${aluno} foi para a recuperação em ${item}!`);
  
    console.log(" ")
    let notaRecuperacao = +prompt("Qual a nota do aluno na recuperação? ");
    var notaFinal = (notaRegular + notaRecuperacao) / 2;
  
    if (notaFinal >= 7) {
      console.log(" ")
      console.log(`O ${aluno} tirou a média ${notaFinal} em ${item}`);
      console.log(`O ${aluno} foi aprovado na recuperação em ${item}!`);
    } else {
      console.log(" ")
      console.log(`O ${aluno} tirou a média ${notaFinal} em ${item}`);
      console.log(`O ${aluno} foi reprovado em ${item}!`)
    }
  
  } else {
    console.log(" ")
    console.log(`O ${aluno} está aprovado em ${item}!`);
  }  

  notas = [];
});