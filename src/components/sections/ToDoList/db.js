import { getTasksFromStorage, saveTasksToStorage } from "./storage.js";

let ToDoList = getTasksFromStorage();

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
