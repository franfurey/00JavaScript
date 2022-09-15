class gastos {
  constructor(id, gastoTotal, responsableGasto) {
    this.id = id;
    this.gastoTotal = gastoTotal;
    this.responsableGasto = responsableGasto;
  }
}

function funcGasto() {
  for (let i = 0; i <= 1; i++) {
    gasto = parseInt(prompt("Ingrese Gasto"));
    responsable = prompt("Ingrese responsable del Gasto");
    funcGasto();
    new gastos(i, gasto, responsable);
    console.log(gastos.gastoTotal);
    console.log(gastos);
  }
}

console.log(funcGasto());

console.log("Se han hecho", gastos.gastoTotal.length, "gastos");

let totalGastado = 0;
for (let i = 0; i < gastos.gastoTotal.length; i++) {
  const gasto2 = gastos.gastoTotal[i];
  totalGastado += gasto2;
}
console.log(
  "El monto total gastado es de",
  gastos.totalGastado,
  "pesos argentinos"
);

console.log("El mayor gasto producido fue de:", Math.max(...gastos.gastoTotal));
console.log("El menor gasto producido fue de:", Math.min(...gastos.gastoTotal));
