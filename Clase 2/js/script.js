/* let condicion = false;
let numeroA = 10;
let numeroB = 20;

if (condicion) {
    console.log('La condición es verdadera');
}

if (numeroA<numeroB) {
    console.log('El numero A es menor al numero B');
}

*/

/* let savedPass = 'tabla';
let userPass = prompt('Ingresa tu contraseña');

if(savedPass==userPass){
    alert('Bienvenido/a!');
    console.log('Ingreso exitoso');
}else{
    alert('Esa no es, rey');
    console.log(userPass);
}

 */


/* 
let edadObligatoria = 18;
let edadOptativaMenor = 16;
let edadOptativaMayor =70;
let edadVotante = parseInt(prompt('Ingresa tu edad'));


if (edadVotante >= edadObligatoria && edadVotante<edadOptativaMayor ) {
    alert('Debés votar');
} 
else if (edadVotante >= edadOptativaMenor || edadVotante>=edadOptativaMayor ) {
    alert('Podés votar si tenés ganas');
} 
else {
    alert('No podes votar');
}

alert('Fin del proceso'); */

/* 
let mayorQue = 2>1;

let numA = 1;
let numB = 3;
let menorQue= num1<num3; */

/* let boolean = !true;
console.log(boolean)


if(boolean){
    console.log('La variable es true');
}else{
    console.log('La variable es false');
}

let Producto;

if(!Producto){
    agregarProducto()
}else{
    agregarUnidadAProducto()
}

 */


/* alert('Hola soy un \nSalto de línea')
let opcion = prompt('Selecciona una opcion\n1 - Cafe \n2 - Te \n3 - Mate ');
 */

//Resolución de un ejercicio del booklet
/* let nombre = prompt('Di lo tuyo, Bart');
let nombreGuardado = 'BART';

if (nombre == 'BART' || nombre == 'Bart' || nombre == 'bart') {
    alert('Fui yo');
} else {
    alert('Yo no fui');
} */


/*
//Acá les dejo más ejemplos, además de los que vimos en clase
/* //If
if (1<2) {
    console.log('1 es menor que 2');
}

//if-else
if (1<3) {
    console.log('1 es menor que 3');
}else{
    console.log('1 no es menor que 3');
}

//if- else if
if (edad >= 18) {
    console.log('Puede abrir una cuenta full de Youtube');
} else if (edad >= 13) {
    console.log('Podés tener una cuenta pero le vamos a preguntar a tu responsable');
} else {
    console.log('Llama a tus padres');
}

console.log('Fin del condicional'); */

/*
//Variables booleanas

let edad = 12;
let miEdad = "37";
let edadLucas = prompt('Lucas, Ingresa tu edad');
let numeroA = 15;
let numeroB =320;

//Guardo un valor booleano explícito. Puede ser true o false
let variableBooleana = false;
//Guardo el resultado de una comparación, que es un valor true o false
let variableBooleanaB = (10>2);
//puedo guardar la comparación entre otras dos variables.
let variableBool = (numeroA<numeroB);
//El operador de igualdad estricta compara el valor de la variable y también el tipo de dato
let comparacion = (miEdad === edadLucas); */


//Operadores lógicos
//> Mayor que
//< Menor que
//>= Mayor o igual que
//<= Menor o igual que
//= asignación
//== comparacion de igualdad de valor
//=== comparacion estricta (compara el valor y el tipo de dato)
//!= distinto de
//!== distinto (estricto)

/* //Atención al orden de las condiciones a evaluar
let numero = 1;

if (numero < 10) {
    console.log('El numero es menor a 10');
} else if (numero < 5) {
    console.log('El numero es menor a 5');
} else {
    console.log('El numero es mayor a 10');
}  */


/* //Evaluamos directamente una variable booleana

let booleana = false;

if(booleana){
    console.log('La variable es false');
}else{
    console.log('La variable es true');
}  */

/* let palabra = parseInt("7");
let otraPalabra =7;

console.log(palabra===otraPalabra); */

/* let nombre = prompt('Ingresa tu nombre'); */
/* let apellido = prompt('Ingresa tu apellido');

if(nombre!='' || apellido!=''){
    alert('Bienvenido/a '+nombre+' '+apellido)
}else{
    alert('Faltan datos')
}
 */


/* if((nombre!='')&&(nombre=="Flor"||nombre=="flor")){
    alert("Bienvenida "+nombre)
}else{
    alert("No sos Flor")
} */

/* Condicional 

let edadConductor = parseInt(prompt('Ingrese su edad'));

if (edadConductor >= 18) {
    console.log('Puede conducir sin acompañante');
} else if (edadConductor < 18 && edadConductor >= 13) {//Este condicional está bien pero es redundante. Si el programa llegó hasta este bloque, es porque la primera condición es falsa. No hace falta la parte de edadConductor < 18 &&
    console.log('Puede conducir con un acompañante adulto responsable');
} else {
    console.log("No puede conducir, ni solo/a ni acompañado/a")
} */
