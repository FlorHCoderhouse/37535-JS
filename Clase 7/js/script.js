/* 
//Abstracción

//código para sumar números en un rango
let total = 0;


for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log(total);

//Acá hacemos lo mismo, pero lo abstraemos en una función

function sumarRango(inicio, fin) {
    let total = 0;
    for (let i = inicio; i <= fin; i++) {
        total += i;
    }
    return total;
}

//Uso la función y no me preocupo de cómo se resuelve, yo sólo necesito saber que se va a sumar el rango entre los números que le indique.
console.log(sumarRango(1,10));
console.log(sumarRango(1,20));

//Acá uso el resultado como parámetro de otra función
function multiplicar(numero,factor){
    return numero*factor;
}

console.log(multiplicar(sumarRango(1,10),3)); */

/*
//Funciones que reciben una función como parámetro
function porCadaUno(array, fn) {
    for (const elemento of array) {
        fn(elemento);
    }
}

function cuadrado(num) {
    let resultado = num * num;
    console.log(resultado);
}

function cubo(num) {
    let resultado = num * num * num;
    console.log(resultado);
}
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* 
porCadaUno(numeros, cuadrado);
porCadaUno(numeros, cubo); 

const duplicado = []

porCadaUno(numeros, (el) => { duplicado.push(el * 2) });

console.log(duplicado); */

/* 


//Métodos de los arrays, que son funciones de orden superior (reciben otra función como parámetro)
const triplicados=[];
//forEach()
console.log(numeros);
numeros.forEach((elemento) => {
    elemento = elemento * 3;
    triplicados.push(elemento);

})
console.log(numeros);
console.log(triplicados); */

const cursos = [{
    nombre: 'Javascript',
    precio: 15000
},
{
    nombre: 'ReactJS',
    precio: 22000
},
{
    nombre: 'AngularJS',
    precio: 20500
},
{
    nombre: 'Desarrollo Web',
    precio: 16000
},
]


/* 
//find(). Retorna el primer elemento que cumple con la condición. Si no hay ninguno, retorna undefined

const encontrado = cursos.find((curso)=>curso.precio>20000&&curso.precio<21000);
console.log(encontrado);

const encontradoCompuesto = cursos.find((curso)=>curso.precio>20000&&curso.precio<21000);
console.log(encontradoCompuesto);

const noEncontrado = cursos.find((curso) => curso.precio == 10000);
console.log(noEncontrado);


//some(). Retorna true si algún elemento cumple la condición, o false si ninguno lo hace
const alguno = cursos.some((curso) => curso.precio > 20000);
console.log(alguno);

const ninguno = cursos.some((curso) => curso.nombre == 'Wordpress');
console.log(ninguno);


//filter(). Retorna un array con todos los elementos que cumplen la condición. Si no hay ninguno, devuelve un array vacío


const filtrado = cursos.filter((curso) => curso.precio > 20000);
console.log(filtrado);

const infiltrado = cursos.filter((curso) => curso.precio < 10000);
console.log(infiltrado); 


//Acá le pido al usuario que elija el criterio de búsqueda
let keyword =prompt('Ingresa el término de búsqueda')
const otroFiltrado = cursos.filter((curso)=>curso.nombre.includes(keyword));
console.log(otroFiltrado)


//map(). Retorna un array con la misma cantidad de elementos que el array original, pero con la operación aplicada
const cursosDescuento = cursos.map((curso) => { return { nombre: curso.nombre, precio: curso.precio * .55 } })

console.log(cursos);
console.log(cursosDescuento);


//reduce(). Retorna un único valor que es la suma de todos los valores detallados
const totalArray= numeros.reduce((acumulador,numero)=>acumulador+numero,0);
console.log(totalArray);



//sort(). Ordena el array original según la función elegida (menor a mayor, mayor a menor). FUNCION DESTRUCTIVA
const desordenados = [1, 5, 23, 45, 2, 78, 4]
const ordenados = desordenados.slice(0)
ordenados.sort((a,b)=>b-a);

console.log(desordenados);
console.log(ordenados); 
*/

const precioFinal = cursos.reduce((ac,curso)=>{return ac+=curso.precio},0);
console.log(precioFinal);
/* 
//Ejemplo de aplicación de sort para ordenamiento alfabético
//Clase para los objetos libro
class Libro {

    constructor(titulo, autor, anio, genero, valoracion, id, cover) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
        this.valoracion = valoracion;
        this.id = id;
        this.cover = cover;
    }

}

//Nuestro array de libros hardcodeado. Algo así como nuestra mock database 
const libros = [
    new Libro('American Gods', 'Neil Gaiman', 2001, 'Fantasía', 6, 1, './img/american-gods.jpg'),
    new Libro('Némesis', 'Agatha Christie', 1971, 'Misterio', 8, 2, './img/nemesis.jpg'),
    new Libro('Los elefantes pueden recordar', 'Agatha Christie', 1972, 'Misterio', 7, 3, './img/los-elefantes-pueden-recordar.jpg'),
    new Libro('David Copperfield', 'Charles Dickens', 1950, 'Novela', 8, 4, './img/david-copperfield.jpg'),
    new Libro('Narciso y Golmundo', 'Hermann Hesse', 1930, 'Novela', 9, 5, './img/narciso-y-golmundo.jpg'),
    new Libro('Los Borgia', 'Mario Puzo', 2001, 'Novela histórica', 9, 6, './img/los-borgia.jpg'),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 1937, 'Novela fantástica', 10, 7, './img/el-hobbit.jpg')
]

//--------------------------Ordenar el array de acuerdo a lo que se elija-----------------------------//
let criterio = parseInt(prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)'));

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case 1:
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreAscendente;
        case 2:
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombreDescendente;
        case 3:
            let valoracionDescendente = arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
            return valoracionDescendente;
        case 4:
            let anioAscendente = arrayOrdenado.sort((a, b) => a.anio - b.anio);
            return anioAscendente;
        default:
            return alert('No es un criterio válido');
    }

}
//--------------------------Fin de ordenar el array de acuerdo a lo que se elija-----------------------------//



//--------------------------Crear el string con los resultados-----------------------------//
function mostrar(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Título: ' + elemento.titulo + '\nAutor: ' + elemento.autor + '\nAño de publicación: ' + elemento.anio + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    });

    return info;
}
//--------------------------Fin de crear el string con los resultados-----------------------------//


alert(mostrar(ordenar(criterio, libros))); */



/* 
//Objeto Math
console.log(Math.PI)

//Métodos para obtener máximos y mínimos (Más adelante vamos a ver como usar un array como parámetro de estos métodos)
let maximo = Math.max(22, 64, -54, -12, 78, 145);
console.log(maximo); //-54
let minimo = Math.min(22, 64, -54, -12, 78, 145);
console.log(minimo);//145

//método ara obtener números pseudo-aleatorios
let azar = Math.random();
console.log(azar);

let azar1a10 = Math.random() * 10;
console.log(azar1a10);

//Métodos de redondeo
console.log(Math.ceil(azar));
console.log(Math.floor(azar));
console.log(Math.round(azar));
console.log(Math.trunc(azar));

//Ejemplo de uso de random y redondeo
let dados = []

for (let i = 0; i < 5; i++) {
    let dado = Math.ceil(Math.random() * 6);
    dados.push(dado);
}

console.log(dados);



 */

/*
//Clase Date para manejo de fechas

let fechaActual = new Date();
console.log(fechaActual);

let fechaSimple = new Date(2022, 6, 15);
console.log(fechaSimple);

let ultimoSegundo = new Date(2022, 11, 31, 23, 59, 59);
console.log(ultimoSegundo);

//Métodos para obtener valores singulares de la fecha
console.log(ultimoSegundo.getFullYear());
console.log(ultimoSegundo.getMonth());
console.log(ultimoSegundo.getDay());
console.log(ultimoSegundo.getDate());
console.log(ultimoSegundo.toString());
*/