document.getElementById("btn").addEventListener("click", function (event) {
// error in browser, waits until the i press "ok" 
event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log("asd");

  fetch(`http://localhost:5000/users/${email}`, {
    method:'GET',
    redirect:'manual'
  })
    .then((resp) => resp.json())
    .then(function (userInformation) {
      console.log(userInformation);

      if (
        userInformation[0].email == email &&
        userInformation[0].password == password

      ) {
        rememberMe(email, password);
        window.location.href = "editProfile.html";
        //want to redirect to your homepage etc
        alert("User is correct")
        //Figure out where to send the user aftwards
        //property, tell you the current URL location of the browser (redirects)
        
      } else {
        alert("Wrong email or password");
      }
    })
    //catching errors after running through the code 
    .catch(err =>{
      alert(err)
    });

  });

  function rememberMe(email, password){
    localStorage.setItem('email',email);
    localStorage.setItem('password', password);
  }




/*A way of saving the log-in function with expire date

//name, value, expire date
Cookies.set("email", "true", {expires: 30});

let myCookie = Cookies.get("coool");

let email = document.querySelector("email")
let password = document.querySelector("password")
//if my cookie is true, in relation to the class
if(myCookie){
email.classList.add("cookie"),
password.classList.add("cookie");

}

if(myCookie = "false"){
  title.classList.remove("cookie");
}*/



