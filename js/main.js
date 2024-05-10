//colores
class ProductoColores {
    constructor(nombre, precio, disponibilidad) {
        this.nombre = nombre
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
}
//funciones
function agregarProductoCarrito(ProductoColores) {
    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === ProductoColores.nombre;
    });
    if (indiceProductoCarrito === -1) {
        carrito.push({
            nombre: ProductoColores.nombre,
            precio: ProductoColores.precio,
            disponibilidad: ProductoColores.disponibilidad,
            cantidad: 1
        });
    } else {
        carrito[indiceProductoCarrito].cantidad++;
    }
    console.log(carrito);
}
function renderizarColores(colores) {
    contenedorColores.innerHTML = "";

    for (const ProductoColores of colores) {

        const div = document.createElement("div");
        div.className = "productoColores";
        div.innerHTML = `<h4>${ProductoColores.nombre}`;

        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = "checkboxValue";
        input.addEventListener('change', function () {
            if (input.checked) {
                console.log('La checkbox está marcada.');
                agregarProductoCarrito(ProductoColores);
            } else {
                console.log('La checkbox está desmarcada.');
            }
        });

        div.append(input);
        contenedorColores.append(div)
    }
}
//inicio programa
const contenedorColores = document.getElementById("contenedorColores");
const colores = [
    new ProductoColores("Negro Jet Metalizado", 5018, 10),
    new ProductoColores("Gris GT", 4060, 0),
    new ProductoColores("Azul Genciana Metalizado", 5522, 3),
];
renderizarColores(colores);










//llantas
class ProductoLlantas {
    constructor(nombre, precio, disponibilidad) {
        this.nombre = nombre
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
}
//funciones
function agregarProductoCarrito(ProductoLlantas) {
    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === ProductoLlantas.nombre;
    });
    if (indiceProductoCarrito === -1) {
        carrito.push({
            nombre: ProductoLlantas.nombre,
            precio: ProductoLlantas.precio,
            disponibilidad: ProductoLlantas.disponibilidad,
            cantidad: 1
        });
    } else {
        carrito[indiceProductoCarrito].cantidad++;
    }
    console.log(carrito);
}
function renderizarLlantas(llantas) {
    contenedorLlantas.innerHTML = "";

    for (const ProductoLlantas of llantas) {
        const div = document.createElement("div");
        div.className = "productoLlantas";
        div.innerHTML = `<h4>${ProductoLlantas.nombre}`;

        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = "checkboxValue";
        input.addEventListener('change', function () {
            if (input.checked) {
                console.log('La checkbox está marcada.');
                agregarProductoCarrito(ProductoLlantas);
            } else {
                console.log('La checkbox está desmarcada.');
            }
        });


        div.append(input);
        contenedorLlantas.append(div)
    }
}
//inicio programa
const contenedorLlantas = document.getElementById("contenedorLlantas");
const llantas = [
    new ProductoLlantas("Llantas Carrera de 19 y 20 pulgadas (Equipamiento de serie)", 0, 200),
    new ProductoLlantas(`Llantas Carrera "Classic" de 20 y 21 pulgadas`, 8900, 10),
    new ProductoLlantas("Llantas Turbo de 20 y 21 pulgadas", 9500, 5),
];
renderizarLlantas(llantas)








//luces
class ProductoLuces {
    constructor(nombre, precio, disponibilidad) {
        this.nombre = nombre
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
}
//funciones
function agregarProductoCarrito(ProductoLuces) {
    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === ProductoLuces.nombre;
    });
    if (indiceProductoCarrito === -1) {
        carrito.push({
            nombre: ProductoLuces.nombre,
            precio: ProductoLuces.precio,
            disponibilidad: ProductoLuces.disponibilidad,
            cantidad: 1
        });
    } else {
        carrito[indiceProductoCarrito].cantidad++;
    }
    console.log(carrito);
}
function renderizarLuces(luces) {
    contenedorLuces.innerHTML = "";

    for (const ProductoLuces of luces) {
        const div = document.createElement("div");
        div.className = "productoLuces";
        div.innerHTML = `<h4>${ProductoLuces.nombre}`;

        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = "checkboxValue";
        input.addEventListener('change', function () {
            if (input.checked) {
                console.log('La checkbox está marcada.');
                agregarProductoCarrito(ProductoLuces);
            } else {
                console.log('La checkbox está desmarcada.');
            }
        });


        div.append(input);
        contenedorLuces.append(div)
    }
}
//inicio programa
const contenedorLuces = document.getElementById("contenedorLuces");
const luces = [
    new ProductoLuces("Faros principales LED Dynamic Light System Plus", 2000, 20),
    new ProductoLuces("Faros principales ED Matrix Dynamic Light System Plus", 5000, 8),
    new ProductoLuces("Faros principales LED tintados Matrix Beam Dynamic Light System Plus", 14000, 1),
];
renderizarLuces(luces)









//carrito
let carrito = [];

function obtenerProductoLS() {
    const carritoLS = JSON.parse(localStorage.getItem("ProductoColores", "ProductoLlantas", "ProductoLuces"));
    if (carritoLS) {
        carrito = carritoLS;
    }
    renderizarCarrito(carrito);
    guardarLS();
}
function guardarLS(){Q
    const json = JSON.stringify(carrito);
    localStorage.setItem(json);
}

obtenerProductoLS();

