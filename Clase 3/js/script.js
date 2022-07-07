/* 
//Bucle for
for(let i  = 1; i<=3;i++){

alert('Usted es el jefe de los minisuper? Esta es la repetición '+i+' del bucle')

} 
alert('Gracias, vuelvan prontos');
*/



/* 
//Acá hacemos una cuenta regresiva
for(let i=10; i>0;i--){
    alert('Faltan '+ i + ' segundos para 2023.')
}

alert ('Feliz 2023!') */


/* 
//Podemos usar el valor de la variable i para hacer operaciones en cada iteración
for (let i = 1; i <= 10; i++) {
    console.log('1*' + i + ' es igual a ' + (1 * i));
}
 */

/* 
//Le pedimos un dato al usuario en cada iteración
let nombre;

for(let i = 0;i<3;i++){
    nombre = prompt ('Ingresá tu nombre');
    alert('Buen día, '+ nombre);
} */

/* 
//Sentencia break
let savedPass = 'alohomora';

for (let i = 0; i < 3; i++) {
    let password = prompt('Ingresá tu contraseña');
    if (savedPass === password) {
        alert('Bienvenido/a');
        break;
    }
} 

alert('fin del proceso');
*/


/* 
//sentencia continue
for(let i = 0;i<10;i++){
    if(i==4){
        alert('sapo muerto');
        //continue;
    }
    alert(i);
}
 */

/* 
//Bucle while
let repetir = true;

while(repetir){
    console.log('Soy un bucle while');
    repetir=false;
} */

/* 
//while con una variable numérica
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
} */


/* 
let kilometraje = 1000;

while (kilometraje>0){
    console.log('P.Sherman, calle wallabee 42 Sydney')
    kilometraje--;
}

console.log('Nemo!'); */

/* let edad = parseInt(prompt('Ingresa tu edad'));

while (edad < 13) {
    console.log('No podés pasar. Tenés que tener 13 o más');
    edad = parseInt(prompt('Ingresa tu edad'));

}

alert('Bienvenido/a'); */


/* let colorSecreto= 'aqua';

let pedidoBruja = prompt('Elegí el color');

while(colorSecreto!=pedidoBruja){
    alert('No tenemos ese color');
    pedidoBruja = prompt('Elegí otro color');
}

alert(pedidoBruja +'a correr como changos!'); */

/* 
//Bucle do...while
let condicion = false;

do {
    console.log('Soy un do...while');
} while (condicion); */


/* let passGuardado = 'tabla';
let continuar = true;

do {
    let passUsuario = prompt('Ingresa tu contraseña');
    if (passGuardado == passUsuario) {
        alert('Bienvenido/a');
        //continuar=false;
        break;
    }
} while (continuar); */

/*
//Switch
let opcion = prompt('Elegí una opción: \n1 - Té \n2 - Café \n3 - Chocolate');

switch (opcion) {
    case '1':
        console.log('Elegiste té');
        break;
    case '2':
        console.log('Elegiste café');
        break;
    case '3':
        console.log('Elegiste chocolate');
        break;
    default:
        console.log('Elegiste una opción no válida');
        break;
}

*/

