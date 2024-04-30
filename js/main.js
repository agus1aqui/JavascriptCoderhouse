//arrays
//colores
const nombresColores = ["Negro Jet Metalizado", "Gris GT", "Azul Genciana Metalizado"];
const preciosColores = [5018.00, 4060.00, 5522.00];
//const disponibilidad??
//llantas
const nombresLlantas = ["Llantas Carrera de 19 y 20 pulgadas", "Llantas Carrera Classic de 20 y 21 pulgadas", "Llantas Turbo de 20 y 21 pulgadas"];
const preciosLlantas = [0.00, 8900.00, 9500.00];
//iluminacion
const nombresIluminacion = ["Faros principales LED Dynamic Light System Plus", "Faros principales ED Matrix Dynamic Light System Plus", "Faros principales LED tintados Matrix Beam Dynamic Light System Plus"];
const preciosIluminacion = [2000.00, 5000.00, 14000.00];
//precio base
const precioBase = 300000;


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
    }
    else {
        alert("Selección no válida, por favor ingrese nuevamente");
        return mostrarSeleccionColor();
    }
}
// mostrar seleccion
function mostrarPrecioColor() {
    const indiceColorSeleccionado = mostrarSeleccionColor();
    const nombreColor = nombresColores[indiceColorSeleccionado];
    const precioColor = preciosColores[indiceColorSeleccionado];
    alert("El precio del color seleccionado (" + nombreColor + ") es: $" + precioColor);
}




//menu llantas 
function mostrarSeleccionLlantas() {
    let seleccion = parseInt(prompt("Elige unas llantas:\n1. Llantas Carrera de 19 y 20 pulgadas\n2. Llantas Carrera Classic de 20 y 21 pulgadas\n3. Llantas Turbo de 20 y 21 pulgadas"));
    if (seleccion >= 1 && seleccion <= nombresLlantas.length) {
        return seleccion - 1;
    } else {
        alert("Selección no válida, por favor ingrese nuevamente");
        return mostrarSeleccionLlantas();
    }
}
function mostrarPrecioLlantas() {
    const indiceLlantasSeleccionadas = mostrarSeleccionLlantas();
    const nombreLlantas = nombresLlantas[indiceLlantasSeleccionadas];
    const precioLlantas = preciosLlantas[indiceLlantasSeleccionadas];
    alert("El precio de las llantas seleccionadas (" + nombreLlantas + ") es: $" + precioLlantas);
}




// menu iluminacion
function mostrarSeleccionIluminacion() {
    let seleccion = parseInt(prompt("Elige una opción de iluminación:\n1. Faros principales LED Dynamic Light System Plus\n2. Faros principales ED Matrix Dynamic Light System Plus\n3. Faros principales LED tintados Matrix Beam Dynamic Light System Plus"));
    if (seleccion >= 1 && seleccion <= nombresIluminacion.length) {
        return seleccion - 1;
    } else {
        alert("Selección no válida, por favor ingrese nuevamente");
        return mostrarSeleccionIluminacion();
    }
}
function mostrarPrecioIluminacion() {
    const indiceIluminacionSeleccionada = mostrarSeleccionIluminacion();
    const nombreIluminacion = nombresIluminacion[indiceIluminacionSeleccionada];
    const precioIluminacion = preciosIluminacion[indiceIluminacionSeleccionada];
    alert("El precio de la iluminación seleccionada (" + nombreIluminacion + ") es: $" + precioIluminacion);
}


mostrarPrecioColor();
mostrarPrecioLlantas();
mostrarPrecioIluminacion();

//suma
function sumarPrecios(precioBase, precioColor, precioLlantas, precioIluminacion) {
    const totalProductos = precioColor + precioLlantas + precioIluminacion;
    return precioBase + totalProductos;
}
const precioTotal = sumarPrecios(precioBase, preciosColores, preciosLlantas, preciosIluminacion);
alert("El precio total es: $" + precioTotal);
//corregir precios