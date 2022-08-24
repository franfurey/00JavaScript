let gastoTotal = [];

function gastos(gasto) {
  gasto = parseInt(prompt("Ingrese Gasto"));
  gastoTotal.push(gasto);
}

let totalGastado = 0;

for (let i = 0; i <= 2; i++) {
  console.log("Primera parte", gastos());
  gastos();
  console.log("Segunda parte", gastos();
  const numero = gastos[i];
  totalGastado += gastoTotal;
  console.log(gastoTotal);
}
console.log(totalGastado);
