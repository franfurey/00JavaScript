// Para este primer entregable hacemos un ciclo for donde dado un numero que ingrese el usuario nos devuelve en consola,
//  empezando por el cero. La suma de este numero hasta llegar a 1000

let num = parseInt(prompt('Ingrese un numero'));

for (let i = 0; i <= 1000; i = i + num) {
    console.log(i)
}