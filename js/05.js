// Manipulación de Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// ? No alterar el Objeto
// Object.freeze(producto)
// ? No te permite añadir nuevas ni Eliminarlas
// Object.seal(producto)


// alterando el Objeto
producto.nombre = "Monitor Curvo"

// Añadir una nueva propiedad al Objeto
producto.imagen = 'imagen.jpg'

// Eliminar Propiedades
delete producto.disponible

console.table(producto);
