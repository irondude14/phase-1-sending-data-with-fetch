// Add your code here

function submitData(name, email) {
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    }
    return fetch('http://localhost:3000/users', postData)
    .then(res => res.json())
    .then(newUser => document.body.innerHTML = newUser.id)
    .catch(error => document.body.innerHTML = error.message)
}