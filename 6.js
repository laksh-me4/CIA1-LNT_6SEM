
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
    })
    .catch(error => {
        console.log("Error:", error);
    });
