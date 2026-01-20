import { Button } from "./src/components/common/button/Button.js";
import { viewContacts, viewNewContact, viewNewTask, viewTasks ,viewLogin} from "./src/components/layout/nav/NavControllers.js";
let nav = document.getElementById("nav");
nav.appendChild(Button(
    "Usuario",
    "usuario",
    "account.svg",
    viewLogin
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
viewLogin();