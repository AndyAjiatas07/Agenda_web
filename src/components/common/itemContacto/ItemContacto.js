import { viewInfoContact } from "../../layout/nav/NavControllers.js";

let ItemContacto = (contact) => {
  let button = document.createElement("button");
  button.className = "button item-contacto";

  let imageContainer = document.createElement("div");
  imageContainer.className = "button-image";

  let img = document.createElement("img");
  img.src = "./src/assets/icons/account.svg";


  let etiquetaNombre = document.createElement("div");
  etiquetaNombre.className = "button-text";
  etiquetaNombre.textContent = contact.nombre;

  let etiquetaPrimerNum = document.createElement("div");
  etiquetaPrimerNum.className = "button-text";
  etiquetaPrimerNum.textContent = contact.numUno;

  imageContainer.appendChild(img);
  button.appendChild(imageContainer);
  button.appendChild(etiquetaNombre);
  button.appendChild(etiquetaPrimerNum);

  button.addEventListener("click", () => {
    viewInfoContact(
      contact.alias,
      contact.numUno,
      contact.numDos,
      contact.nombre,
      contact.ubicacion,
      contact.tipo
    );
  });

  return button;
};

export { ItemContacto };
