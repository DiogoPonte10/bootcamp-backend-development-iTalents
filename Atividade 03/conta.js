class Conta {  
  constructor(titular, depositoInicial){
    this.titular = titular;
    this.saldo = depositoInicial;
  }

  //Metodos de deposito e saque

  depositar(valor) {
    this.saldo += valor;
    console.log("Deposito efetuado!")
    console.log(`Saldo atual: R$ ${this.saldo}`)
  }

  sacar(valor) {
    if (this.saldo < valor) {
      console.log("Saldo insuficiente!")
    } else if (this.valor < 0){
      console.log("Impossível sacar valor negativo!")
    } else {
      this.saldo -= valor;
      console.log(`Saque efetuado. Saldo atual: R$ ${this.saldo}`)
    }
  }

  get obterSaldo(){
    return this.saldo;
  }

  get obterTitular(){
    return console.log("O titular da conta é o(a) Sr.(a): " + this.titular);
  }

  //Validação dos dados

  validar(){
    if (!this.titular) {
      console.log("Ops, você não informou o seu nome!")
    } 
    if (typeof(this.titular) != "string") {
      console.log("Ops, você não informou o seu nome!")
    }
    if (!this.depositoInicial) {
      console.log("Ops, você não informou o deposito inicial!")
    }
    if (typeof(this.depositoInicial) != "number" && typeof(this.depositoInicial) != "bigint") {
      console.log("Ops, você não informou o deposito inicial!")
    }
    if (this.depositoInicial < 0) {
      console.error("O deposito inicial não pode ser negativo!")
    }
  }
}

module.exports = Conta;