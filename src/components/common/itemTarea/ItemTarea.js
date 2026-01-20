import { deleteTaskById } from "../../sections/ToDoList/db.js";
import { goToNuevaTareaEdit } from "../../sections/NuevaTarea/NuevaTarea.js";

let ItemTarea = (tarea) => {
  let button = document.createElement("button");
  button.className = "button item-tarea";

  let icon = document.createElement("img");
  icon.src = "./src/assets/icons/task.svg";
  icon.className = "icon-task";


  let titulo = document.createElement("div");
  titulo.className = "titulo-tarea";
  titulo.textContent = tarea.titulo;

  let prioridad = document.createElement("div");
  prioridad.textContent = tarea.prioridad;

  let btnDelete = document.createElement("img");
  btnDelete.src = "./src/assets/icons/delete.svg";
  btnDelete.className = "btn-delete";

  let btnEdit = document.createElement("img");
  btnEdit.src = "./src/assets/icons/edit.svg";
  btnEdit.className = "btn-edit";

  btnDelete.addEventListener("click", () => {
    deleteTaskById(tarea.id);
    button.remove();
  });

  btnEdit.addEventListener("click", () => {
    goToNuevaTareaEdit(tarea);
  });

  button.appendChild(icon);
  button.appendChild(titulo);
  button.appendChild(prioridad);
  button.appendChild(btnDelete);
  button.appendChild(btnEdit);
  return button;
};

export { ItemTarea };
