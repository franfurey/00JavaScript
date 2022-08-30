class Usuario {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

let option = 0;
let usuarios = [];

do {
  option = parseInt(
    prompt("Ingrese 1 para agregar, 5 para ver todos, 6 para salir")
  );
  switch (option) {
    case 1:
      agregarUsuario(usuarios);
      break;
    case 5:
      verTodosLosUsuarios(usuarios);
      break;
    default:
      verTodosLosUsuarios(usuarios);
      break;
  }
} while (option != 6);

// AGREGAR
function agregarUsuario(usuarios) {
  let nombre = prompt("Ingrese nombre");
  let apellido = prompt("Ingrese apellido");
  let edad = parseInt(prompt("Ingrese edad"));
  let newUser = new Usuario(nombre, apellido, edad);
  usuarios.push(newUser);
  console.log("Se agrego el usuario", newUser);
}

function verTodosLosUsuarios(usuarios) {
  for (const usuario of usuarios) {
    console.log(usuario);
  }
}
