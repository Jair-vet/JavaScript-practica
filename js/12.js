// Funciones -Function Declaration

function sumar() {
    console.log(2 + 2);
}


sumar()

// Funciones

function sumar(numero = 0, numero2 = 0) {
    return [numero - numero2, 'Hola mundo']
}


const [resultado, holaMundo] = sumar(100, 30)

console.log(resultado, holaMundo);
