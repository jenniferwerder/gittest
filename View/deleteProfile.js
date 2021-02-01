function DeleteAccount() {
//when the login works, it wants it to send the ID back again
var userId = localStorage.getItem("userId")
const options = {
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }

}
fetch(`http://localhost:5000/users/${userId}`, options)
}


/*function ConfirmDelete(){
    if (confirm("Do you really want to delete your Account?")){
          return true;
    }
    else {
       alert('sorry');
       return false;
    }
}  */