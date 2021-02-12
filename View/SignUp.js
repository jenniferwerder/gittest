//make the function
function SignUp (){
let email = document.getElementById('email').value;
let password= document.getElementById('password').value;
let firstName= document.getElementById('firstName').value;
let lastName= document.getElementById('lastName').value;
let age= document.getElementById('age').value;
let cpr= document.getElementById('cpr').value;


//make an object
user = {email:email, password, firstName, lastName, age, cpr}

//console.log(user)
let options = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/JSON'
    },
    body: JSON.stringify (user)
}
// i watched the cideo "javascript validation 
fetch('http://localhost:5000/users', options);

} 

