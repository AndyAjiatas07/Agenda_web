import { ContactList } from "../Contactos/db.js";

let NuevoContacto = () => {
  let sectionNuevoContacto = document.createElement("section");
  sectionNuevoContacto.className = "nuevo-contacto";

  // Título
  let h2 = document.createElement("h2");
  h2.textContent = "Añadir Contacto";

  // Formulario
  let form = document.createElement("form");

  // Input Alias
  let inputAlias = document.createElement("input");
  inputAlias.type = "text";
  inputAlias.placeholder = "Alias";
  inputAlias.name = "alias";
  inputAlias.required = true;

  // Input Teléfono 1
  let inputNumUno = document.createElement("input");
  inputNumUno.type = "tel";
  inputNumUno.placeholder = "Teléfono 1";
  inputNumUno.name = "numUno";
  inputNumUno.required = true;

  // Input Teléfono 2
  let inputNumDos = document.createElement("input");
  inputNumDos.type = "tel";
  inputNumDos.placeholder = "Teléfono 2";
  inputNumDos.name = "numDos";
  inputNumDos.required = false;

  // Input Nombre
  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.placeholder = "Nombre";
  inputNombre.name = "nombre";
  inputNombre.required = true;

  // Input Ubicación
  let inputUbicacion = document.createElement("input");
  inputUbicacion.type = "text";
  inputUbicacion.placeholder = "Ubicación";
  inputUbicacion.name = "ubicacion";
  inputUbicacion.required = true;

  // Input Tipo
  let inputTipo = document.createElement("input");
  inputTipo.type = "text";
  inputTipo.placeholder = "Tipo";
  inputTipo.name = "tipo";
  inputTipo.required = true;

  // Botón Agregar
  let btnAgregar = document.createElement("button");
  btnAgregar.type = "submit";
  btnAgregar.textContent = "Agregar";

  // Estructura
  form.appendChild(inputAlias);
  form.appendChild(inputNumUno);
  form.appendChild(inputNumDos);
  form.appendChild(inputNombre);
  form.appendChild(inputUbicacion);
  form.appendChild(inputTipo);
  form.appendChild(btnAgregar);

  sectionNuevoContacto.appendChild(h2);
  sectionNuevoContacto.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let contacto = {
      alias: inputAlias.value,
      numUno: inputNumUno.value,
      numDos: inputNumDos.value,
      nombre: inputNombre.value,
      ubicacion: inputUbicacion.value,
      tipo: inputTipo.value,
    };
    console.log(contacto);
    ContactList.push(contacto);
    form.reset();
  });

  return sectionNuevoContacto;
};

export { NuevoContacto };
