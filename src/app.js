import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/Contactos/Contactos.js";
let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "account.svg"));
nav.appendChild(Button("Crear contacto", "plus", "add.svg"));
nav.appendChild(Button("ToDoList", "todoList", "list.svg"));
nav.appendChild(Button("Crear tarea", "plus", "add.svg"));

let container = document.getElementById("container");
container.appendChild(Contactos());