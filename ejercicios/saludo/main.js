// Acedemos a los punteros de la interfaz
//InputNombre = dirección de memoria del nombre
//btnSaludar = dirección del botón para el saludo
//displaySaludo = dirección para mostrar el saludo
//document.getElementById = Toma del documento de html, los ID, correspondientes
var inputRef = document.getElementById("InputNombre"); //parece una entrada, pero si te fijas, para que te dé el texto de lo que estás enviando, entonces es también una salida
var botonRef = document.getElementById("btnSaludar"); //Elemento botón: punto de conexión hiper complejo, disfrazado de simple
var displayRef = document.getElementById("displaySaludo"); //Un elemental de Hiper texto
// Definimos la función de respuesta
// Creamos una función en el vacío de memoria, para poder isertarle los datos necesarios, como una flecha, para no pisar  otros programas
var saludar = function () {
    // constante de nombre:string para (=) el valor del input
    var TextoNombre = inputRef.value; //string no va entre comillas,que divertido; Por alguna razón la entrada no entra
    //Solucionado
    // que no sea un nombre vacío
    if (TextoNombre.trim() !== "") { //nos había faltado el egg () en trim
        //mostramos el saludo
        displayRef.innerText = "Hola ".concat(TextoNombre);
    }
    else {
        displayRef.innerText = "Hola nadie";
    }
};
//Colocamos un oyente para comunicarse con el html (como una interrupción virtual)
if (botonRef) {
    botonRef.addEventListener("click", saludar);
}
;
