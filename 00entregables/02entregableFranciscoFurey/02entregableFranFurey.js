// Mi idea para el proyecto final es crear una interfaz
// donde un usuario pueda cargar un gasto con las siguientes caracteristicas:
// Descripcion - Categoria - Responsable - Fecha - Total
// Y luego crear reportes de gastos segun fechas, responsables o categorias


// Como un primer prototipo creamos una variable donde se almacenaran los gastos,
//  una funcion donde se cargan los gastos y se envian a la variable
// Y un ciclo for para cargar 5 gastos en conjunto. 

let gastoTotal = []

function gastos(gasto) {
    gasto= parseInt(prompt('Ingrese Gasto'))
    gastoTotal.push(gasto);
}

for (let I = 0; I <= 4; I++) {
    gastos();
    console.log('gastoTotal',gastoTotal)
    
}

// console.log('gastoTotal',gastoTotal)



// function gasto() {
//     // let descripcion = prompt('Descripcion del gasto')
//     let categoria = prompt('Categoria del gasto')
//     let responsable = prompt('Responsable del gasto')
//     // let fecha = prompt('Fecha del gasto')
//     let total = parseInt(prompt('Total gastado'))
//     total.push()
// }

