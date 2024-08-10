// Elementos //
const btnEncriptar = document.querySelector(".buttonpro.btn__encriptar");
const txtEncriptar = document.querySelector(".caja__encriptador");
const aviso = document.querySelector(".msj__aviso__texto__izq");
const respuesta = document.querySelector(".enc__des__resultado");
const contenido = document.querySelector(".caja__resultado");
const btnCopiar = document.querySelector(".btn");
const btnDesencriptar = document.querySelector(".buttonpro.btn__desencriptar");

// Encriptar //
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:";,\u0300-\u036f']/g, "");
    console.log(txt);

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (/\d/.test(texto)) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe contener números";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
  
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.opacity = "1";
        btnCopiar.style.pointerEvents = "auto";
        contenido.style.display = "none"; // Oculta el contenido en lugar de eliminarlo
    }
});

// Desencriptar //
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:";,\u0300-\u036f']/g, "");
    console.log(txt);

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (/\d/.test(texto)) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe contener números";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.opacity = "1";
        btnCopiar.style.pointerEvents = "auto";
        contenido.style.display = "none"; // Oculta el contenido en lugar de eliminarlo
    }
});

// Botón Copiar //
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta.textContent; // Obtén el texto del div

    // Crea un textarea temporal
    let textarea = document.createElement("textarea");
    textarea.value = copiar;
    document.body.appendChild(textarea);

    // Selecciona el contenido del textarea y copia
    textarea.select();
    document.execCommand("copy");

    // Remueve el textarea temporal
    document.body.removeChild(textarea);
});
