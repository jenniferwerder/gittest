
function LogIn (){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(5)
  //$ = put in variable that we have declared earlier 
  //then = first get the result, then do what's inside the promise 
  //fetch(`http://localhost:5000${email}`).then((response)=> response.json()).then(function(userInformation){
  console.log(9)
  // err,email (should be user)
  db.findone({ email: useremail}, function (err, emails) {

    alert (emails)

  });
const Http = new XMLHttpRequest();
const url='http://localhost:5000';
Http.open("GET", 'http://localhost:5000/users/');
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)

 
}
    //JSON is putting it into a json-array
    //=0 first element in the array 
    //.email = get the value of the email
    
    if (userInformation[0].email==email && userInformation[0].password==password) {
      console.log(19)
      //do login-function later on 
      //want to redirect to your homepage etc 
      window.location.href="profilePage.html" 
    }  
    else {
      alert ("Wrong email or password")  
      console.log(21) 
    }

  
}


/*function myFunction() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    fetch(`http://localhost:5000/users${email}`)
    .then(response => response.json()) //convert to JSON
    .then(data) => {

    if (document.getElementById("password") == password) {
      alert ("success");
    } else {
        alert ("Invalid passord");

      /*console.log("Failure");
      console.log(password);
      console.log(document.getElementById("password"));
    }

    fetch(`http://localhost:5000/user/${email}`)
    .then((response) => response.json())
    .then((data) => {
     
     
    if (document.getElementById("password") == password) {
        alert ("success");
    } else {
          alert ("Invalid passord");

  function submission(){
    let email = document.getElementByID = "email";
    let password = document.getElementByID = "password";
    
  
    let email = new Array();
    let password = new Array();
  }*/

 
  
