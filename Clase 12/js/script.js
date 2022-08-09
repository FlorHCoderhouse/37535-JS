/* contador;

contador = contador+1;

contador +=1;

contador++; */


/* let temperatura = 40;

(temperatura>30 || temperatura<0) ? alert('Día desagradable') : mostrarTemperatura(temperatura);


function mostrarTemperatura(temperatura){
    alert('El día de hoy hace '+temperatura);
}

let stock = 18;

stock>0 ? alert('El stock es '+stock):alert('Producto sin stock');

let vidas= 2;
vidas>0 ? alert('te quedan '+vidas+' vidas'):alert('Juego finalizado'); */


const usuario = {
    nombre: '',
    edad: 15,
    deuda:0
}


/* let permiso = (usuario.edad >= 18) ? true : false;

permiso ? alert('Puede comprar cerveza') : alert('Raja de acá pibe'); */


/* const  carrito = ['birra'];

carrito.length == 0 && alert('carrito vacío'); */


/* const llegadaUsuario = (usuario.edad>=18) && new Date();

console.log(llegadaUsuario); */

/* const nombreUsuario = usuario.nombre || 'nombre inexistente'
console.log(nombreUsuario);


const deudaUsuario = usuario.deuda || 0
console.log(deudaUsuario);

let puerto =3000;

const PORT = puerto||4000

const PUERTO = 4000||puerto
//console.log(PORT);
console.log(PUERTO);
 */

//Operador Nullish
const usuario2 = {
    nombre:'Marcia',
    apellido:undefined,
    edad: 23,
    curso: 'Wordpress',
    deuda:0
}


/* const apellidoUsuario = usuario2.apellido ?? 'No se puede obtener un valor válido de la propiedad';
console.log(apellidoUsuario);

const deudaUsuarioNullish = usuario2.deuda ?? 'Sin información';
console.log(deudaUsuarioNullish);

const deudaUsuarioOr = usuario2.deuda || 'Sin información';
console.log(deudaUsuarioOr); */

/* let usuario3=null;
//const cursoUsuario = usuario3.curso || 'ReactJS'
//console.log(cursoUsuario);

const nombreUsuario = usuario3?.nombre ||'No hay info'
console.log(nombreUsuario); */




const estudiante2 = {
    nombre: 'Ramón',
    edad: 30,
    curso: 'Diseño UX/UI',
    telefono: {
        casa: 1122233344,
        movil: 1564978520
    },
    mail: 'luciano.robles@mail.com'
}

/* let nombre = estudiante2.nombre;
console.log(nombre)
let edad = estudiante2.edad;
console.log(edad)
let curso = estudiante2.curso;
console.log(curso) */

/* let { nombre, curso, edad,mail, telefono:{casa} } = estudiante2

console.log(nombre);
console.log(edad);
console.log(curso);
console.log(mail);
console.log(telefono.casa);
 */

/* const item = {
    item_id: 120,
    product_name: "TV Smart",
    price_per_unit: 80000
}

let { item_id:id,product_name:nombre,price_per_unit:precio } = item;

console.log(id);
console.log(nombre);
console.log(precio); */

/* let caja = document.getElementById('caja');

const destructuring =({nombre, mail})=>{
    caja.innerHTML = `<p>Hola, ${nombre}, gracias por suscribirte. Acabamos de enviar un mail a ${mail}, para confirmar tu registro.</p>`
}

destructuring(estudiante2) */

/* 
//Destructuring de dos propiedades del objeto window
window.addEventListener('click',({x,y})=>{
    console.log(x,y);
}) */


const frutas = ['pera','manzana','kiwi', 'ananá','palta']
/* 

const [frutaA,frutaB,frutaC,d,e]=frutas


const[fruta1, , , ,fruta4]=frutas
console.log(fruta4) */

const precios = [10,150,2000,12,14,36];
/* 

let minimo = Math.min(...precios);
console.log(minimo);

console.log(precios); */

const frutas2 = ['naranja', 'pomelo', 'mandarina']
const frutas3 =['banana','cereza']
const frutas4=['mango','frutilla']
const fruta5='sandía'
/* 

const ensalada =[...frutas, ...frutas2,...frutas3,...frutas4, fruta5];
console.log(ensalada);

const objFrutas={
    ...ensalada
}

console.log(objFrutas); */

/* 
//Rest parameters

function sumar(...numeros){
    return numeros.reduce((ac,num)=>ac+num,0)
}

console.log(sumar(2,2,4))
console.log(sumar(2,2,4,7,6,5,8,4,5,6,9,12))



function escribir(texto, ...nombres){
    return nombres.map(nombre=>texto+' '+nombre)
}


console.log(escribir('Hola', 'Rachel','Monica','Phoebe','Chandler','Joey','Ross'))
console.log(escribir('Adiós', 'Rachel','Monica','Phoebe')) 
 */