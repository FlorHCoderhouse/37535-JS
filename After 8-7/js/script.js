let savedPIN = '5682';
let ingresar = false;

//Login

for (let i = 2; i >= 0; i--) {
    let userPIN = prompt('Ingresa tu pin. Tenés ' + (i + 1) + ' intentos.');
    if (userPIN === savedPIN) {
        alert('Login exitoso');
        ingresar = true;
        break;
    } else {
        alert('Error. Te quedan ' + i + ' intentos.');
    }

}

//alert('fin del login');

if (ingresar) {
    //"Accedemos" a la info de la cuenta
    let saldo = 5000;
    
    let opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.');
//Loop de opciones del cajero
    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;
            case '2':
                let retiro = parseInt(prompt('Ingresa cantidad a retirar'));
                if (retiro <= saldo) {
                    saldo-=retiro;
                    // Es equivalente a la linea anterior
                    //saldo = saldo - retiro;
                    alert('Retiro exitoso. Tu nuevo saldo es $ ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;
            case '3':
                let deposito = parseInt(prompt('Ingresa monto a depositar'));
                saldo += deposito;
                // Es equivalente a la linea anterior
                //saldo = saldo+deposito;
                alert('Depósito exitoso. Tu nuevo saldo es $ ' + saldo);
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }

        opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.'); 
    }


} else {
    //aviso de bloqueo de tarjeta
    alert('Retendremos tu tarjeta por seguridad');
}

alert('Adiós');