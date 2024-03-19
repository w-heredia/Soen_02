'use strict'
const GI = {
    createElement (tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}


var to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

function desordenarArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

to_do = desordenarArray(to_do)

const lista = document.getElementById("lista-tareas");

to_do.forEach(tarea => {
    const elementoLista = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {

        if (this.checked) {
            textoTarea.style.textDecoration = "line-through";
            textoTarea.style.color = "gray";
        } else {
            textoTarea.style.textDecoration = "none";
            textoTarea.style.color = "initial";

        }
    })
    const textoTarea = document.createTextNode(tarea);
    elementoLista.appendChild(checkbox);
    elementoLista.appendChild(textoTarea);
    lista.appendChild(elementoLista);
});



