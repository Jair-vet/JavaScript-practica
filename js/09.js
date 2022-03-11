// ? Operaciones en los Arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

//? Añadir elementos al Array
// tecnologias.push('GraphQl')      // lo agrega al Final
// tecnologias.unshift('GraphQl')   // lo agrega al Inicio

//! No Modifica el Arreglo Original
// const nuevoArreglo = [...tecnologias, 'GraphQl']     // AGREGA AL FINAL
// const nuevoArreglo = ['GraphQl', ...tecnologias]        // AGREGA AL INICIO


//? Eliminar elementos del Array
// tecnologias.pop()         // elimina del final
// tecnologias.shift()       // elimina del Inicio
// tecnologias.splice(2, 1)  // Elimina una posicion en especifica

nuevoArraay = tecnologias.filter( function(tech) {
    return tech !== 'HTML' // Trar todos excepto 
})



//? Modificar elementos del Array


console.table(tecnologias);
console.table(nuevoArraay);


