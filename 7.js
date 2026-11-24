
fetch("https://jsonplaceholder.typicode.com/users/3")
    .then(response => response.json())
    .then(data => {
        console.log(data.phone);
    })
    .catch(error => {
        console.log("Error:", error);
    });
