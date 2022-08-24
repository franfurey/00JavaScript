function nombre(nombre, contra) {
  let objeto = {
    nombre: nombre,
    contra: contra,
  };
  return objeto;
}

let objeto = {};

console.log(nombre("Fran", "Cuca"));

let carrito = {
  efectivo: 5000,
  productos: "limpieza",
  saldo: 3000,
  tarjeta: true,
  resta: function (a, b) {
    return a - b;
  },
};

// console.log(carrito());

function Persona(nombre, edad, dni) {
  (this.nombre = nombre), (this.edad = edad), (this.dni = dni);
}

let newPersona = new Persona("Fran", 26, "3949");
console.log(newPersona);

class persona {
  constructor(nombre, edad, dni) {
    (this.nombre = nombre), (this.edad = edad), (this.dni = dni);
  }
}
