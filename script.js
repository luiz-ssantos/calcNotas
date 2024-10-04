function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calcularTotal() {
  var nota200 = parseInt(document.getElementById("nota200").value) || 0;
  var nota100 = parseInt(document.getElementById("nota100").value) || 0;
  var nota50 = parseInt(document.getElementById("nota50").value) || 0;
  var nota20 = parseInt(document.getElementById("nota20").value) || 0;
  var nota10 = parseInt(document.getElementById("nota10").value) || 0;
  var nota5 = parseInt(document.getElementById("nota5").value) || 0;
  var nota2 = parseInt(document.getElementById("nota2").value) || 0;

  var soma200 = nota200 * 200,
    soma100 = nota100 * 100,
    soma50 = nota50 * 50,
    soma20 = nota20 * 20,
    soma10 = nota10 * 10,
    soma5 = nota5 * 5,
    soma2 = nota2 * 2;

  document.getElementById("soma200").innerHTML =
    "Soma: " + formatarMoeda(soma200);
  document.getElementById("soma100").innerHTML =
    "Soma: " + formatarMoeda(soma100);
  document.getElementById("soma50").innerHTML =
    "Soma: " + formatarMoeda(soma50);
  document.getElementById("soma20").innerHTML =
    "Soma: " + formatarMoeda(soma20);
  document.getElementById("soma10").innerHTML =
    "Soma: " + formatarMoeda(soma10);
  document.getElementById("soma5").innerHTML = "Soma: " + formatarMoeda(soma5);
  document.getElementById("soma2").innerHTML = "Soma: " + formatarMoeda(soma2);

  var total = soma200 + soma100 + soma50 + soma20 + soma10 + soma5 + soma2;
  document.getElementById("resultado").innerHTML =
    "Valor total: <br>" + formatarMoeda(total);
}

function resetarCampos() {
  document.querySelectorAll("input[type='number']").forEach(function (input) {
    input.value = "";
  });
  calcularTotal();
}

function tirarPrint() {
  window.print();
}
