function editProfile(){

}

function gettingUserInformation (){
    let email = localStorage.getItem("email")
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    
    }
    fetch(`http://localhost:5000/users/${email}`, options).then((resp)=> resp.json ()).then(function(userInformation){
      document.getElementById("firstName").defaultValue = "hej"
    })
    }



    //when the login works, it wants it to send the ID back again
    //or newInformation.id??
   
    //document.getElementById("a").onclick = Bar;


    /*function editProfile() {
        let email = document.getElementById("email").value;
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let password = document.getElementById("password").value;
        let age = document.getElementById("age ").value;
        let cpr = document.getElementById("cpr").value;*/