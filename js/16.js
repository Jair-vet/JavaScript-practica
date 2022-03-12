
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
const numeros = [10,20,30]

let nuevoArray;

// Filter
nuevoArray = tecnologias.filter( tech =>  tech !== 'React')

// INCLUDES: Comprpbar si un elemento existe en el Array
//const resultado = tecnologias.includes('CSS')


// SOME: Devuelve si almenos uno cumple la condicón
// const resultado = numeros.some( numero => numero > 15)


// FIND: Devuelve el primer elemento que cumpla la condición
// const resultado = numeros.find( numero => numero > 5)


// EVERY: Retorna True o False si todos cumplen la condicion
// const resultado = numeros.every( numero => numero > 15)


// REDUCE: va Acomulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 )


// FILTER: Crea un nuevo arreglo en base a una condición
// const resultado = tecnologias.filter( tech => tech !== 'NodeJS')
const resultado = numeros.filter( num => num > 15)


console.log(resultado);
