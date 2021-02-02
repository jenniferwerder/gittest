document.getElementById("btn").addEventListener("click", function (event) {
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
        //do login-function later on
        //want to redirect to your homepage etc
        alert("User is correct")
        //Figure out where to send the user aftwards
        window.location.href = "profilePage.html";
      } else {
        alert("Wrong email or password");
      }
    })
    .catch(err =>{
      alert(err)
    });
});

//function rememberMe
