let btnAgregar = document.querySelector("#btnAgregar");


let aires = [];
load();

btnAgregar.addEventListener("click", () => {
    console.log("Función Agregar");
    let identificador = parseInt(document.querySelector('#identificador').value);
    let nombre = document.querySelector('#nombre').value;
    let precio = parseInt(document.querySelector('#precio').value);
    let renglon = {
        "identificador": identificador,
        "nombre": nombre,
        "precio": precio
    };
    aires.push(renglon);
    document.querySelector('#identificador').value="";
    document.querySelector('#nombre').value="";
    document.querySelector('#precio').value="";
    mostrarAires();
});

function mostrarAires() {
    let html = "";
    for (let r of aires) {
        html += `
            <tr>
            <td>${r.identificador}</td>
            <td>${r.nombre}</td>
            <td>${r.precio}</td>
            </tr>
        `; 
    }
    document.querySelector("#tblAires").innerHTML = html;
}

async function load() {
    let respuesta = await fetch('/aire');
    if (respuesta.ok) {
        aires = await respuesta.json();
        mostrarAires()
    }
}