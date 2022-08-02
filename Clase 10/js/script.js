/* 
//Crear claves. Los metodos son los mismos para ambos tipos de storage

localStorage.setItem('nombre', 'Alexander');
localStorage.setItem('apellido', 'Windecker');
localStorage.setItem('esMayor',true);
localStorage.setItem('edad',35);

//Si vuelvo a guardar una clave que ya existe, voy a sobreescribir su valor
localStorage.setItem('edad',37);

sessionStorage.setItem('name', 'Juan Villareal');
sessionStorage.setItem('pass', 'pepePateaTraseros');

//Uso info del form para guardarla en el storage
let emailUsuario = document.getElementById('emailAddress');
let btnLogin = document.getElementById('btnLogin');

//La capturo del DOM mediante un botón, y la guardo
btnLogin.addEventListener('click',()=>{
    localStorage.setItem('email',emailUsuario.value);
})


//Recuperar información desde el storage
let nombreUsuario = localStorage.getItem('nombre');
console.log(nombreUsuario);

//Puedo averiguar cuantas claves tengo guardadas, usando la propiedad length
console.log(localStorage.length); */
/* 
//Por defecto, los valores se guardn como strings, independientemente del tipo de dato original. Y se recuperan también como strings.

sessionStorage.setItem('peso',23.4)
let pesoProducto = sessionStorage.getItem('peso');
console.log(pesoProducto);


//Una vez recuperados, hacemos algunos trucos para obtener el tipo de dato correcto
sessionStorage.setItem('altura',1.61)
sessionStorage.setItem('esDarkMode', true);
sessionStorage.setItem('cuotas', [3, 6, 9, 12]);

let medida = parseFloat(sessionStorage.getItem('altura'));
console.log(medida);

let cantCuotas = sessionStorage.getItem('cuotas').split(",");
for (let i = 0; i < cantCuotas.length; i++) {
    cantCuotas[i] = parseInt(cantCuotas[i]);
}
console.log(cantCuotas);

let modo = (sessionStorage.getItem('esDarkMode') == 'true'); 
console.log(modo);
 */


/* 
//acceder a las claves del storage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log('Clave: ' + clave);
    console.log('Valor: ' +valor);
} 
*/

/* 
//Remover claves individuales
sessionStorage.removeItem('esDarkMode');

//Limpiar todo el storage
sessionStorage.clear(); */


/* //Usando JSON y sus métodos para guardar objetos en el storage
let flor = {
    user: "Flor",
    pass: 123,
    esCasada:true
}

sessionStorage.setItem('usuario',JSON.stringify(flor));
let usuarioRecuperado = JSON.parse(sessionStorage.getItem('usuario'));
console.log(sessionStorage.getItem('usuario'));
console.log(usuarioRecuperado); */

//---------------------------------------//

//ejemplo en Login
let btnLogin = document.getElementById('btnLogin');
let btnVaciarTodo = document.getElementById('btnVaciarLocalStorage');
let btnVaciarSessionStorage = document.getElementById('btnVaciarSessionStorage');
let recordar = document.getElementById("rememberMe");

function guardarDatos(storage) {
    let user = document.getElementById('emailAddress').value;
    let pass = document.getElementById('password').value;


    const usuario = {
        "user": user,
        "pass": pass
    }


    if (storage === "localStorage") {
        localStorage.setItem('user', JSON.stringify(usuario));
    }

    if (storage === "sessionStorage") {
        sessionStorage.setItem('user', JSON.stringify(usuario));
    }
}

function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(storage, key) {
    storage.removeItem(key);
}


btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        guardarDatos('localStorage');
    } else {
        guardarDatos('sessionStorage');
    }
})


btnVaciarSessionStorage.addEventListener('click', () => {
    borrarDatos(sessionStorage);
});

btnVaciarTodo.addEventListener('click', () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
})


/* recupero la info del storage al cargar la página
window.onload = () => {
    let usuarioEnStorage = JSON.parse(localStorage.getItem('user'));
    console.log(usuarioEnStorage);
    if (usuarioEnStorage) {
        alert('Hay info'); //este alert es sólo para mostrar que hay info, en realidad se haría otra cosa
        //Acá pueden usar esta info para completar los datos o recorrer un array de usuarios y loguear a la persona
    } else {
        alert('No hay info'); //este alert es sólo para mostrar que NO hay info, en realidad se haría otra cosa (o nada, se deja que la persona use el form para loguearse)
    }
} */
