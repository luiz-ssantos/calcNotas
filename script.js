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

  var total =
    nota200 * 200 +
    nota100 * 100 +
    nota50 * 50 +
    nota20 * 20 +
    nota10 * 10 +
    nota5 * 5 +
    nota2 * 2;

  // Atualiza o valor total na tela
  document.querySelector(".result").innerHTML = `
      Valor total: <br />
      ${formatarMoeda(total)}
  `;

  // Atualiza a soma de cada nota
  document.getElementById("item200").innerText = `R$: 200 = ${nota200}`;
  document.getElementById("item100").innerText = `R$: 100 = ${nota100}`;
  document.getElementById("item50").innerText = `R$: 50 = ${nota50}`;
  document.getElementById("item20").innerText = `R$: 20 = ${nota20}`;
  document.getElementById("item10").innerText = `R$: 10 = ${nota10}`;
  document.getElementById("item5").innerText = `R$: 5 = ${nota5}`;
  document.getElementById("item2").innerText = `R$: 2 = ${nota2}`;

  // Atualiza a soma das notas
  document.getElementById("soma200").innerText = `Soma: ${formatarMoeda(
    nota200 * 200
  )}`;
  document.getElementById("soma100").innerText = `Soma: ${formatarMoeda(
    nota100 * 100
  )}`;
  document.getElementById("soma50").innerText = `Soma: ${formatarMoeda(
    nota50 * 50
  )}`;
  document.getElementById("soma20").innerText = `Soma: ${formatarMoeda(
    nota20 * 20
  )}`;
  document.getElementById("soma10").innerText = `Soma: ${formatarMoeda(
    nota10 * 10
  )}`;
  document.getElementById("soma5").innerText = `Soma: ${formatarMoeda(
    nota5 * 5
  )}`;
  document.getElementById("soma2").innerText = `Soma: ${formatarMoeda(
    nota2 * 2
  )}`;
}

function resetarCampos() {
  document.getElementById("nota200").value = "";
  document.getElementById("nota100").value = "";
  document.getElementById("nota50").value = "";
  document.getElementById("nota20").value = "";
  document.getElementById("nota10").value = "";
  document.getElementById("nota5").value = "";
  document.getElementById("nota2").value = "";

  calcularTotal(); // Recalcula o total
}

function tirarPrint() {
  window.print();
}
window.onload = function () {
  const contadorNotasHeight =
    document.getElementById("contadorNotas").offsetHeight;
  const h1 = document.querySelector("h1");
  h1.style.marginTop = contadorNotasHeight + "px";
};
