let formulario = document.querySelector("#login");

function login(event) {
  event.preventDefault();
  let valueUsername = formulario.username.value;
  let valuePassword = formulario.password.value;

  const objetoUsuario = {
    username: valueUsername,
    password: valuePassword,
  };

  const token = generateToken(objetoUsuario.username, objetoUsuario.password);
  localStorage.setItem("token", token);
  const isAuth = existToken();
  if (isAuth) {
    const divPrivateContent = document.querySelector("#privateContent");
    divPrivateContent.className = "showContent";
    formulario.className = "hideContent";
    showUsername();
  }
}

function generateToken(username, password) {
  const usuario = {
    username,
    password,
  };
  return JSON.stringify(usuario);
}

// NO ME ESTA FUNCIONANDO
// function existToken() {
//   localStorage.getItem("token") !== null ? true : false;
// }

function existToken() {
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
}

function showUsername() {
  const strong = document.querySelector("#usernameLogin");
  const token = JSON.parse(localStorage.getItem("token"));
  strong.innerHTML = token.username;
}

class Expense {
  constructor(id, description, person, amount) {
    this.id = id;
    this.description = description;
    this.person = person;
    this.amount = amount;
  }
}

let expense = [];
let counter = 1;
const tableExpense = document.querySelector("#expenseTable tbody");
const expenseForm = document.querySelector("#addExpense");
updateExpenseTable();

// Aqui abajo agregue un operador logico avanzado, para resumir.
// Pero a la hora de editar, no me funciona, y se crea uno nuevo.
let { idExpense, expenseDescription, expensePerson, expenseAmount } =
  expenseForm;

function saveExpense() {
  console.log(idExpense);
  if (idExpense && idExpense != 0) {
    for (let index = 0; index < expense.length; index++) {
      if (expense[index].id == idExpense) {
        expense[index].description = expenseDescription.value;
        expense[index].person = expensePerson.value;
        expense[index].amount = expenseAmount.value;
        break;
      }
    }
    expenseForm["idExpense"] = 0;
    updateExpenseTable();
  } else {
    //crear
    const newExpense = new Expense(
      counter,
      expenseDescription.value,
      expensePerson.value,
      expenseAmount.value
    );
    expense.push(newExpense);
    counter++;
    updateExpenseTable();
  }
}

function updateExpenseTable() {
  tableExpense.innerHTML = "";
  console.log(expense);
  expense.forEach((expense) => {
    const expenseHTML = document.createElement("tr");
    expenseHTML.innerHTML = `<th scope="row">${expense.id}</th>
          <td>${expense.description}</td>
          <td>${expense.person}</td>
          <td>${expense.amount}</td>
          <td><button
                  id="editBtn_${expense.id}"
                  type="button"
                  class="btn btn-primary"
                  onclick="editExpense(event)"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  >
                  Editar
                  </button>
              <button
                  id="deleteBtn_${expense.id}"
                  type="button"
                  class="btn btn-danger"
                  onclick="deleteExpense(event)">
                  Borrar
                  </button>
              </td>
          `;
    tableExpense.appendChild(expenseHTML);
  });
}

function deleteExpense(event) {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  expense = expense.filter((expense) => expense.id != id);
  updateExpenseTable();
}

function editExpense(event) {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  const gasto = expense.filter((expense) => expense.id == id)[0];
  expenseDescription.value = gasto.description;
  expensePerson.value = gasto.person;
  expenseAmount.value = gasto.amount;
  expenseForm["idExpense"] = gasto.id;
  console.dir(expenseForm);
}

// for (let i = 0; i <= 1; i++) {
//   gastos();
//   console.log(gastoTotal);
// }
// console.log("Se han hecho", gastoTotal.length, "gastos");

// let totalGastado = 0;
// for (let i = 0; i < gastoTotal.length; i++) {
//   const gasto2 = gastoTotal[i];
//   totalGastado += gasto2;
// }
// console.log("El monto total gastado es de", totalGastado, "pesos argentinos");

console.log("El mayor gasto producido fue de:", Math.max(...expenseAmount));
console.log("El menor gasto producido fue de:", Math.min(...expenseAmount));
