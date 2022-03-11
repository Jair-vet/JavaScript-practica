// Unir 2 Objetos o más

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Jair",
    premium: true
}

// Nos devuelve un nuevo Objeto
// Muta un nuevo Objeto
// const nuevoObjeto = Object.assign(producto, cliente) // NO
// * Mantener el estado de las variables
const nuevoObjeto2 = { 
    producto: { ...producto },
    cliente: { ...cliente }
 }
// console.log(nuevoObjeto);
console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);
