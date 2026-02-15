const inputBusqueda = document.getElementById("busqueda");
const tabla = document.getElementById("tablaProductos");
const estado = document.getElementById("estado");
const limpiarBtn = document.getElementById("limpiar");

const URL = "http://localhost:4000/api/productos";

async function cargarProductos() {
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    renderizar(datos);
}

async function buscarProductos(termino) {
    estado.textContent = "Buscando...";

    const respuesta = await fetch(`${URL}/search?q=${termino}`);
    const datos = await respuesta.json();

    estado.textContent = "";

    if (datos.length === 0) {
        estado.textContent = `No encontramos productos que coincidan con "${termino}"`;
        tabla.innerHTML = "";
        return;
    }

    renderizar(datos);
}

function renderizar(productos) {
    tabla.innerHTML = "";

    productos.forEach(p => {
        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.descripcion}</td>
                <td>${p.categoria}</td>
                <td>${p.precio}</td>
                <td>${p.stock}</td>
            </tr>
        `;
    });
}

inputBusqueda.addEventListener("input", (e) => {
    const valor = e.target.value.trim();

    if (valor === "") {
        cargarProductos();
    } else {
        buscarProductos(valor);
    }
});

limpiarBtn.addEventListener("click", () => {
    inputBusqueda.value = "";
    estado.textContent = "";
    cargarProductos();
});

cargarProductos();