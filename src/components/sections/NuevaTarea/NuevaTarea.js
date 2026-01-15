import { ToDoList } from "../ToDoList/db.js";

let NuevaTarea = () => {
    let sectionNuevaTarea = document.createElement("section");
    sectionNuevaTarea.className = "nueva-tarea";

    // Título
    let h2 = document.createElement("h2");
    h2.textContent = "Añadir Tarea";

    // Formulario
    let form = document.createElement("form");

    // Input Tarea
    let inputTarea = document.createElement("input");
    inputTarea.type = "text";
    inputTarea.placeholder = "Tarea";
    inputTarea.name = "tarea";
    inputTarea.required = true;
    // Input Prioridad
    let inputPrioridad = document.createElement("input");
    inputPrioridad.type = "text";
    inputPrioridad.placeholder = "Prioridad";
    inputPrioridad.name = "prioridad";
    inputPrioridad.required = true;
    // Botón Agregar
    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    // Estructura
    form.appendChild(inputTarea);
    form.appendChild(inputPrioridad);
    form.appendChild(btnAgregar);

    sectionNuevaTarea.appendChild(h2);
    sectionNuevaTarea.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let tarea = {
            titulo: inputTarea.value,
            prioridad: inputPrioridad.value
        };
        console.log (ToDoList);
        console.log(tarea);
        ToDoList.push(tarea);
        console.log (ToDoList);
    });

    return sectionNuevaTarea;
};

export { NuevaTarea };