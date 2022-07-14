let nombre = 'Homero';
let edad = 39;
let peso = 69;
let calle = 'Av Siempreviva 742';



const personaje1 = {
    nombre: 'Homero',
    edad: 39,
    peso: 69,
    calle: 'Av Siempreviva 742'
}


const personaje2 = {
    nombre: 'Marge',
    apellido: 'Bouvier',
    edad: 38,
    esSoltera: false,
    hijos: {
        primero: 'Bart',
        segundo: 'Lisa',
        tercero: 'Maggie'
    }

}

//console.log(personaje1)

//Acceder a propiedades (atributos, características) de los objetos, con dos notaciones: punto y corchetes
//alert('El peso del personaje es '+ personaje1.peso)
//alert('El nombre del pesonaje es '+ personaje1['nombre'] + ' y su peso es '+ personaje2['hijos']['primero']); */

//modificar el valor de una propiedad
/* console.log(personaje1.peso)
personaje1.peso = 150;
console.log(personaje1.peso) */

/*
//Si intento cambiarle el valor a una propiedad que no existe, se va a crear
personaje2.camina = true;
console.log(personaje2.camina)
console.log(personaje2); 
*/


//Función constructora de objetos

function Personaje(nombre, apellido, edad, usaPanial) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.usaPanial = usaPanial;
    this.respira = true;
    //esto es un método (un comportamiento, una acción) del objeto
    this.hablar = function (mensaje) {
        alert(mensaje)
    }

}

//Instanciando (creando) objetos de tipo Personaje
const personaje3 = new Personaje('Bart', 'Simpson', 10);
const personaje4 = new Personaje('Lisa', 'Simpson'); // si faltan parámetros, se completan con undefined, y se van asignando en el orden que aparecen
const personaje5 = new Personaje('Maggie', 'Simpson', 2, true);

/* //Muestro los personajes
console.log(personaje3);
console.log(personaje4);
console.log(personaje5); */

//Usando el operador in y el bucle for...in 

/* console.log('apellido' in personaje3); // esto me devuelve true o false, según si la propiedad existe o no en el objeto
console.log('altura' in personaje3);
console.log('edad' in personaje4); */

/* 
//recorro todo el objeto y muestro el nombre de la propiedad y el valor
for (const propiedad in personaje4) {
    console.log(propiedad+':'+personaje4[propiedad]);

} 
*/

//usando un método de los objetos de tipo Personaje
/* personaje3.hablar('Soy'+ personaje3.nombre+ ' y digo Ay, Caramba')
personaje4.hablar('Soy patética') */

//Acá no pasa nada porque no estoy asociando el método con un objeto de tipo Persniaje, entonces no funciona
//hablar('Soy Flor');


/* 
//El usuario nos da los valores para crear el personaje
let nombrePersonaje = prompt('Ingresa el nombre de tu personaje');
let apellidoPersonaje = prompt('Ingresa el apellido de tu personaje');
let edadPersonaje = prompt('Ingresa la edad de tu personaje');

const personajeUsuario = new Personaje(nombrePersonaje,apellidoPersonaje,edadPersonaje);

console.log(personajeUsuario) */


/* 
//Los objetos de JS tienen sus propios métodos y propiedades
//Acá, un objeto de tipo String

let cadena = 'Hola soy Flor';
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());
console.log(cadena.length); 

*/

