import { Contactos } from "../../sections/Contactos/Contactos.js";
import { NuevoContacto } from "../../sections/NuevoContacto/NuevoContacto.js";
import { Tareas } from "../../sections/ToDoList/ToDoList.js";
import { NuevaTarea } from "../../sections/NuevaTarea/NuevaTarea.js";
import { Login } from "../../sections/Login/Login.js";

let container = document.getElementById("container");

let viewContacts = function () {
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

const viewLogin = () => {
  container.innerHTML = "";
  container.appendChild(Login());
};

export { viewContacts, viewNewContact, viewNewTask, viewTasks, viewLogin };
