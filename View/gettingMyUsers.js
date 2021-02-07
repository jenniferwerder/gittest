// Getting the email fron local storage
var email = localStorage.getItem("email");

fetch(`http://localhost:5000/users/${email}`).then((resp) => resp.json()).then(function(data) {
    // Inserting the info already in storage
    document.getElementById('firstName').defaultValue = data[0].firstName;
    document.getElementById('lastName').defaultValue = data[0].lastName;
    document.getElementById('password').defaultValue = data[0].password;
    document.getElementById('cpr').defaultValue = data[0].cpr;
    document.getElementById('age').defaultValue = data[0].age;
})