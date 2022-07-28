const btnSaludoGenerico = document.getElementById('generico');
const btnSaludoPersonalizado = document.getElementById('personalizado');
const titulo = document.querySelector('.coderTitulo');
const btnTest = document.getElementById('tester');
let inputMail = document.getElementById('email');
let inputUsuario = document.querySelector('#usuario');
let inputPass = document.querySelector('#password');
let radioBeige = document.getElementById('beige');
let radioNegro = document.getElementById('negro');
let caja = document.querySelector('.caja');
let elementosradio = document.querySelectorAll('.radiobutton');

function saludarGenerico() {
    alert("Gracias por suscribirte");
}

function saludarPersonalizado(nombre) {
    alert('Bienvenido/a, ' + nombre)
}

btnSaludoGenerico.addEventListener('click', saludarGenerico);
//Sirve para cualquier elemento clickeable, no sólo botones
titulo.addEventListener('click', saludarGenerico);


/* btnSaludoPersonalizado.addEventListener('click', ()=>{
    let nombre = prompt('Ingresa tu nombre');
    saludarPersonalizado(nombre);
}) */


//Acá capturo el valor de un input para mostrar el nombre en el saludo
btnSaludoPersonalizado.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    saludarPersonalizado(nombre);
})

btnTest.onclick = () => {
    console.log(('Hiciste click en el boton'));
}

/* btnTest.onmousemove = () => {
    console.log('moviste el mouse por aca');
} */

/* //Había declarado mal el borde...
caja.onmouseover =()=>{
    console.log('Estados Unidos');
} 

caja.onmouseout = () => {
    console.log('Australia');

} */



/* inputUsuario.addEventListener('keydown',()=>{
    console.log(inputUsuario.value);
}) */

/* 
//Sólo un ejemplo, no funciona porque le faltan cosas, pero para que vean una idea de cómo podrían usar el input para filtrar a medida que el usuario escibe

inputUsuario.addEventListener('input', () => {
    let cadena = inputUsuario.value;
    productos.filter((producto)=>producto.nombre==cadena);
})
 */


/* inputMail.addEventListener('keyup',()=>{
    console.log(inputMail.value);
}) */

/* inputMail.addEventListener('keydown', () => {
    console.log(inputMail.value);
}) */


/* inputUsuario.addEventListener('keypress',(evento)=>{

    let codCaracter = evento.charCode;
    if(codCaracter!=0){
        if (codCaracter < 97 || codCaracter > 122){
            evento.preventDefault();
            alert("Solo podes usar minusculas");
        }
    }
}) */

/* inputPass.addEventListener('input', () => {
    console.log(inputPass.value);
}) */

/* inputUsuario.onchange = () => {
    console.log(inputUsuario.value);
} */


function cambiarImagen(source) {
    document.getElementById('zapatillaConverse').src = source;
}

/*
radioBeige.addEventListener('click',()=>{
    cambiarImagen('./img/converse_beige.jfif');
})

radioNegro.addEventListener('click', () => {
    cambiarImagen('./img/converse_negra.jfif');
})
 */


const zapas = [{
    id: 1,
    nombre: 'Chuck Taylor',
    color: 'negro',
    imagen: './img/converse_negra.jfif'
}, {
    id: 2,
    nombre: 'Chuck Taylor',
    color: 'beige',
    imagen: './img/converse_beige.jfif'
}]


/* 
//Atención que esta línea no funciona porque no podemos agregar de una sola vez a todos los elementos del array el listener
elementosradio.addEventListener('click',()=>{
    cambiarImagen('./img/converse_negra.jfif');
}) */

for (const radioButton of elementosradio) {
    radioButton.addEventListener('click', () => {
        let colorElegido = radioButton.value;
        let varianteElegida = zapas.find((zapa) => zapa.color === colorElegido);
        cambiarImagen(varianteElegida.imagen)
    })
}
