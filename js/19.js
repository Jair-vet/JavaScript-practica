
const saldo = 600
const pagar = 500
const tarjeta = true


if( saldo > pagar || tarjeta){
    console.log('Puedes pagar con tu saldo');

} else if(tarjeta){
    console.log('Puedes pagar con tu tarjeta');

} else{
    console.log('No puedes pagar ');
}
