document.getElementById("btn").addEventListener("click", function (event) {
// error in browser, waits until the i press "ok" 
event.preventDefault();
    
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


/*function ConfirmDelete(){
    if (confirm("Do you really want to delete your Account?")){
          return true;
    }
    else {
       alert('sorry');
       return false;
    }
}*/