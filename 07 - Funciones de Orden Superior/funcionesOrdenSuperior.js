let suma = (argumento1, argumento2) => argumento1 + argumento2;

const animales = ["gato", "perro", "loro", "pez"];

animales.forEach((animal) => {
  animal = animal.concat("23");
  console.log(animal);
});

console.log(animales);

let filtro = animales.filter((animal) => animal.length == 4);
console.log(filtro);

animales.sort();

let orden = animales.sort((animal1, animal2) => {
  if (animal1.length > animal2.length) return 1;
  else if (animal1.length == animal2.length) return 0;
  else return -1;
});
console.log(orden);

// MAP

const usuarios = [
  {
    id: 1,
    nombre: "Pedro",
    edad: 45,
  },
  {
    id: 2,
    nombre: "Maxi",
    edad: 50,
  },
  {
    id: 3,
    nombre: "Fran",
    edad: 30,
  },
  {
    id: 4,
    nombre: "Carla",
    edad: 25,
  },
];

let edades = usuarios.map((usuario) => {
  return {
    edad: usuario.edad,
    isActive: true,
  };
});

console.log(edades);

// let gastosTotales = [
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
