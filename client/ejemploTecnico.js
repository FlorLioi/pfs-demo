let tecnicos = [];
load();

function mostrarTecnicos() {
    let html = "";
    for (let r of tecnicos) {
        html += `
            <tr>
            <td>${r.nombre}</td>
            <td>${r.celular}</td>
            </tr>
        `; 
    }
    document.querySelector("#tblTecnicos").innerHTML = html;
}

async function load() {
    let respuesta = await fetch('/tecnico');
    if (respuesta.ok) {
        tecnicos = await respuesta.json();
        mostrarTecnicos()
    }
}