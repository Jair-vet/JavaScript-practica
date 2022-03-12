// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarApi = () => {

    fetch(url).then( (resp) => {
        return resp.json()
    })
    .then( (result) => {
        result.forEach( comentario => {
            console.log(comentario);
        })
    })
}

consultarApi()
