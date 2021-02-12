function DeleteAccount() {
//when the login works, it wants it to send the ID back again
var email = localStorage.getItem("email")
const options = {
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }


}
fetch(`http://localhost:5000/users/${email}`, options)
}



