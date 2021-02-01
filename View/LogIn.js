    function LogIn (){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', 'http://localhost:5000/users/' + IDBCursor, true)
  xhttp.setRequestHeader("content-Type", "application/json");
  xhttp.send()
  xhttp.responseType = "text"
  xhttp.onload = function() {
    location.replace("/View/editProfile.html")
  }

   /*const Http = new XMLHttpRequest();
   const url=`http://localhost:5000/users/${email}`;
   Http.open("GET", url);
   Http.setRequestHeader("Content-Type", "application/json");
   Http.send();
     
   Http.onload = (e) => {
   
   }*/
    
  //$ = put in variable that we have declared earlier 
  //then = first get the result, then do what's inside the promise 
  
  /*fetch(`http://localhost:5000/users/${email}`).then((resp) => resp.json()).then(function(userInformation){
    console.log (resp)
  
    if (userInformation[0].email==email && userInformation[0].password==password) {
     
      //do login-function later on 
      //want to redirect to your homepage etc 
      window.location.href="profilePage.html" 
    }  
    else {
      alert ("Wrong email or password")  
     
    }
  
  });*/


//}

    //JSON is putting it into a json-array
    //=0 first element in the array 
    //.email = get the value of the email
  

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

    }

