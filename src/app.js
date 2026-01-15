import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/Contactos/Contactos.js";
import { viewContacts, viewNewContact, viewNewTask, viewTasks } from "./components/layout/nav/NavControllers.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Usuario",
    "usuario",
    "account.svg"
));
nav.appendChild(Button(
    "Agenda",
    "agenda",
    "book.svg",
    viewContacts
));
nav.appendChild(Button(
    "Crear contacto",
    "plus",
    "add.svg",
    viewNewContact
))
    ;
nav.appendChild(Button(
    "ToDoList",
    "todoList",
    "list.svg",
    viewTasks
));
nav.appendChild(Button(
    "Crear tarea",
    "plus",
    "add.svg",
    viewNewTask
));

let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());