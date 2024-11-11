let listaElectrodomesticos = ["termo", "cafetera", "licuadora", "heladera", "tostadora", "batidora"];

//acceder de manera arbitraria a diferentes elementos del array
let indiceAleatorio = Math.floor(Math.random() * listaElectrodomesticos.length);
console.log("Elemento aleatorio:", listaElectrodomesticos[indiceAleatorio]);

//Extraer el primer elemento del array y agregarlo al final del mismo.
let primerElemento = listaElectrodomesticos.shift();
listaElectrodomesticos.push(primerElemento); 

console.log (listaElectrodomesticos);


//Agregar al final del array dos (2) nuevos productos.
listaElectrodomesticos.push ("pava", "mate");
console.log (listaElectrodomesticos)


//Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(listaElectrodomesticos.length);

//Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.

let productoBuscado = "licuadora";

if (listaElectrodomesticos.includes(productoBuscado)) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}


//Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.

let listaSeparada = listaElectrodomesticos.join(" ");
console.log(listaSeparada);

//Determinar la cantidad de elementos que posee la cadena de texto obtenida.
let cantidadDeElementos = listaSeparada.split(" ").length;
console.log(cantidadDeElementos)


//Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.

let nuevaLista = listaSeparada.replace("cafetera", "microondas");

console.log("Lista modificada: " + nuevaLista); 

//Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.

let nuevosElectrodomesticos =  listaSeparada.split(" ");

console.log(nuevosElectrodomesticos);




// for( let i=0 ; i <listaElectrodomesticos.length; i++){
//     console.log(listaElectrodomesticos [i])
// }