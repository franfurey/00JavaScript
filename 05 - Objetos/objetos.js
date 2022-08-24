// for (let i = 1; i <= 5; i++) {
//   let persona1 = new persona("Homero", 10 * i, "Neper 53");
//   persona1.edad += 5;
//   console.log(persona1);
// }

class Persona {
  constructor(nombre, edad, calle, auto) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.auto = auto;
  }
}

class Auto {
  constructor(modelo, marca, color) {
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
  }
}

let auto = new Auto("2006", "Audi", "gris");
let persona1 = new Persona("Fran", 26, "Juan Neper 5374", auto);

console.log(persona1);
