let animal1 = {
  nombre: "Champi",
  tipo: "perro",
};

const animales = [animal1, "gato", "oso"];

console.log("Cantidad de animales: ", animales.length);

// Acceder al arreglo

console.log(animales[0].tipo);

// Ultima Posicion
let ultimaPosicion = animales.length - 1;
console.log(animales[ultimaPosicion]);

const numeros = [];

for (let i = 1; i < 101; i++) {
  numeros.push(i);
}

console.log("Cantidad de nros: ", numeros.length);

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  suma += numero;
}
console.log(suma);

// POP - Elimina el ultimo elemento

numeros.pop();
console.log(numeros);

// FOR OF
