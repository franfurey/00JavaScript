// let formulario = document.querySelector("#login");

// function login(event) {
//   event.preventDefault();
//   let valueUsername = formulario.username.value;
//   let valuePassword = formulario.password.value;

//   const objetoUsuario = {
//     username: valueUsername,
//     password: valuePassword,
//   };

//   const token = generateToken(objetoUsuario.username, objetoUsuario.password);
//   localStorage.setItem("token", token);
//   const isAuth = existToken();
//   if (isAuth) {
//     const divPrivateContent = document.querySelector("#privateContent");
//     divPrivateContent.className = "showContent";
//     formulario.className = "hideContent";
//     showUsername();
//   }
// }

// function generateToken(username, password) {
//   const usuario = {
//     username,
//     password,
//   };
//   return JSON.stringify(usuario);
// }

// function existToken() {
//   if (localStorage.getItem("token") !== null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function showUsername() {
//   const strong = document.querySelector("#usernameLogin");
//   const token = JSON.parse(localStorage.getItem("token"));
//   strong.innerHTML = token.username;
// }

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

function saveExpense() {
  console.log(expenseForm.idExpense);
  if (expenseForm.idExpense && expenseForm.idExpense != 0) {
    for (let index = 0; index < expense.length; index++) {
      if (expense[index].id == expenseForm.idExpense) {
        expense[index].description = expenseForm.expenseDescription.value;
        expense[index].person = expenseForm.expensePerson.value;
        expense[index].amount = expenseForm.expenseAmount.value;
        break;
      }
    }
    expenseForm["idExpense"] = 0;
    updateFoodTable();
  } else {
    //crear
    const newExpense = new Expense(
      counter,
      expenseForm.expenseName.value,
      expenseForm.expenseLink.value,
      expenseForm.expensePrice.value
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
  expenseForm.expenseDescription.value = gasto.description;
  expenseForm.expensePerson.value = gasto.person;
  expenseForm.expenseAmount.value = gasto.amount;
  expenseForm["idExpense"] = gasto.id;
  console.dir(expenseForm);
}
