// Objetos
// 
// const nombre = "Tablet"
// const precio = 300
// const disponible = true

// Un Objeto
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto);
console.table(producto);

console.log(producto.nombre); // Conla sintaxis de . accedes a sus propiedades
console.log(producto.precio); 
console.log(producto.disponible); 


// ? Destructuring
const { nombre, precio } = producto
console.log(nombre, precio);


// ? Object Literal Enhacement
// Variables que estan fuera del objeto Colocarlas dentro de uno
const autenticado = true
const usuario = "Jair"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)