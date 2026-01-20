const TASKS_STORAGE_KEY = "lista_tareas";

function saveTasksToStorage(tareas) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tareas));
}

function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || [];
}

export { TASKS_STORAGE_KEY, saveTasksToStorage, getTasksFromStorage };
