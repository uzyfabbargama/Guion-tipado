// Acedemos a los punteros de la interfaz

//InputNombre = dirección de memoria del nombre
//btnSaludar = dirección del botón para el saludo
//displaySaludo = dirección para mostrar el saludo
//document.getElementById = Toma del documento de html, los ID, correspondientes
const inputRef = document.getElementById("InputNombre") as HTMLInputElement; //parece una entrada, pero si te fijas, para que te dé el texto de lo que estás enviando, entonces es también una salida
const botonRef = document.getElementById("btnSaludar") as HTMLButtonElement; //Elemento botón: punto de conexión hiper complejo, disfrazado de simple
const displayRef = document.getElementById("displaySaludo") as HTMLElement; //Un elemental de Hiper texto
// Definimos la función de respuesta
// Creamos una función en el vacío de memoria, para poder isertarle los datos necesarios, como una flecha, para no pisar  otros programas
const saludar = (): void => {
// constante de nombre:string para (=) el valor del input
  const TextoNombre: string = inputRef.value; //string no va entre comillas,que divertido; Por alguna razón la entrada no entra
//Solucionado
// que no sea un nombre vacío
  if (TextoNombre.trim() !== "") { //nos había faltado el egg () en trim
//mostramos el saludo
    displayRef.innerText = `Hola ${TextoNombre}`; 
  } else {
    displayRef.innerText = "Hola nadie";
  }
};

//Colocamos un oyente para comunicarse con el html (como una interrupción virtual)
if (botonRef){
botonRef.addEventListener("click", saludar);
};
