const baseUrl = 'http://localhost:3001/posts/';

function manageData(method, options, data) {
    return fetch(baseUrl + options, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
}

export default manageData;