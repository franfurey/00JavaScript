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

console.log("El mayor gasto producido fue de:", Math.max(gastoTotal));
console.log("El menor gasto producido fue de:", Math.min(gastoTotal));

// let gastosTotales2 = [
//   {
//     id: 1,
//     gastoTotal2: 2000,
//     responsableGasto2: "Francisco",
//     descripcion: "Materiales de produccion",
//   },
//   {
//     id: 2,
//     gastoTotal2: 1500,
//     responsableGasto2: "Francisco",
//     descripcion: "Materiales de produccion",
//   },
//   {
//     id: 3,
//     gastoTotal2: 3000,
//     responsableGasto2: "Cecilia",
//     descripcion: "Herramientas",
//   },
//   {
//     id: 4,
//     gastoTotal2: 5000,
//     responsableGasto2: "Ulises",
//     descripcion: "Herramientas",
//   },
//   {
//     id: 5,
//     gastoTotal2: 10000,
//     responsableGasto2: "Cecilia",
//     descripcion: "Insumos de limpieza",
//   },
// ];

// console.log(
//   "El mayor gasto producido fue de:",
//   Math.max(gastosTotales.gastoTotal2)
// );
