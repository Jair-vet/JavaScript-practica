// Function Expression
// La diferencia es que las variables no se registran en la fase de creación
// Hasta la fase de ejecusión , por eso el llamado debe de ir despues de la 
// declaracion de la funcion


const sumar = function(numero = 0, numero2 = 0){
    console.log( numero + numero2);
}

sumar(20, 90)
