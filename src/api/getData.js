const baseUrl = 'http://localhost:3001/';

async function getData(options, fn) {
    return fetch(baseUrl + options, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
         }
     })
        .then(res => res.json())
        .then(res => fn(res))
        .catch(err => console.log(err));
}

export default getData;