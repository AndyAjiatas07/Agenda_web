import { ToDoList } from "../ToDoList/db.js";

let NuevaTarea = () => {
  // Crear sección para la nueva tarea
  let sectionNuevaTarea = document.createElement("section");
  sectionNuevaTarea.className = "nueva-tarea";

  // Título
  let h2 = document.createElement("h2");
  h2.textContent = "Añadir Tarea";

  // Crear formulario
  let form = document.createElement("form");

  // Input para la tarea
  let inputTarea = document.createElement("input");
  inputTarea.type = "text";
  inputTarea.placeholder = "Tarea";
  inputTarea.name = "tarea";
  inputTarea.required = true;

  // Input para la prioridad
  let inputPrioridad = document.createElement("input");
  inputPrioridad.type = "text";
  inputPrioridad.placeholder = "Prioridad";
  inputPrioridad.name = "prioridad";
  inputPrioridad.required = true;

  // Botón de agregar
  let btnAgregar = document.createElement("button");
  btnAgregar.type = "submit";
  btnAgregar.textContent = "Agregar";

  // Agregar inputs y botón al formulario
  form.appendChild(inputTarea);
  form.appendChild(inputPrioridad);
  form.appendChild(btnAgregar);

  // Agregar título y formulario a la sección
  sectionNuevaTarea.appendChild(h2);
  sectionNuevaTarea.appendChild(form);

  // Manejar la acción de agregar tarea
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Crear el objeto tarea con los valores del formulario
    let tarea = {
      titulo: inputTarea.value,
      prioridad: inputPrioridad.value,
    };

    // Mostrar información en consola y agregar la tarea a la lista
    console.log(tarea);
    ToDoList.push(tarea);
    form.reset();
  });

  // Devolver la sección con el formulario
  return sectionNuevaTarea;
};

export { NuevaTarea };
