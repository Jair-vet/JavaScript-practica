// Ternarios

const autenticado = false

autenticado ?
    console.log('Usuario Autenticado')  :
    console.log('No autenticado, dirigir al login')


// Doble Ternario
const saldo = 600
const pagar = 500
const tarjeta = true

// Segunda comprobación con Ternarios
saldo > pagar ? 
    console.log('Puedes pagar con Saldo') :
    tarjeta ?
    console.log('Puedes pagar con Tarjeta') :
    console.log('No puedes pagar')