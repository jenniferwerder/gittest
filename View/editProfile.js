function editProfile() {
let email = document.getElementById("email").value;
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let password = document.getElementById("password").value;
let age = document.getElementById("age ").value;
let cpr = document.getElementById("cpr").value;

    //when the login works, it wants it to send the ID back again
    //or newInformation.id??
    var userId = localStorage.getItem("newInformation")
    const options = {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        }
    
    }
    fetch(`http://localhost:5000/users/${email}`, options)
    }
    //document.getElementById("a").onclick = Bar;