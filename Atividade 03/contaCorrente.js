const Conta = require("./conta");

class ContaCorrente extends Conta {

  constructor(titular, depositoInicial){
    super(titular, depositoInicial)
  }

  // Metodo para calculo da taxa de manutenção da Conta Corrente

  ManutencaoCC(tempoMeses) {
    const taxaManutencao = 0.01;
    const jurosManutencao = this.saldo * (( 1 + taxaManutencao) ** tempoMeses);

    this.saldo -= jurosManutencao;
    console.log(`A taxa de manutenção da sua Conta Corrente ficou em R$ ${jurosManutencao}! Agora seu saldo é: R$ ${this.saldo}`);
  }
}

module.exports = ContaCorrente;