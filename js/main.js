
const precioBase = 300000;
const productos = [
    { name: "Negro Jet Metalizado", price: 5018, stock: 10, image: './imagenes/black.png' },
    { name: "Gris GT", price: 4060, stock: 5, image: './imagenes/grey.png' },
    { name: "Azul Geneciana Metalizado", price: 5522, stock: 1, image: './imagenes/blue.png' },
    { name: "Llantas Carrera de 19 y 20 pulgadas (equipamiento de serie)", price: 0, stock: 100, image: './imagenes/llantas1.png' },
    { name: "Llantas Carrera `Classic` de 20 y 21 pulgadas", price: 8900, stock: 0, image: './imagenes/llantas2.png' },
    { name: "Llantas Turbo de 20 y 21 pulgadas", price: 9500, stock: 2, image: './imagenes/llantas3.png' },
    { name: "Faros principales LED Dynamic Light System Plus", price: 2000, stock: 10, image: './imagenes/luces1.png' },
    { name: "Faros principales ED Matrix Dynamic Light System Plus", price: 5000, stock: 3, image: './imagenes/luces2.png' },
    { name: "Faros principales LED tintados Matrix Beam Dynamic Light System Plus", price: 14000, stock: 4, image: './imagenes/luces3.png' }
];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const saveCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};
const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.price, 0);
};
const displayProductos = () => {
    const productoList = document.getElementById('productoCard');
    productoList.innerHTML = '<h2>Productos</h2>';
    productos.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'product';
        productoDiv.innerHTML = `
            <img src="${producto.image}" alt="${producto.name}">
            <span>${producto.name} - $${producto.price.toLocaleString()} (Stock: ${producto.stock})</span>
            ${producto.stock > 0 ? `<button onclick="aniadirCarrito(${index})">Añadir al carrito</button>` : '<span>Sin stock</span>'}
        `;
        productoList.appendChild(productoDiv);
    });
};
const displayCarrito = () => {
    const carritoDiv = document.getElementById('carritoCard');
    carritoDiv.innerHTML = '<h2>Carrito</h2>';
    if (carrito.length === 0) {
        carritoDiv.innerHTML += '<p>Tu carrito esta vacio</p>';
    } else {
        carrito.forEach((item, index) => {
            const carritoItemDiv = document.createElement('div');
            carritoItemDiv.className = 'carritoCard';
            carritoItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name} - $${item.price.toLocaleString()}</span>
                <button onclick="eliminarCarrito(${index})">Eliminar</button>
            `;
            carritoDiv.appendChild(carritoItemDiv);
        });
        const total = calcularTotal();
        carritoDiv.innerHTML += `<p>Total: $${total.toLocaleString()}</p>`;
    }
};
const aniadirCarrito = (index) => {
    const producto = productos[index];
    if (producto.stock > 0) {
        producto.stock -= 1;
        carrito.push(producto);
        saveCarrito();
        displayProductos();
        displayCarrito();
    }
};
const eliminarCarrito = (index) => {
    const producto = carrito[index];
    const productoIndex = productos.findIndex(p => p.name === producto.name);
    productos[productoIndex].stock += 1;
    carrito.splice(index, 1);
    saveCarrito();
    displayProductos();
    displayCarrito();
};
displayProductos();
displayCarrito();



fetch("./productos.json")
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        console.log(responseJson);
    });