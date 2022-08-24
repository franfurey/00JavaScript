let gastoTotal = [];
let responsableGasto = [];
let totalGastado = 0;

function gastos(gasto) {
  gasto = parseInt(prompt("Ingrese Gasto"));
  responsable = prompt("Ingrese responsable del Gasto");
  gastoTotal.push(gasto);
  responsableGasto.push(responsable);
}

for (let i = 0; i <= 1; i++) {
  gastos();
  console.log(gastoTotal);
  totalGastado += gastoTotal;
}
console.log("Se han hecho", gastoTotal.length, "gastos");
console.log(totalGastado);
