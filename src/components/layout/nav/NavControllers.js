import { Contactos } from "../../sections/Contactos/Contactos.js";
import { NuevoContacto } from "../../sections/NuevoContacto/NuevoContacto.js";
import { Tareas } from "../../sections/ToDoList/ToDoList.js";
import { NuevaTarea } from "../../sections/NuevaTarea/NuevaTarea.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContact = function () {
    container.innerHTML = "";
    container.appendChild(NuevoContacto());
}

let viewNewTask = function () {
    container.innerHTML = "";
    container.appendChild(NuevaTarea());
}

let viewTasks = function () {
    container.innerHTML = "";
    container.appendChild(Tareas());
}

export { viewContacts, viewNewContact, viewNewTask, viewTasks };