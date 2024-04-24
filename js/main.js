// Eleccion de colores 
const precioColores = {
    "Negro Jet Metalizado": 5018.00,
    "Gris GT": 4060.00,
    "Azul Genciana Metalizado": 5522.00
};

let seleccionColores = prompt("Elige un color: \n1. Negro Jet Metalizado\n2. Gris GT\n3. Azul Genciana Metalizado");

switch (seleccionColores) {
    case "1":
        seleccionColores = "Negro Jet Metalizado";
        break;
    case "2":
        seleccionColores = "Gris GT";
        break;
    case "3":
        seleccionColores = "Azul Genciana Metalizado";
        break;
    default:
        console.log("Selección invalida. Por favor, elige una opción valida.");
}

if (precioColores[seleccionColores]) {
    console.log("El precio del color seleccionado es: $" + precioColores[seleccionColores]);
} else {
    console.log("Selección invalida. Por favor, elige una opción valida.");
}


// Eleccion de llantas
const precioLlantas = {
    "Llantas Carrera de 19 y 20 pulgadas": 0.00,
    "Llantas Carrera Classic de 20 y 21 pulgadas": 8900.00,
    "Llantas Turbo de 20 y 21 pulgadas": 9500.00
};

let seleccionLlantas = prompt("Elige unas llantas: \n1. Llantas Carrera de 19 y 20 pulgadas\n2. Llantas Carrera Classic de 20 y 21 pulgadas\n3. Llantas Turbo de 20 y 21 pulgadas");

switch (seleccionLlantas) {
    case "1":
        seleccionLlantas = "Llantas Carrera de 19 y 20 pulgadas";
        break;
    case "2":
        seleccionLlantas = "Llantas Carrera Classic de 20 y 21 pulgadas";
        break;
    case "3":
        seleccionLlantas = "Llantas Turbo de 20 y 21 pulgadas";
        break;
    default:
        console.log("Seleccion invalida. Por favor, elige una opcion valida.");
}

if (precioLlantas[seleccionLlantas]) {
    console.log("El precio de las llantas seleccionadas es: $" + precioLlantas[seleccionLlantas]);
} else {
    console.log("Seleccion invalida. Por favor, elige una opcion valida");
}


//eleccion iluminacion
const precioIluminacion = {
    "Faros principales LED Dynamic Light System Plus": 2000.00,
    "Faros principales ED Matrix Dynamic Light System Plus": 5000.00,
    "Faros principales LED tintados Matrix Beam Dynamic Light System Plus": 14000.00
};

let seleccionIluminacion = prompt("Elige el sistema de iluminacion: \n1.Faros principales LED Dynamic Light System Plus \n2. Faros principales ED Matrix Dynamic Light System Plus\n3. Faros principales LED tintados Matrix Beam Dynamic Light System Plus");

switch (seleccionIluminacion) {
    case "1":
        seleccionIluminacion = "Faros principales LED Dynamic Light System Plus";
        break;
    case "2":
        seleccionIluminacion = "Faros principales ED Matrix Dynamic Light System Plus";
        break;
    case "3":
        seleccionIluminacion = "Faros principales LED tintados Matrix Beam Dynamic Light System Plus";
        break;
    default:
        console.log("Seleccion invalida. Por favor, elige una opcion valida.");
}

if (precioIluminacion[seleccionIluminacion]) {
    console.log("El precio del sistema de uliminacion elegido es: $" + precioIluminacion[seleccionIluminacion]);
} else {
    console.log("Seleccion invalida. Por favor, elige una opcion valida");
}


// Total
const precioBase = 300000;

function sumar(precioBase, precioColores, precioLlantas, precioIluminacion) {
    return precioBase + precioColores + precioLlantas + precioIluminacion;
}

function mostrar(mensaje) {
    alert("Costo total: USD " + mensaje);
}

const precioSeleccionadoColores = precioColores[seleccionColores];
const precioSeleccionadoLlantas = precioLlantas[seleccionLlantas];
const precioSelecionadoIluminacion = precioIluminacion[seleccionIluminacion];
const resultado = sumar(precioBase, precioSeleccionadoColores, precioSeleccionadoLlantas, precioSelecionadoIluminacion);
mostrar(resultado);



