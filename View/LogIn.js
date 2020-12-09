
/*function getInfo() {
var email = document.getElementById('email/username').value
var password = document.getElementById('password').value

for (i = 0; < objPeople.length; i++) {
    if(email == objPeople[i].username && password == objPeople[i].password){
    
    }
}*/

    fetch(´http://localhost:5000/users${email}´)
    .then(response => response.json()) //convert to JSON
    .then(data => {
        if (email === "user")
        
    }


    

    /*function checkUserInput(userInput){
    if(users.indexOf(userInput) > -1){
        alert("You are logged in");
        return;
      }
      else{
        alert("Invalid username, please try again or if you are new register");
        return;    
        
     
    } */
             
  
}
  
  
