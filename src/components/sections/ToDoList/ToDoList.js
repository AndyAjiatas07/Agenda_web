import { ItemTarea } from "../..//common/itemTarea/ItemTarea.js";
import { ToDoList } from "./db.js";
let Tareas = () => {
  let sectionTareas = document.createElement("section");
  sectionTareas.className = "tareas";
  let h2 = document.createElement("h2");
  h2.textContent = "Lista de tareas";
  sectionTareas.appendChild(h2);
  ToDoList.forEach((tarea) => {
    sectionTareas.appendChild(
      ItemTarea("task.svg", tarea.titulo, tarea.prioridad, "delete.svg"),
    );
  });
  return sectionTareas;
};
export { Tareas };
