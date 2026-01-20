import { viewInfoContact } from "../../layout/nav/NavControllers.js";

let ItemContacto = (imgContacto, alias, numUno, numDos, nombre, ubicacion, tipo) => {
  let div = document.createElement("div");
  div.className = "item-contacto";

  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = `./src/assets/icons/${imgContacto}`;

  let etiquetaAlias = document.createElement("p");
  etiquetaAlias.textContent = alias;

  let etiquetaPrimerNum = document.createElement("p");
  etiquetaPrimerNum.textContent = numUno;

  let etiquetaSegundoNum = document.createElement("p");
  etiquetaSegundoNum.textContent = numDos;

  let etiquetaNombre = document.createElement("p");
  etiquetaNombre.textContent = nombre;
  
  let etiquetaUbicacion = document.createElement("p");
  etiquetaUbicacion.textContent = ubicacion;

  let etiquetaTipo = document.createElement("p");
  etiquetaTipo.textContent = tipo;

  div.appendChild(etiquetaImg);
  div.appendChild(etiquetaAlias);
  div.appendChild(etiquetaPrimerNum); 
  div.appendChild(etiquetaSegundoNum);
  div.appendChild(etiquetaNombre);
  div.appendChild(etiquetaUbicacion);
  div.appendChild(etiquetaTipo);

  div.addEventListener("click", () => {
    viewInfoContact(alias, numUno, numDos, nombre, ubicacion, tipo);
  });

  return div;
};
export { ItemContacto };
