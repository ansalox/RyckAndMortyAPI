// URL de la API a consumir
const API = "https://rickandmortyapi.com/api/character";

// consumir API
const getData = (api) => {
    return fetch(api)
    .then((response) => response.json())
    .then((json) => {
        llenarDatos(json), paginacion(json.info);
    })
    .catch((error) => {
        console.log("Error: ", error)
    });
}

// Llenar cards con personajes
const llenarDatos = (data) => {
let html = "";
data.results.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width:10rem">';
    html += `<img src="${pj.image}">`;
    html += '</div>';
    html += '</div>';
});
}

// Paginacion
const paginacion = (info) => {
    
}

// Ejecutar API
getData(API);