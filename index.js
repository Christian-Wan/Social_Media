async function getUsers() {
    let URL = ["https://jsonplaceholder.typicode.com/users/1", "https://jsonplaceholder.typicode.com/users/2", "https://jsonplaceholder.typicode.com/users/3", "https://jsonplaceholder.typicode.com/users/4"]
    var number = 0;
    for (const link of URL) {
        number++;
        const response = await fetch(link)
        const data = await response.json()
        console.log(data)
        document.getElementById("user" + number + "Name").innerHTML += "Name: " + JSON.stringify(data['name'])
        document.getElementById("user" + number + "Email").innerHTML += "Email: " + JSON.stringify(data['email'])
        document.getElementById("user" + number + "City").innerHTML += "City: " + JSON.stringify(data['address']['city'])
        document.getElementById("user" + number + "Street").innerHTML += "Street: " + JSON.stringify(data['address']['street'])
        document.getElementById("user" + number + "Company").innerHTML += "Company: " + JSON.stringify(data['company']['name'])
    }
}


async function getComments() {
    let URL = ["https://jsonplaceholder.typicode.com/comments/1", "https://jsonplaceholder.typicode.com/comments/2", "https://jsonplaceholder.typicode.com/comments/3", "https://jsonplaceholder.typicode.com/comments/4"]
    var number = 0;
    for (const link of URL) {
        number++;
        const response = await fetch(link)
        const data = await response.json()
        console.log(data)
        document.getElementById("user" + number + "Comment").innerHTML += "Comment)" + JSON.stringify(data  ['body'])
    }
}

getUsers()
getComments()