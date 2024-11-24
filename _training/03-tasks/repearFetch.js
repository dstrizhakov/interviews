const repeatFetch = (url, options = {}, retry = 5) => {
    return fetch(url, options).then(res => {
        if (!res.ok) {
            throw new Error('No response from server')
        } else {
            return res.json();
        }
    }).catch(err => {
        if (retry > 0) {
            console.log('Retrying...', retry);
            return repeatFetch(url, options, retry - 1);
        }
        throw err;
    })
}



repeatFetch('https://jsonplaceholder.typicode.com/users/2k')
    .then(res => {
    console.log(res);
}).catch(err => {console.log(err)})

// setTimeout(() => {
//     controller.abort('Network not respond 500ms')
// }, 500)