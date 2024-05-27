const productos = [
    {
        id: 1,
        categoria: "colores",
        nombre: "Negro Jet Metalizado",
        precio: 5018,
        disponibilidad: 10,
        img: "./imagenes/colores1.png"
    },
    {
        id: 2,
        categoria: "colores",
        nombre: "Gris GT",
        precio: 4060,
        disponibilidad: 0,
        img: "./imagenes/colores2.png",
    },
    {
        id: 3,
        categoria: "colores",
        nombre: "Azul Genciana Metalizado",
        precio: 5522,
        disponibilidad: 3,
        img: "./imagenes/colores3.png",
    },
    {
        id: 4,
        categoria: "llantas",
        nombre: "Llantas Carrera de 19 y 20 pulgadas (Equipamiento de serie)",
        precio: 0,
        disponibilidad: 200,
        img: "./imagenes/llantas1.png",
    },
    {
        id: 5,
        categoria: "llantas",
        nombre: `Llantas Carrera "Classic" de 20 y 21 pulgadas`,
        precio: 8900,
        disponibilidad: 10,
        img: "./imagenes/llantas2.png",
    },
    {
        id: 6,
        categoria: "llantas",
        nombre: "Llantas Turbo de 20 y 21 pulgadas",
        precio: 9500,
        disponibilidad: 5,
        img: "./imagenes/llantas3.png",
    },
    {
        id: 7,
        categoria: "luces",
        nombre: "Faros principales LED Dynamic Light System Plus",
        precio: 2000,
        disponibilidad: 20,
        img: "./imagenes/luces1.png",
    },
    {
        id: 8,
        categoria: "luces",
        nombre: "Faros principales ED Matrix Dynamic Light System Plus",
        precio: 5000,
        disponibilidad: 8,
        img: "./imagenes/luces2.png",
    },
    {
        id: 9,
        categoria: "luces",
        nombre: "Faros principales LED tintados Matrix Beam Dynamic Light System Plus",
        precio: 14000,
        disponibilidad: 1,
        img: "./imagenes/luces3.png",
    },
];



const contenedorProductos = document.querySelector("#contenedorProductos");
console.log(productos);
const mostrarProductos = (data) => {
    data.forEach(productos => {
        const cardProducto = document.createElement("article");
        cardProducto.setAttribute("id", "tarjetaProducto");
        cardProducto.innerHTML = `
    <img class="prodImg" src="${productos.img}" alt="${productos.nombre}">
    <div class="prodDescripcion">
        <h5 class="prodNombre">${productos.nombre}</h5>
        <h5 class-"prodPrecio">${"USD $ " + productos.precio}</h5>
        <input id="${productos.id}" class="inputCompra" type="checkbox">SELECCIONAR</input>
    </div>
    `;
        contenedorProductos.appendChild(cardProducto);
    })
    const btnComprar = document.querySelectorAll(".btnCompra");
    btnComprar.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarAlCarrito(e.target.id)
        });
    })
}
mostrarProductos(productos);



function renderizarCarrito(carrito) {
    const div = document.createElement("div");
    div.className = "contenedor";
    div.innerHTML = `<p>${productos.id}</p>`
    contenedorCarrito.append(div)

    console.log("en renderizarCarrito: ", carrito);
}



let carrito = [];

function obtenerProductoLS() {
    const carritoLS = JSON.parse(localStorage.getItem("Productos"));
    if (carritoLS) {
        carrito = carritoLS;
    }
    renderizarCarrito(carrito);
    guardarLS();
}
function guardarLS() {
    const json = JSON.stringify(carrito);
    localStorage.setItem("carrito", json);
}

obtenerProductoLS();