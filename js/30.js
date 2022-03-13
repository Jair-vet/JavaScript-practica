// Fetch API - Async / Await

const url = "https://jsonplaceholder.typicode.com/comments"


// const consultarApi = () => {
// 
//     fetch(url).then( (resp) => {
//         return resp.json()
//     })
//     .then( (result) => {
//         result.forEach( comentario => {
//             console.log(comentario);
//         })
//     })
// }

const consultarApi  = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    console.log(resultado);
}
consultarApi()
