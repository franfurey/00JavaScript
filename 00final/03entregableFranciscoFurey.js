let formulario = document.querySelector("#login");

function login(event) {
  event.preventDefault();
  console.log(event);
  console.dir(formulario);
  let valueUsername = formulario[0].value;
  let valuePassword = formulario[1].value;
  console.log(valueUsername);
  console.log(valuePassword);
  const token = generateToken(valueUsername, valuePassword);
  localStorage.setItem("token", token);
  const isAuth = existToken();
  if (isAuth) {
    const divPrivateContent = document.querySelector("#privateContent");
    divPrivateContent.className = "showPrivateContent";
    formulario.ClassName = "hideContent";
  }
}

function generateToken(username, password) {
  const usuario = {
    username,
    password,
  };
  return JSON.stringify(usuario);
}

function existToken() {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
}

// RESTO

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

console.log("El mayor gasto producido fue de:", Math.max(...gastoTotal));
console.log("El menor gasto producido fue de:", Math.min(...gastoTotal));

let contador = 0;
let h2Contador = document.querySelector("#contador");
h2Contador.innerHTML = contador;
let inputReset = document.querySelector("#reset");
inputReset.addEventListener("change", resetToNumber);

function actualizarContador() {
  let h2Contador = document.querySelector("#contador");
  h2Contador.innerHTML = contador;
}
function incrementar() {
  contador++;
  actualizarContador();
}
function decrementar() {
  contador--;
  actualizarContador();
}

function reset() {
  contador = 0;
  actualizarContador();
}

function resetToNumber() {
  const valueToReset = inputReset.value;
  contador = parseInt(valueToReset);
  actualizarContador();
}

function addText(texto) {
  let textoDiv = document.querySelector("#texto");
  let h2Created = document.createElement("h2");
  textoDiv.append(h2Created);
  h2Created.innerHTML = texto;
}

function removeText() {
  let h2Created = document.querySelector("#texto h2");
  h2Created.remove();
}
