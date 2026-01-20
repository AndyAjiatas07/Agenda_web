import { deleteTaskById } from "../../sections/ToDoList/db.js";
import { goToNuevaTareaEdit } from "../../sections/NuevaTarea/NuevaTarea.js";

let ItemTarea = (tarea) => {
  let div = document.createElement("div");
  div.className = "item-tarea";

  let icon = document.createElement("img");
  icon.src = "./src/assets/icons/task.svg";

  let titulo = document.createElement("p");
  titulo.textContent = tarea.titulo;
  titulo.className = "titulo-tarea";

  let prioridad = document.createElement("p");
  prioridad.textContent = tarea.prioridad;

  let btnDelete = document.createElement("img");
  btnDelete.src = "./src/assets/icons/delete.svg";
  btnDelete.className = "btn-delete";

  btnDelete.addEventListener("click", () => {
    deleteTaskById(tarea.id);
    div.remove();
  });

  titulo.addEventListener("click", () => {
    goToNuevaTareaEdit(tarea);
  });

  div.appendChild(icon);
  div.appendChild(titulo);
  div.appendChild(prioridad);
  div.appendChild(btnDelete);
  return div;
};

export { ItemTarea };
