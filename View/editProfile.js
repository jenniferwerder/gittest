function editProfile(){
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

}

let firstName = document.getElementsById("firstName").value;
let lastName = document.getElementsById("lasttName").value;
let password = document.getElementsById("password").value;
let cpr = document.getElementsById("cpr").value;
let age = document.getElementsById("age").value;

const editProfile = {firstName, lastName, password, cpr, age};

    const options = {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(editProfile),
    
    }
    fetch(`http://localhost:5000/users/${email}`, options)
      alert ("hej")
    
   
     