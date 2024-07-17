window.onload = function() {
  document.getElementById("buttonCalc").addEventListener("click", function(){
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    
    IMC = parseFloat((peso)) / (parseFloat((altura/100)) ** 2);
    document.getElementById("IMC").value = IMC;

    if (parseFloat(IMC) < 18.5) {
      document.getElementById("comentario").innerHTML = "Você está abaixo do peso! <br/> Busque se alimentar mais!";
    } else if (parseFloat(IMC) > 18.5 && parseFloat(IMC) < 25.0) {
      document.getElementById("comentario").innerHTML = "Você está com o peso adequado! <br/> Meus parabéns, continue assim!";
    } else if (parseFloat(IMC) >= 25.0 && parseFloat(IMC) < 30.0) {
      document.getElementById("comentario").innerHTML = "Você está com sobrepeso! <br/> Busque se exercitar!";
    } else if (parseFloat(IMC) > 30.0 && parseFloat(IMC) < 35.0) {
      document.getElementById("comentario").innerHTML = "Você está com obesividade em grau 1! <br/> Busque ajuda médica e tente exercitar!";  
    } else if (parseFloat(IMC) >= 35.0 && parseFloat(IMC) < 40.0) {
      document.getElementById("comentario").innerHTML = "Você está com obesividade em grau 2! <br/> Busque urgentemente ajuda médica e especializada!";
    } else {
      document.getElementById("comentario").innerHTML = "Você está com OBESIDADE EXTREMA! <br/> Busque imadiatamente ajuda médica e especializada! <br/> Sua vida pode estar em risco!";
    }
  })
}