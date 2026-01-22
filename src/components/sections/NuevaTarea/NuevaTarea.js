import { addTask, updateTask } from "../ToDoList/db.js";
import {
  viewTasks,
  viewNewTask,
} from "../../../components/layout/nav/NavControllers.js";

let taskToEdit = null;

function goToNuevaTareaEdit(tarea) {
  taskToEdit = tarea;
  viewNewTask();
}

let NuevaTarea = () => {
  let sectionNuevaTarea = document.createElement("section");
  sectionNuevaTarea.className = "nueva-tarea";

  let h2 = document.createElement("h2");
  h2.textContent = taskToEdit ? "Editar Tarea" : "Añadir Tarea";

  let form = document.createElement("form");

  let inputTarea = document.createElement("input");
  inputTarea.placeholder = "Tarea";
  inputTarea.required = true;

  let inputPrioridad = document.createElement("select");
  inputPrioridad.className = "select-prioridad";
  inputPrioridad.required = true;

  let prioridades = ["alta", "media", "baja"];

  prioridades.forEach((p) => {
    let option = document.createElement("option");
    option.value = p;
    option.textContent = p.charAt(0).toUpperCase() + p.slice(1);
    inputPrioridad.appendChild(option);
  });

  let btnAgregar = document.createElement("button");
  btnAgregar.type = "submit";
  btnAgregar.textContent = taskToEdit ? "Actualizar" : "Agregar";

  let btnCancelar = document.createElement("button");
  btnCancelar.type = "button";
  btnCancelar.textContent = "Cancelar";
  btnCancelar.className = "btn-cancelar";

  // Agregar inputs, botones al formulario
  form.appendChild(inputTarea);
  form.appendChild(inputPrioridad);
  form.appendChild(btnAgregar);
  form.appendChild(btnCancelar);

  // Agregar título y formulario a la sección
  sectionNuevaTarea.appendChild(h2);
  sectionNuevaTarea.appendChild(form);

  if (taskToEdit) {
    inputTarea.value = taskToEdit.titulo;
    inputPrioridad.value = taskToEdit.prioridad;
  }

  // Manejo de botón Cancelar
  btnCancelar.addEventListener("click", (e) => {
    e.preventDefault();
    taskToEdit = null;
    viewTasks();
  });

  // Manejo de formulario de envío
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isEdit = Boolean(taskToEdit);

    let tarea = {
      id: taskToEdit?.id || crypto.randomUUID(),
      titulo: inputTarea.value,
      prioridad: inputPrioridad.value,
    };

    if (isEdit) {
      updateTask(tarea);
      console.log(tarea);
      taskToEdit = null;
      viewTasks();
    } else {
      console.log(tarea);
      addTask(tarea);
      form.reset();
    }
  });

  return sectionNuevaTarea;
};

export { NuevaTarea, goToNuevaTareaEdit };
