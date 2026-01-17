let ItemTarea = (imgTarea, titulo, prioridad, imgDelete) => {
  let div = document.createElement("div");
  div.className = "item-tarea";

  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = `./assets/icons/${imgTarea}`;

  let etiquetaTitulo = document.createElement("p");
  etiquetaTitulo.textContent = titulo;
  etiquetaTitulo.className = "titulo-tarea";

  let etiquetaPrioridad = document.createElement("p");
  etiquetaPrioridad.textContent = prioridad;

  let btnDelete = document.createElement("img");
  btnDelete.src = `./assets/icons/${imgDelete}`;
  btnDelete.className = "btn-delete";

  btnDelete.addEventListener("click", () => {
    div.remove();
    console.log("eliminación completada");
  });

  div.appendChild(etiquetaImg);
  div.appendChild(etiquetaTitulo);
  div.appendChild(etiquetaPrioridad);
  div.appendChild(btnDelete);

  return div;
};

export { ItemTarea };
