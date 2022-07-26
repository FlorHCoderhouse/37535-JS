/* let nodo = document.head;
console.log(nodo.nodeType);

let primerNodo = document.documentElement.firstChild;

if (primerNodo.nodeType == 8){
    console.log('El primer nodo es un comentario, y su nodeType es' + primerNodo.nodeType);
} else {
    console.log('No hay un comentario al principio');
} */

/* let elementoID =document.getElementById('tituloDOM');
console.log(elementoID);

let elementosClass = document.getElementsByClassName('resaltado');
console.log(elementosClass);

let elementosTag =document.getElementsByTagName('p');
//console.log(elementosTag);*/


/* let elementoQS = document.querySelector('.resaltado');
console.log(elementoQS);
let todosQS = document.querySelectorAll('h2');
console.log(todosQS); */

/* let titulo = document.getElementById('tituloPrincipal');

titulo.innerText = 'Nuevo título'
console.log(titulo.innerText);
console.log(titulo.className);
titulo.className = 'aquaBG'; */

/* let nuevoTitulo = prompt('Ingresa el nuevo título de la web');

titulo.innerText = nuevoTitulo;   */


/* 
//Acá cambio el atributo src de una imagen
let zapas = document.getElementById('zapas');
zapas.src = 'https://i.pinimg.com/originals/86/de/4c/86de4c10aba76910b854adb7814c2cc7.png'  */

/* 
let contenedor = document.querySelector('#containerPrincipal');
contenedor.innerHTML += '<h1>Soy un nuevo párrafo agregado a través del método innerHTML. Enjoy me! </h1>';
*/

/*
//Crear y agregar un elemento
let nuevoDiv = document.createElement('div');
document.body.append(nuevoDiv);
nuevoDiv.innerHTML = '<h2 class="aquaBG">Creando nuevos elementos</h2>';
document.body.prepend(nuevoDiv);

//Eliminar un elemento
let imagen = document.querySelector('#zapas');
imagen.remove(); */

/* let lista = document.querySelector('#listaPersonajes');
let personajes = ['Tokio', 'El profesor', 'Berlín', 'Río', 'Nairobi', 'Denver'];

for (const personaje of personajes){
    let li = document.createElement('li');
    li.innerText = personaje;
    lista.appendChild(li);
} */

/* 
let producto = {
    id: 1,
    nombre: "SMART TV SAMSUNG 32 PULGADAS HD UN32T4300AGCZB",
    precio: 87000,
    imagen: './img/TV32.jpg',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
};

let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " - $ " + producto.precio;
console.log(concatenado);

let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`
console.log(plantilla);

let contenedorTarjeta = document.createElement('div');
document.body.append(contenedorTarjeta);

let entrada = prompt('Ingresa tu nombre');
let tarjeta = document.createElement('div');
tarjeta.className = 'card';
tarjeta.innerHTML = `<h1>Bienvenido/a, ${entrada}</h1>
<h2>${producto.nombre}</h2>
<img src="${producto.imagen}" class="imagen" alt="Smart 32"> <br>
<p> ${producto.descripcion} </p>
<p> Precio: <span class="resaltado"> $ ${producto.precio} </span></p>
`
contenedorTarjeta.append(tarjeta) */