class Items {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        //disponibilidad? 
    }
}
//colores
//objetos 
const color1 = new Items("Negro Jet Metalizado", 5018.00);
const color2 = new Items("Gris GT", 4060.00);
const color3 = new Items("Azul Genciana Metalizado", 5522.00);
//funciones
function mostrarSeleccionColor() {
    let seleccionColores = parseInt(prompt("Elige un color: \n1. Negro Jet Metalizado \n2. Gris GT \n3. Azul Genciana Metalizado"));
    if (isNaN(seleccionColores)) {
        alert("Dato no válido, por favor ingrese nuevamente");
        return mostrarSeleccionColor();
    } else if (seleccionColores > 3 || seleccionColores < 1) {
        alert("Dato no válido, por favor ingrese nuevamente");
        return mostrarSeleccionColor();
    } else {
        return seleccionColores;
    }
}
function menuSeleccionColores() {
    const seleccionColores = mostrarSeleccionColor();
    let colorElegido;
    switch (seleccionColores) {
        case 1:
            colorElegido = (color1.nombre + " con un valor de: $ " + color1.precio);
            break;
        case 2:
            colorElegido = (color2.nombre + " con un valor de: $ " + color2.precio);
            break;
        case 3:
            colorElegido = (color3.nombre + " con un valor de: $ " + color3.precio);
            break;
        default:
            console.log("Selección no válida");
            return;
    }
    alert("El color elegido es: " + colorElegido)
}
menuSeleccionColores();



//lantas
//objetos
const llantas1 = new Items("Llantas Carrera de 19 y 20 pulgada", 0.00);
const llantas2 = new Items("Llantas Carrera Classic de 20 y 21 pulgadas", 8900.00);
const llantas3 = new Items("Llantas Turbo de 20 y 21 pulgadas", 9500.00);
//funciones
function mostrarSeleccionLlantas() {
    let seleccionLlantas = parseInt(prompt("Elige un color: \n1. Llantas Carrera de 19 y 20 pulgadas \n2. Llantas Carrera Classic de 20 y 21 pulgadas \n3. Llantas Turbo de 20 y 21 pulgadas"));
    if (isNaN(seleccionLlantas)) {
        alert("Dato no válido, por favor ingrese nuevamente");
        return mostrarSeleccionLlantas();
    } else if (seleccionLlantas > 3 || seleccionLlantas < 1) {
        alert("Dato no válido, por favor ingrese nuevamente");
        return mostrarSeleccionLlantas();
    } else {
        return seleccionLlantas;
    }
}
function menuSeleccionLlantas() {
    const seleccionLlantas = mostrarSeleccionLlantas();
    let llantasElegido;
    switch (seleccionLlantas) {
        case 1:
            llantasElegido = "Llantas Carrera de 19 y 20 pulgadas";
            break;
        case 2:
            llantasElegido = "Llantas Carrera Classic de 20 y 21 pulgadas";
            break;
        case 3:
            llantasElegido = "Llantas Turbo de 20 y 21 pulgadas";
            break;
        default:
            console.log("Selección no válida");
            return;
    }
    alert("Las llantas elegidas son: " + llantasElegido)
}
menuSeleccionLlantas();



//uliminacion
//objetos
const iluminacion1 = new Items("Faros principales LED Dynamic Light System Plus", 2000.00);
const iluminacion2 = new Items("Faros principales ED Matrix Dynamic Light System Plus", 5000.00);
const iluminacion3 = new Items("Faros principales Led tintados Matrix Beam Dynamic Light System Plus", 14000.00);
//funciones
function mostrarSeleccionIluminacion() {
    let seleccionIluminacion = parseInt(prompt("Elige un color: \n1. Faros principales LED Dynamic Light System Plus \n2. Faros principales ED Matrix Dynamic Light System Plus \n3. Faros principales LED tintados Matrix Beam Dynamic Light System Plus"));
    if (isNaN(seleccionIluminacion)) {
        alert("Dato no válido, por favor ingrese nuevamente");
        return mostrarSeleccionIluminacion();
    } else if (seleccionIluminacion > 3 || seleccionIluminacion < 1) {
        alert("Dato no válido, por favor ingrese nuevamente");
        return mostrarSeleccionIluminacion();
    } else {
        return seleccionIluminacion;
    }
}
function menuSeleccionIluminacion() {
    const seleccionIluminacion = mostrarSeleccionIluminacion();
    let iluminacionElegido;
    switch (seleccionIluminacion) {
        case 1:
            iluminacionElegido = "Faros principales LED Dynamic Light System Plus";
            break;
        case 2:
            iluminacionElegido = "Faros principales ED Matrix Dynamic Light System Plus";
            break;
        case 3:
            iluminacionElegido = "Faros principales LED tintados Matrix Beam Dynamic Light System Plus";
            break;
        default:
            console.log("Selección no válida");
            return;
    }
    alert("La iluminacion elegida es: " + iluminacionElegido)
}
menuSeleccionIluminacion();









// Total
const precioBase = 300000;

function sumar(precioBase, precioColores, precioLlantas, precioIluminacion) {
    return precioBase + precioColores + precioLlantas + precioIluminacion;
}

function mostrar(mensaje) {
    alert("Costo total: USD " + mensaje);
    //sumar iva?
}

const precioSeleccionadoColores = precioColores[seleccionColores];
const precioSeleccionadoLlantas = precioLlantas[seleccionLlantas];
const precioSelecionadoIluminacion = precioIluminacion[seleccionIluminacion];
const resultado = sumar(precioBase, precioSeleccionadoColores, precioSeleccionadoLlantas, precioSelecionadoIluminacion);
mostrar(resultado);



//falta carregir los precios