import { getTasksFromStorage, saveTasksToStorage } from "./storage.js";

let ToDoList = getTasksFromStorage();

if (ToDoList.length === 0) {
  ToDoList = [
    { id: 1, titulo: "Limpiar", prioridad: "Alta" },
    { id: 2, titulo: "Comprar", prioridad: "Media" },
    { id: 3, titulo: "Estudiar", prioridad: "Baja" },
  ];

  saveTasksToStorage(ToDoList);
}

function addTask(tarea) {
  ToDoList.push(tarea);
  saveTasksToStorage(ToDoList);
}

function deleteTaskById(id) {
  ToDoList = ToDoList.filter(t => t.id !== id);
  saveTasksToStorage(ToDoList);
}

function updateTask(updatedTask) {
  ToDoList = ToDoList.map(t =>
    t.id === updatedTask.id ? updatedTask : t
  );
  saveTasksToStorage(ToDoList);
}

export { ToDoList, addTask, deleteTaskById, updateTask };
