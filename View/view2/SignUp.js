// i watched the cideo "javascript validation 

function validering(){

let email = document.getElementById('email').value;
let username = document.getElementsByTagName('username').value;
let password= document.getElementById('password').value;
let firstName= document.getElementById('firstName').value;
let lastName= document.getElementById('lastName').value;
let birthday= document.getElementById('birthday').value;
let cpr= document.getElementById('cpr').value;
//let gender= document.getElementById('gender').value;

//fill in gender later on
const SignUpUser = { email, username, password, firstName, lastName, birthday, cpr}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'

    },
    body: JSON.stringify(SignUpUser)
};
//fetch = contact the API
fetch('http://localhost:5000/users', options);

/*    if(email.value==0){
    alert("Put in email");
    } else if (!email.value.match("@")) {
    alert("Invalid email!");
    };

    if (username.value==0) {
        alert("Type in username")
    };
    if (password.value==0) {
        alert("Type in password")
    };

    if (birthday.value == 0) {
        alert ("Type in your birthday");
    };

    if (cpr.value == 0){
        alert("Type in cpr number");
    } else if (cpr.lenght > 10){
        alert ("Don't forget the 10 numbers!")
    };

    if (gender.selectedIndex == 0) {
        alert ("Choose gender!");
    };

};

password.addEventListener("keyup", function passwordValidation() {
    if(password.value.length < 10) {
        message1.innerHTML = "Password must be more than 10 characters";
    } 
    else { message1.innerHTML = ""; 
    }; 

    if (!password.value.match(/[A-Z]/)) {
        message2.innerHTML = "Password must to contain at least one capital letter";
    } else { message2.innerHTML = "";
    }; 

   //do the addeventlistener

*/
};




