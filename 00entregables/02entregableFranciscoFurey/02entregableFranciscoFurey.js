// function solicitarNombre(indice, parametro2, parametro3) {
//     if (indice % 2 == 0) {
//         console.log('ejecuto funcion en la iteracion ', indice);
//         let nombreIngresado = prompt('Ingresar Nombre');
//         if (nombreIngresado.length < 3) {
//             alert('error');
//         } else {
//             alert('El nombre ingresado es ' + nombreIngresado);
//         }
//     }
// }

// for (let indice = 0; indice <= 1; indice++) {
//     solicitarNombre(indice, 'otro','tercero');
// }

// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
//     return `El resultado es ${resultado}`;
// }


// let primerNumero = parseInt(prompt('Ingresar 1er numero'));
// let segundoNumero = parseInt(prompt('Ingresar 2do numero'));

// console.log(sumar(primerNumero, segundoNumero));





// function getSum(numero) {
//     let suma = 0;
//     for (let i = 10; i < numero * 10; i *= 10) {
//         let digito = numero % i;
//         let resultado = parseInt(digito/ (i / 10));
//         suma = suma + resultado;
//     }
//     return suma;
// }



// for (let i = 0; i <= 100 ; i++) {
//     console.log(i,'->',getSum(i));
// }


function stringInv2(string){
    let invertida = '';
    for (let i = string.length-1; i>=0;i--){
        invertida += string[i]
    }
    console.log(invertida);
}
stringInv2("Good Bye");

¡