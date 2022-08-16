// Para este primer entregable hacemos un ciclo for donde dado un numero que ingrese el usuario nos devuelve en consola,
//  empezando por el cero. La suma de este numero hasta llegar a 1000

let num = parseInt(prompt('Ingrese un numero'));

for (let i = 0; i <= 1000; i = i + num) {
    console.log(i)
}


let today = new Date();  // me entrega la fecha de hoy. 
let day = today.getDay();

switch (day) {
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('Es martes')
        break;
    case 3:
        console.log('Es miercoles')
        break;
    case 4:
        console.log('Es jueves')
        break;
    case 5:
        console.log('Es viernes')
        break;
    case 6:
        console.log('Es sabado')
        break;
    case 7:
        console.log('Es domingo')
        break;

    default:
        break;
}