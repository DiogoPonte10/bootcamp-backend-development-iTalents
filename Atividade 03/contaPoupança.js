const Conta = require("./conta");

class ContaPoupanca extends Conta {

  constructor(titular, depositoInicial){
    super(titular, depositoInicial);
  }

  // Metodo para calculo do lucro da Conta Poupança

  LucroCP(tempoMeses){
    const taxaLucro = 0.008;
    const lucro = this.saldo * ((1 + taxaLucro) ** tempoMeses);

    this.saldo += lucro;
    console.log(`Você obteve ${lucro} de lucro na sua Conta Poupança! Agora seu saldo é: R$ ${this.saldo}`);
  }
}

module.exports = ContaPoupanca;