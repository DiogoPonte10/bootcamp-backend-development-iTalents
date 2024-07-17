window.onload = function(){
  document.getElementById("buttonCalc").addEventListener("click", function(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    document.getElementById("result1").value = parseInt(num1) + parseInt(num2);
  })
}