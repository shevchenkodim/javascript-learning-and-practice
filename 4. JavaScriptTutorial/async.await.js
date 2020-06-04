const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

/* function fetchTodos() {
    console.log('Fetch to do started...')

    return delay(2000)
        .then(() => fetch(url))
        .then(response => response.json())
}

fetchTodos()
    .then(data => {
        console.log('Data', data)
    })
    .catch(e => console.log(e)) */

async function fetchAsyncTodods() {
    try {
        console.log('Fetch to do started...')
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data: ', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally :)')
    }
}

fetchAsyncTodods()
