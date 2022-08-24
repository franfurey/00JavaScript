let gastoTotal = [];
let responsableGasto = [];

function gastos(gasto) {
  gasto = parseInt(prompt("Ingrese Gasto"));
  responsable = prompt("Ingrese responsable del Gasto");
  gastoTotal.push(gasto);
  responsableGasto.push(responsable);
}

for (let i = 0; i <= 1; i++) {
  gastos();
  console.log(gastoTotal);
}
console.log("Se han hecho", gastoTotal.length, "gastos");

let totalGastado = 0;
for (let i = 0; i < gastoTotal.length; i++) {
  const gasto2 = gastoTotal[i];
  totalGastado += gasto2;
}
console.log("El monto total gastado es de", totalGastado, "pesos argentinos");
