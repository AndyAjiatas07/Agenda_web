import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { ToDoList } from "./db.js";

let Tareas = () => {
  let sectionTareas = document.createElement("section");
  sectionTareas.className = "tareas";

  let h2 = document.createElement("h2");
  h2.textContent = "Lista de tareas";
  sectionTareas.appendChild(h2);

  if (!ToDoList || ToDoList.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "tareas-vacias";
    emptyMsg.textContent = "No hay tareas aún. Agrega una nueva tarea.";
    sectionTareas.appendChild(emptyMsg);
    return sectionTareas;
  }

  const prioridadOrden = {
    alta: 1,
    media: 2,
    baja: 3,
  };

  [...ToDoList]
    .sort((a, b) => prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad])
    .forEach((tarea) => {
      sectionTareas.appendChild(ItemTarea(tarea));
    });

  return sectionTareas;
};

export { Tareas };
