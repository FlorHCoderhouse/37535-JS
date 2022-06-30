//Sintaxis básica de Javascript
//Esto es un comentario de una línea.  Atajo Ctrl+K+C

/**
Este es un comentario de varias líneas
sirve para explicar funcionalidades
y también para comentar bloques de código 
mientras está en desarrollo.
El atajo es Shift+Alt+A
 */

/*Palabras reservadas. Sólo deben usarse para el fin para el que fueron creadas. No nombrar variables, funciones, etc, con palabras reservadas. 
Ejemplos: break, case, catch, continue, default, let, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más*/

let unNombre = "Flor";
let otroNombre = 'Mauro';
let unNombreMas = "Fran";
let unaFrase = "Entonces Mauro dijo: 'Yo tengo la ventaja que flor no sabe cuanto lloraba en html y css' "


//No se tienen en cuenta espacios en blanco y nuevas líneas. Esta declaración (con espacios):
let miNombre1 =        'Flor';
//funciona igual que esta:
let miNombre2 = 'Flor';
//y que esta (las líneas en blanco se ignoran): 







let miNombre3 = 'Flor';

//Case Sensitive. Esto:
let minombre = 'Flor';
//NO es lo mismo que esto:
let miNombre = 'Gabriel';


/*Variables. Si quieren ver el resultado de cualquiera de estas sentencias, pueden usar console.log()*/
//Hay tres palabras reservadas para la declaración de variables: 


var nombre = 'Carina'; //Se puede usar desde cualquier lugar del programa.
let apellido = 'Mercado'; //Se puede usar dentro del bloque donde fue declarada y hacia adentro.
const TATUAJE = 'amor'; //No se puede modificar su valor una vez declarada.

//No usar caracteres especiales para nombrar variables. Ejemplo ñ, í, @, !, etc. No dejar espacios en blanco entre palabras en el nombre de la variable. Si hace falta, usar camelCase.

//Valores de variables

//Variables que almacenan datos de tipo Number
let peso = 65;
let altura = 1.61;

//Variables que almacenan datos de tipo String
let fraseFavorita = 'Menos charla y más acción';
let palabraFavorita = 'Serendipia';

//En todos los ejemplos anteriores, las variables se declararon y se inicializaron (se les asignó su valor inicial), en la misma sentencia, pero se puede hacer por separado. Ejemplo:

//Declaración
let ciudad;
let pais;
let edad;

//Inicialización o asignación
ciudad = 'Cartagena';
pais = 'Colombia';
edad = 35;

//Operaciones con variables numéricas: Declaremos algunas variables para hacer operaciones aritméticas
let numeroA = 4;
let numeroB = 9;
const PI = 3.14;

let suma = numeroA + numeroB; //console.log(suma) = 13
let resta = numeroB - numeroA; //console.log(resta) = 5
let producto = numeroA * PI; //console.log(producto) = 12.56
let modulo = numeroB % numeroA; //console.log(modulo) = 1

console.log(suma)
console.log(resta)
console.log(producto)
console.log(modulo)

//Operaciones con variables de texto

let palabra1 = 'Hola';
let palabra2 = 'Mundo';
let remate = 'A la grande le puse Cuca';
let numero = 27;
let numeroString = '39'

let concatenar1y2 = palabra1 + palabra2; //console.log(concatenar1y2) = HolaMundo
let concatenar1y2conEspacio = palabra1 + ' ' + palabra2; //console.log(concatenar1y2conEspacio) = Hola Mundo
let remateNumero = remate + numero; //console.log(remateNumero) = A la grande le puse Cuca27
let numeroStringYNumero = numeroString + numero; //console.log(numeroStringYNumero)= 3927

/* 
Interactuar con el usuario. ¡Descomenten este código al final!

//prompt(): Muestra un cuadro de diálogo para que el usuario ingrese un dato.


let nombreUsuario =prompt("Ingresá tu nombre"); // guardamos el dato ingresado en una variable para recuperarlo y usarlo
let edadUsuario = prompt("Ingresá tu edad");// este dato, por defecto, se guarda como un String
let edadUsuarioEnNumero = parseInt(prompt("Ingresá tu edad de nuevo")); //parseamos (transformamos) el string en un numero entero
let alturaUsuario = parseFloat(prompt("Ingresa tu altura, en mts, con un punto para marcar el decimal. Ejemplo 1.57")); //parseamos (transformamos) el string en un numero decimal

//console.log(): muestra información en la consola del navegador.
console.log(nombreUsuario);
console.log(edadUsuario, edadUsuarioEnNumero);
console.log('El usuario mide '+alturaUsuario+' mts');

//alert(): muestra un cuadro de diálogo con información.

alert('Bienvenido/a '+nombreUsuario);

 */


//Ejemplo de script completo aplicando todo lo visto:
let edadActual = parseInt(prompt('Ingresa tu edad'));
let edadEn5 = edadActual + 5;
console.log(edadEn5)
alert('En 5 años tendrás ' + edadEn5 + ' años.')


//De yapa les dejo un quiz para comprobar conocimientos!
//https://forms.gle/B3DJdZB3tfVgHEte9