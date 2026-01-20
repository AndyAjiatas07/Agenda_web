  import { viewContacts } from "../../layout/nav/NavControllers.js";   

  let InfoContacto = function (alias, numUno, numDos, nombre, ubicacion, tipo) {
    let section = document.createElement("section");
    section.className = "info-contacto";

    // Crear la imagen
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./src/assets/icons/account.svg`;

    // Crear el título
    let h2 = document.createElement("h2");
    h2.textContent = "Información del contacto";

    // Crear los párrafos con la información del contacto
    let pAlias = document.createElement("p");
    pAlias.textContent = `Alias: ${alias}`;

    let pNumUno = document.createElement("p");
    pNumUno.textContent = `Teléfono 1: ${numUno}`;

    let pNumDos = document.createElement("p");
    pNumDos.textContent = `Teléfono 2: ${numDos}`;

      let pNombre = document.createElement("p");
    pNombre.textContent = `Nombre: ${nombre}`;

    let pUbicacion = document.createElement("p");
    pUbicacion.textContent = `Ubicación: ${ubicacion}`;

    let pTipo = document.createElement("p");
    pTipo.textContent = `Tipo: ${tipo}`;

    // Crear el botón de regresar
    let buttonBack = document.createElement("button");
    buttonBack.id = "back-contactos";
    buttonBack.textContent = "Regresar";

    buttonBack.addEventListener("click", () => {
      viewContacts();
      console.log("Volver a la lista de contactos");
    });

    // Crear el contenedor para la información textual
    let infoTextContainer = document.createElement("div");
    infoTextContainer.className = "info-text";

    infoTextContainer.appendChild(h2);
    section.appendChild(etiquetaImg);
    infoTextContainer.appendChild(pAlias);
    infoTextContainer.appendChild(pNumUno);
    infoTextContainer.appendChild(pNumDos);
    infoTextContainer.appendChild(pNombre);
    infoTextContainer.appendChild(pUbicacion);
    infoTextContainer.appendChild(pTipo);
    infoTextContainer.appendChild(buttonBack);

    section.appendChild(infoTextContainer);

    return section;
  };

  export { InfoContacto };