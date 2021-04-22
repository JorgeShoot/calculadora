let pantalla = document.querySelector('#resultado');

function obtNum(ref) { //obtiene el boton pulsado
    let value = ref.value; //obtiene el valor del boton pulsado
    pantalla.value += value; //añade el valor a la pantalla
}

function cleanss() {
    pantalla.value = ''; //cambia el valor de la pantalla por un vacio
}

function usar() {
    try {
        pantalla.value = eval(pantalla.value); //la funcion eval es la funcion que hace que lo ingresado se tome como expresion matematica
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}