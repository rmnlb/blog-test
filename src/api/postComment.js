const baseUrl = 'http://localhost:3001/comments';

function postComment(id, data) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: id,
            body: data
        })
    })
        .then(res => res.json())
}

export default postComment;