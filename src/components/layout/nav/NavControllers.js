import { Contactos } from "../../sections/Contactos/Contactos.js";
import { NuevoContacto } from "../../sections/NuevoContacto/NuevoContacto.js";
import { Tareas } from "../../sections/ToDoList/ToDoList.js";
import { NuevaTarea } from "../../sections/NuevaTarea/NuevaTarea.js";
import { Login } from "../../sections/Login/Login.js";
import { InfoContacto } from "../../sections/InfoContacto/InfoContacto.js";


let container = document.getElementById("container");
let nav = document.getElementById("nav");


let viewContacts = function () {
  nav.classList.remove("hidden");
  container.innerHTML = "";
  container.appendChild(Contactos());
};

let viewNewContact = function () {
  container.innerHTML = "";
  container.appendChild(NuevoContacto());
};

let viewNewTask = function () {
  container.innerHTML = "";
  container.appendChild(NuevaTarea());
};

let viewTasks = function () {
  container.innerHTML = "";
  container.appendChild(Tareas());
};

const viewLogin = function () {
  nav.classList.add("hidden");
  container.innerHTML = "";
  container.appendChild(Login());
};

const viewInfoContact = function (alias, numUno, numDos, nombre, ubicacion, tipo) {
  container.innerHTML = "";
  container.appendChild(InfoContacto(alias, numUno, numDos, nombre, ubicacion, tipo));
}



export { viewContacts, viewNewContact, viewNewTask, viewTasks, viewLogin, viewInfoContact };
