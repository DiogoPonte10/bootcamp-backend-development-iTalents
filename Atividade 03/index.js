const prompt = require("prompt-sync")();
const Conta = require("./conta");
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupança");

console.log("Abra a sua conta:")
const titular = prompt("Escreva o seu nome: ");
const depositoInicial = +prompt("Informe o deposito inicial para a sua conta: ");
const tipoConta = prompt("Indique se irá querer uma conta poupanca ou corrente: ");

while (tipoConta != "corrente" && tipoConta != "poupanca") {
  if (tipoConta == "corrente") {
    var conta = new ContaCorrente(titular, depositoInicial);
    conta.validar();  
  } else if (tipoConta == "poupanca") {
    var conta = new ContaPoupanca(titular, depositoInicial);  
    conta.validar();
  } else {
    console.log("Tipo de conta informado está incorreto!");
  }  
  tipoConta = prompt("Indique se irá querer uma conta Poupança ou Corrente: ");
}

console.log("Escolha uma ação:")
var escolha = +prompt("1 - Olhar seu saldo / 2 - Sacar um valor / 3 - Depositar um valor / 0 - Fechar menu ");

switch (escolha) {
  case 1:
    console.log(conta.saldo);
    break;
  case 2:
    var valor = +prompt("Qual valor quer sacar? ")
    conta.sacar(valor);
    break;
  case 3:
    var valor = +prompt("Qual valor quer depositar? ")
    conta.depositar(valor);
    break;
  case 0:
    console.log("Saindo do sua Conta!");
    break;
  default:
    console.log("Nenhuma opção escolhida!");
    break;
 } 