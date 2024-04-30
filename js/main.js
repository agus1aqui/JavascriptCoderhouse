//arrays
//colores
const nombresColores = ["Negro Jet Metalizado", "Gris GT", "Azul Genciana Metalico"];
const preciosColores = [5018.00, 4060.00, 5522.00];
//const disponibilidad??
//llantas
const nombreLlantas = ["Llantas Carrera de 19 y 20 pulgadas", "Llantas Carrera Classic de 20 y 21 pulgadas", "Llantas Turbo de 20 y 21 pulgadas"];
const precioLlantas = [0.00, 8900.00, 9500.00];
//iluminacion
const nombreIluminacion = ["Faros principales LED Dynamic Light System Plus", "Faros principales ED Matrix Dynamic Light System Plus", "Faros principales LED tintados Matrix Beam Dynamic Light System Plus"];
const precioIluminacion = [2000.00, 5000.00, 14000.00];

//clases
/*
                    no veo la forma de integrar las clases si uso arrays
class Items{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        //disponibilidad?
        //description??
    }
}
const color1 = new Items ("Negro Jet Metalizado", 5018.00);
const color2 = new Items ("Gris GT", 4060.00);
const color3 = new Items ("Azul Genciana Metalizado", 5522.00);
*/
// menu colores
function mostrarSeleccionColor() {
    let seleccion = parseInt(prompt("Elige un color:\n1. Negro Jet Metalizado\n2. Gris GT\n3. Azul Genciana Metalizado"));
    if (seleccion >= 1 && seleccion <= nombresColores.length) {
        return seleccion - 1;
    } else {
        alert("Selección no válida, por favor ingrese nuevamente");
        return mostrarSeleccionColor();
    }
}
// mostrar colores
function mostrarPrecioColor() {
    const indiceColorSeleccionado = mostrarSeleccionColor();
    const nombreColores = nombres.indiceColorSeleccionado;
    const precioColor = preciosColores[indiceColorSeleccionado];
    alert("El precio del color seleccionado (" + nombreColor + ") es: $" + precioColor);
}




//menu colores
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
            colorElegido = "Negro Jet Metalizado";
            break;
        case 2:
            colorElegido = "Gris GT";
            break;
        case 3:
            colorElegido = "Azul Genciana Metalizado";
            break;
        default:
            alert("Selección no válida");
            return;
    }

    if (precioColores.seleccionColores) {
        alert("El precio de los colores elegidos es de: $" + precioColores.seleccionColores);
    }
}

menuSeleccionColores();






//llantas
const precioLlantas = {
    "Llantas Carrera de 19 y 20 pulgadas": 0.00,
    "Llantas Carrera Classic de 20 y 21 pulgadas": 8900.00,
    "Llantas Turbo de 20 y 21 pulgadas": 9500.00,
}
function mostrarSeleccionLlantas() {
    let seleccionLlantas = parseInt(prompt("Elegi las llantas: \n1. Llantas Carrera de 19 y 20 pulgadas\n2. Llantas Carrera Classic de 20 y 21 pulgadas\n3. Llantas Turbo de 20 y 21 pulgadas"));
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
            llantasElegido = "Llantas Carrera Classic de 20 y 21 pulgadas"
            break;
        case 3:
            llantasElegido = "Llantas Turbo de 20 y 21 pulgadas"
            break;
        default:
            alert("Seleccion no valida");
            return
    }
    if (precioLlantas.seleccionLlantas) {
        alert("El precio de las llantas elegidas es de: $" + precioLlantas.seleccionLlantas);
    }
}
menuSeleccionLlantas();







// Iluminacion
const precioIluminacion = {
    "Faros principales LED Dynamic Light System Plus": 2000.00,
    "Faros principales ED Matrix Dynamic Light System Plus": 5000.00,
    "Faros principales LED tintados Matrix Beam Dynamic Light System Plus": 14000.00,
};
function mostrarSeleccionIluminacion() {
    let seleccionIluminacion = parseInt(prompt("Elige un tipo de iluminación: \n1. Faros principales LED Dynamic Light System Plus\n2. Faros principales ED Matrix Dynamic Light System Plus\n3. Faros principales LED tintados Matrix Beam Dynamic Light System Plus"));
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
            alert("Selección no válida");
    }
}
if (precioIluminacion.seleccionIluminacion) {
    alert("El precio del sistema de iluminación elegido es: $" + precioIluminacion.seleccionIluminacion);
}

menuSeleccionIluminacion();










// Total
const precioBase = 300000;

function sumar(precioBase, precioColores, precioLlantas, precioIluminacion) {
    return precioBase + precioColores + precioLlantas + precioIluminacion;
}

function mostrar(mensaje) {
    alert("USD " + mensaje);
}

const precioSeleccionadoColores = precioColores.colorElegido;
const precioSeleccionadoLlantas = precioLlantas.llantasElegido;
const precioSeleccionadoIluminacion = precioIluminacion.iluminacionElegido;
const resultado = sumar(precioBase, precioSeleccionadoColores, precioSeleccionadoLlantas, precioSeleccionadoIluminacion);
mostrar(resultado);



//corregir precio